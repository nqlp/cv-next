export default function SectionHeading({ children, number, caption }: { children: React.ReactNode; number?: string; caption?: string; accentClass?: string }) {
  return <div className="section-heading"><div>{number && <span className="eyebrow section-number">{number} /</span>}<h2>{children}<span className="heading-dot">.</span></h2></div>{caption && <p>{caption}</p>}</div>;
}