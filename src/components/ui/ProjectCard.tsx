import { ArrowUpRight, Bike, Code2, BarChart3 } from "lucide-react";
import TechBadge from "./TechBadge";

interface ProjectProps { title: string; description: string; date: string; tags: string[]; link?: string; context: string; linkLabel: string; index: number; }

// Abstract cover art conveys each project's subject, rather than claiming to be a product screenshot.
function ProjectCover({ index }: { index: number }) {
  return <div className={`project-cover cover-${index}`} aria-hidden="true">
    <span className="cover-index">0{index + 1}</span>
    {index === 0 && <div className="cover-portfolio"><span>PN<span>↗</span></span><div><Code2 size={19} /><span>DESIGN ∩ CODE</span></div></div>}
    {index === 1 && <div className="cover-data"><div className="chart-bars">{[32, 55, 43, 82, 62, 96, 73, 115, 89, 138, 104, 157].map((height, i) => <span key={i} style={{ height }} />)}</div><span><BarChart3 size={17} />STEAM / DATA EXPLORATION</span></div>}
    {index === 2 && <div className="cover-bike"><span className="bike-orbit" /><Bike size={104} strokeWidth={1} /><span>VéloFacile<span>↗</span></span></div>}
    {index === 3 && <div className="cover-type"><span>Nomàu<br /><em>clature.</em></span><span className="type-star">✳</span></div>}
  </div>;
}
export default function ProjectCard({ title, description, date, tags, link, context, linkLabel, index }: ProjectProps) {
  return <article className="project-card">
    <ProjectCover index={index} />
    <div className="project-body">
      <div className="project-meta"><span>{context}</span><span>{date}</span></div>
      <h3>{title}</h3><p>{description}</p>
      <div className="project-tags">{tags.map(tag => <TechBadge key={tag} name={tag} />)}</div>
      {link && <a href={link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${linkLabel} — ${title}`}>{linkLabel}<ArrowUpRight size={18} /></a>}
    </div>
  </article>;
}