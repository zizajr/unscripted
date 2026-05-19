interface ThreeBarMarkProps {
  size?: number;
  className?: string;
}

export default function ThreeBarMark({ size = 32, className = "" }: ThreeBarMarkProps) {
  const barW  = size * 0.22;
  const barH  = size;
  const gap   = size * 0.12;
  const total = barW * 3 + gap * 2;

  return (
    <svg
      width={total}
      height={barH}
      viewBox={`0 0 ${total} ${barH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Gold bar left */}
      <rect x={0}                    y={0} width={barW} height={barH} fill="#F2B705" rx={1} />
      {/* Purple bar center */}
      <rect x={barW + gap}           y={0} width={barW} height={barH} fill="#8B2FC9" rx={1} />
      {/* Gold bar right */}
      <rect x={(barW + gap) * 2}     y={0} width={barW} height={barH} fill="#F2B705" rx={1} />
    </svg>
  );
}
