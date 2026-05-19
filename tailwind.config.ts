import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold:     "#F2B705",
        violet:   "#8B2FC9",
        ink:      "#0A0A0A",
        slate:    "#1C1C2E",
        cream:    "#F8F5EE",
        graphite: "#3D3D3D",
        kigali:   "#FF6B35",
        doha:     "#00A896",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body:    ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        accent:  ["var(--font-bebas)", "Impact", "sans-serif"],
      },
      backgroundImage: {
        "grid-overlay": "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 0, transparent 60px)",
      },
      animation: {
        "slow-pan": "slowPan 20s ease-in-out infinite alternate",
        "fade-in":  "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
      },
      keyframes: {
        slowPan: {
          "0%":   { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
