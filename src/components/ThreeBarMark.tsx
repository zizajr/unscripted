interface ThreeBarMarkProps {
  size?: number;
  className?: string;
  /** Show the rounded-square background (ink). Useful for standalone logo usage. */
  withBackground?: boolean;
}

/**
 * Official Unscripted three-bar mark.
 * Gold (full height) | Purple (shorter, bottom-aligned) | Gold (full height)
 * Proportions mirror the official favicon SVG (viewBox 0 0 100 100).
 */
export default function ThreeBarMark({ size = 32, className = "", withBackground = false }: ThreeBarMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      role="img"
      aria-label="Unscripted logo mark"
      className={className}
    >
      {withBackground && <rect width="100" height="100" rx="18" fill="#0A0A0A" />}
      {/* Left gold bar — full height */}
      <rect x="22" y="18" width="16" height="64" rx="3" fill="#F2B705" />
      {/* Center purple bar — shorter, starts lower */}
      <rect x="42" y="35" width="16" height="47" rx="3" fill="#8B2FC9" />
      {/* Right gold bar — full height */}
      <rect x="62" y="18" width="16" height="64" rx="3" fill="#F2B705" />
    </svg>
  );
}
