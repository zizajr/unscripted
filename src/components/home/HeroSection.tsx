"use client";
import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

/* ─────────────────────────────────────────
   Snake Game Constants
───────────────────────────────────────── */
const CELL  = 20;   // px per cell
const SPEED = 300;  // ms per tick (slower for better playability)

type Dir = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Pt  = { x: number; y: number };

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  alpha: number;
  decay: number;
};

function randomCell(cols: number, rows: number): Pt {
  return {
    x: Math.floor(Math.random() * cols),
    y: Math.floor(Math.random() * rows),
  };
}

/* ─────────────────────────────────────────
   Snake Canvas Component
───────────────────────────────────────── */
function SnakeGame({ size, dict }: { size: number, dict?: any }) {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const stateRef   = useRef<{
    snake: Pt[];
    dir: Dir;
    nextDir: Dir;
    food: Pt;
    alive: boolean;
    paused: boolean;
    timer: ReturnType<typeof setTimeout> | null;
    glowTimer: ReturnType<typeof setTimeout> | null;
    glowing: boolean;
    particles: Particle[];
  }>({
    snake:     [{ x: 5, y: 5 }],
    dir:       "RIGHT",
    nextDir:   "RIGHT",
    food:      { x: 10, y: 10 },
    alive:     true,
    paused:    false,
    timer:     null,
    glowTimer: null,
    glowing:   false,
    particles: [],
  });
  const labelRef = useRef<HTMLDivElement>(null);

  const cols = Math.floor(size / CELL);
  const rows = Math.floor(size / CELL);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    // Background
    ctx.fillStyle = "#0A0A0A";
    ctx.fillRect(0, 0, size, size);

    // Subtle grid dots
    ctx.fillStyle = "rgba(255,255,255,0.03)";
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        ctx.arc(c * CELL + CELL / 2, r * CELL + CELL / 2, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Food (Cream circle)
    const fc = s.food;
    ctx.fillStyle = "#F8F5EE";
    ctx.beginPath();
    ctx.arc(fc.x * CELL + CELL / 2, fc.y * CELL + CELL / 2, 4, 0, Math.PI * 2);
    ctx.fill();

    // Snake (Gold segments) - only draw if alive
    if (s.alive) {
      s.snake.forEach((seg, i) => {
        const alpha = i === 0 ? 1 : Math.max(0.5, 1 - i * 0.04);
        ctx.fillStyle = i === 0 ? "#F2B705" : `rgba(242,183,5,${alpha})`;
        const pad = i === 0 ? 1 : 2;
        const r   = i === 0 ? 4 : 3;
        roundRect(ctx, seg.x * CELL + pad, seg.y * CELL + pad, CELL - pad * 2, CELL - pad * 2, r);
        ctx.fill();
      });
    }

    // Glow border
    if (s.glowing) {
      ctx.strokeStyle = "rgba(242,183,5,0.9)";
      ctx.lineWidth   = 2;
      ctx.strokeRect(1, 1, size - 2, size - 2);
    }
  }, [size, cols, rows]);

  const spawnFood = useCallback(() => {
    const s = stateRef.current;
    let f: Pt;
    do { f = randomCell(cols, rows); }
    while (s.snake.some(p => p.x === f.x && p.y === f.y));
    s.food = f;
  }, [cols, rows]);

  const spawnExplosion = useCallback((x: number, y: number) => {
    const s = stateRef.current;
    s.particles = [];
    const colors = ["#F2B705", "#F8F5EE", "rgba(242,183,5,0.8)", "#FFFFFF", "#8B2FC9"];
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.5 + Math.random() * 5;
      s.particles.push({
        x: x * CELL + CELL / 2,
        y: y * CELL + CELL / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2 + Math.random() * 3,
        alpha: 1,
        decay: 0.015 + Math.random() * 0.02,
      });
    }
  }, []);

  const animateExplosion = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const s = stateRef.current;

    // Redraw background & grid
    ctx.fillStyle = "#0A0A0A";
    ctx.fillRect(0, 0, size, size);

    ctx.fillStyle = "rgba(255,255,255,0.03)";
    for (let c = 0; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        ctx.arc(c * CELL + CELL / 2, r * CELL + CELL / 2, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Draw active particles
    s.particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08; // gravity
      p.alpha -= p.decay;

      if (p.alpha > 0) {
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    });
    ctx.globalAlpha = 1.0;

    s.particles = s.particles.filter(p => p.alpha > 0);

    if (s.particles.length > 0) {
      requestAnimationFrame(animateExplosion);
    }
  }, [size, cols, rows]);

  const tick = useCallback(() => {
    const s = stateRef.current;
    if (!s.alive || s.paused) return;

    s.dir = s.nextDir;
    const head = s.snake[0];
    const next: Pt = {
      x: head.x + (s.dir === "RIGHT" ? 1 : s.dir === "LEFT" ? -1 : 0),
      y: head.y + (s.dir === "DOWN"  ? 1 : s.dir === "UP"   ? -1 : 0),
    };

    // Border collision or self collision
    const hitWall = next.x < 0 || next.x >= cols || next.y < 0 || next.y >= rows;
    const hitSelf = s.snake.slice(1).some(p => p.x === next.x && p.y === next.y);

    if (hitWall || hitSelf) {
      s.alive = false;
      draw();
      if (s.timer != null) clearTimeout(s.timer);

      // Trigger explosion at head's location (clamped to border if wall hit)
      const explosionX = Math.max(0, Math.min(cols - 1, next.x));
      const explosionY = Math.max(0, Math.min(rows - 1, next.y));
      spawnExplosion(explosionX, explosionY);
      animateExplosion();

      if (canvasRef.current) {
        canvasRef.current.style.opacity = "0.4";
        setTimeout(() => {
          if (canvasRef.current) canvasRef.current.style.opacity = "1";
          s.snake   = [{ x: Math.floor(cols / 3), y: Math.floor(rows / 2) }];
          s.dir     = "RIGHT";
          s.nextDir = "RIGHT";
          s.alive   = true;
          spawnFood();
          if (s.timer != null) clearTimeout(s.timer);
          s.timer = setTimeout(tick, SPEED);
          if (labelRef.current) labelRef.current.textContent = dict?.playSnake || "[ USE ARROW KEYS TO PLAY ]";
        }, 2000);
      }
      if (labelRef.current) labelRef.current.textContent = dict?.gameOver || "[ GAME OVER ]";
      return;
    }

    s.snake.unshift(next);

    // Eat food
    if (next.x === s.food.x && next.y === s.food.y) {
      spawnFood();
      s.glowing = true;
      if (s.glowTimer != null) clearTimeout(s.glowTimer);
      s.glowTimer = setTimeout(() => { s.glowing = false; }, 400);
      if (labelRef.current) labelRef.current.textContent = dict?.playing || "[ PLAYING ]";
    } else {
      s.snake.pop();
    }

    draw();
    s.timer = setTimeout(tick, SPEED);
  }, [cols, rows, draw, spawnFood, spawnExplosion, animateExplosion, dict]);

  useEffect(() => {
    const s    = stateRef.current;
    (window as any).__snakeState = s; // Assign to window so scroll logic can access it
    s.snake    = [{ x: Math.floor(cols / 3), y: Math.floor(rows / 2) }];
    s.dir      = "RIGHT";
    s.nextDir  = "RIGHT";
    s.alive    = true;
    s.paused   = false;
    s.particles = [];
    spawnFood();
    draw();
    s.timer = setTimeout(tick, SPEED);

    // Keyboard input
    const onKey = (e: KeyboardEvent) => {
      const keysToPrevent = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " ", "Spacebar"];
      if (keysToPrevent.includes(e.key)) {
        e.preventDefault(); // Stop window scroll when playing
      }

      const { nextDir: d } = s;
      if (!s.alive) {
        if (e.key === " " || e.key === "Spacebar") {
          // Restart immediately on Space!
          s.snake   = [{ x: Math.floor(cols / 3), y: Math.floor(rows / 2) }];
          s.dir     = "RIGHT";
          s.nextDir = "RIGHT";
          s.alive   = true;
          s.paused  = false;
          s.particles = [];
          spawnFood();
          if (s.timer != null) clearTimeout(s.timer);
          s.timer = setTimeout(tick, SPEED);
          if (labelRef.current) labelRef.current.textContent = dict?.playSnake || "[ USE ARROW KEYS TO PLAY ]";
          draw();
        }
        return;
      }

      if ((e.key === "ArrowUp"    || e.key === "w") && d !== "DOWN")  s.nextDir = "UP";
      if ((e.key === "ArrowDown"  || e.key === "s") && d !== "UP")    s.nextDir = "DOWN";
      if ((e.key === "ArrowLeft"  || e.key === "a") && d !== "RIGHT") s.nextDir = "LEFT";
      if ((e.key === "ArrowRight" || e.key === "d") && d !== "LEFT")  s.nextDir = "RIGHT";
    };
    window.addEventListener("keydown", onKey, { passive: false });

    // Pause on tab blur
    const onBlur  = () => { s.paused = true; };
    const onFocus = () => {
      if (!s.paused) return;
      s.paused = false;
      if (s.timer != null) clearTimeout(s.timer);
      s.timer = setTimeout(tick, SPEED);
    };
    window.addEventListener("blur",  onBlur);
    window.addEventListener("focus", onFocus);

    // Re-trigger tick loop on scroll back to top
    const onScroll = () => {
      const isPausedNow = window.scrollY > 200;
      if (s.paused !== isPausedNow) {
        s.paused = isPausedNow;
        if (!isPausedNow && s.alive) {
          if (s.timer != null) clearTimeout(s.timer);
          s.timer = setTimeout(tick, SPEED);
          if (labelRef.current) labelRef.current.textContent = dict?.playSnake || "[ USE ARROW KEYS TO PLAY ]";
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (s.timer != null) clearTimeout(s.timer);
      if (s.glowTimer != null) clearTimeout(s.glowTimer);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("blur",    onBlur);
      window.removeEventListener("focus",   onFocus);
      window.removeEventListener("scroll",  onScroll);
      delete (window as any).__snakeState;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cols, rows, draw, spawnFood, tick, dict]);

  const onMouseEnter = () => {
    const s = stateRef.current;
    if (s.paused && s.alive) {
      s.paused = false;
      if (s.timer != null) clearTimeout(s.timer);
      s.timer = setTimeout(tick, SPEED);
      if (labelRef.current) labelRef.current.textContent = dict?.playing || "[ PLAYING ]";
    }
  };

  const onMouseLeave = () => {
    const s = stateRef.current;
    if (!s.paused && s.alive) {
      s.paused = true;
      if (s.timer != null) clearTimeout(s.timer);
      if (labelRef.current) labelRef.current.textContent = dict?.hoverResume || "[ HOVER TO RESUME ]";
    }
  };

  return (
    <div
      className="relative flex flex-col items-center gap-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="transition-opacity duration-700"
        style={{
          border: "1px solid rgba(242,183,5,0.30)",
          background: "#0A0A0A",
          display: "block",
        }}
        aria-label="Interactive snake game"
        role="img"
      />
      <div
        ref={labelRef}
        style={{
          fontFamily: "var(--font-bebas)",
          fontSize: "11px",
          letterSpacing: "0.3em",
          color: "rgba(242,183,5,0.5)",
        }}
      >
        {dict?.restart || "[ USE ARROW KEYS TO PLAY / PRESS SPACE TO RESTART ]"}
      </div>
    </div>
  );
}

/* helper: rounded rect path */
function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

/* ─────────────────────────────────────────
   Static Gold/Violet Fallback (reduced motion)
───────────────────────────────────────── */
function StaticFallback({ size }: { size: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "1px solid rgba(242,183,5,0.30)",
        background: "linear-gradient(135deg, rgba(242,183,5,0.15) 0%, rgba(139,47,201,0.15) 100%)",
      }}
    />
  );
}

/* ─────────────────────────────────────────
   Scroll Indicator
───────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <div
        className="relative w-px overflow-hidden"
        style={{ height: 64, background: "rgba(248,245,238,0.15)" }}
      >
        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{ height: 24, background: "rgba(248,245,238,0.6)" }}
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Hero Section (main export)
───────────────────────────────────────── */
export default function HeroSection({ dict, lang }: { dict?: any, lang?: string }) {
  const sectionRef   = useRef<HTMLElement>(null);
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Fade canvas out as user scrolls
  const canvasOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  // Pause game on scroll > 200px
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => {
      const stateRefAny = (window as unknown as { __snakeState?: { paused: boolean; timer: ReturnType<typeof setTimeout>; alive: boolean } }).__snakeState;
      if (stateRefAny) {
        stateRefAny.paused = v > 200;
      }
    });
    return () => unsub();
  }, [scrollY]);

  // Detect prefers-reduced-motion
  const prefersReduced =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const CANVAS_SIZE =
    typeof window !== "undefined" && window.innerWidth < 768 ? 280 : 400;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-start lg:items-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
      aria-label="Hero"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundSize: "300px 300px",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Violet ambient glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "30%",
          right: "15%",
          width: 500,
          height: 500,
          background: "radial-gradient(ellipse, rgba(139,47,201,0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Content grid */}
      <div
        className="relative z-10 w-full flex flex-col lg:flex-row items-center"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(88px, 12vh, 120px) clamp(24px, 6.25vw, 80px) 80px",
          gap: "clamp(40px, 6vw, 80px)",
        }}
      >
        {/* Left: text content */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "12px",
              letterSpacing: "0.35em",
              color: "#F2B705",
            }}
          >
            {dict?.heroOverline || "BRANDING · STRATEGY · COMMUNICATIONS"}
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 10vw, 160px)",
              fontWeight: 900,
              lineHeight: 0.88,
              color: "#F8F5EE",
              letterSpacing: "-0.02em",
            }}
          >
            {dict?.heroDefy || "We Defy"}<br />
            <em style={{ fontStyle: "italic" }}>{dict?.heroReason || "Reason."}</em>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(17px, 2vw, 22px)",
              color: "rgba(248,245,238,0.70)",
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            {dict?.heroSubhead || "We are the digital agency built for brands that believe in achieving the extraordinary. We don't chase trends. We build the record."}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-wrap gap-4"
          >
            <Link href={`/${lang}/contact`} className="btn-gold rounded-full">
              {dict?.startProject || "Start a Project →"}
            </Link>
          </motion.div>
        </div>

        {/* Right: Snake game */}
        <motion.div
          ref={canvasWrapRef}
          style={{ opacity: canvasOpacity }}
          className="hidden lg:flex shrink-0 flex-col items-center"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {prefersReduced ? (
            <StaticFallback size={CANVAS_SIZE} />
          ) : (
            <SnakeGame size={CANVAS_SIZE} dict={dict} />
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Gold bottom rule */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "rgba(242,183,5,0.15)" }}
        aria-hidden="true"
      />
    </section>
  );
}
