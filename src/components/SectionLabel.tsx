interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-xs tracking-widest text-cream/40 uppercase mb-4 ${className}`}
      style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.2em" }}
    >
      {children}
    </p>
  );
}
