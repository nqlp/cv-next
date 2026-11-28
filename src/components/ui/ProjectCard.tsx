import { ArrowUpRight, Bike, Code2, BarChart3 } from "lucide-react";
import type { ReactNode } from "react";
import TechBadge from "./TechBadge";

interface ProjectProps {
  id: string;
  position: number;
  title: string;
  description: string;
  date: string;
  tags: string[];
  link?: string;
  context: string;
  linkLabel: string;
}

const projectCovers: Readonly<Record<string, ReactNode>> = {
  portfolio: (
    <div className="cover-portfolio">
      <span>PN<span>↗</span></span>
      <div><Code2 size={19} /><span>DESIGN ∩ CODE</span></div>
    </div>
  ),
  steam: (
    <div className="cover-data">
      <div className="chart-bars">
        {[32, 55, 43, 82, 62, 96, 73, 115, 89, 138, 104, 157].map((height) => (
          <span key={height} style={{ height }} />
        ))}
      </div>
      <span><BarChart3 size={17} />STEAM / DATA EXPLORATION</span>
    </div>
  ),
  velofacile: (
    <div className="cover-bike">
      <span className="bike-orbit" />
      <Bike size={104} strokeWidth={1} />
      <span>VéloFacile<span>↗</span></span>
    </div>
  ),
  nomauclature: (
    <div className="cover-type">
      <span>Nomàu<br /><em>clature.</em></span>
      <span className="type-star">✳</span>
    </div>
  ),
};

function ProjectCover({ id, position }: { id: string; position: number }) {
  const cover = Object.hasOwn(projectCovers, id) ? projectCovers[id] : undefined;

  return (
    <div className={`project-cover project-cover--${cover ? id : "default"}`} aria-hidden="true">
      <span className="cover-index">{String(position).padStart(2, "0")}</span>
      {cover ?? <Code2 size={72} strokeWidth={1} />}
    </div>
  );
}

export default function ProjectCard({ id, position, title, description, date, tags, link, context, linkLabel }: ProjectProps) {
  return <article className="project-card">
    <ProjectCover id={id} position={position} />
    <div className="project-body">
      <div className="project-meta"><span>{context}</span><span>{date}</span></div>
      <h3>{title}</h3><p>{description}</p>
      <div className="project-tags">{tags.map(tag => <TechBadge key={tag} name={tag} />)}</div>
      {link && <a href={link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`${linkLabel} — ${title}`}>{linkLabel}<ArrowUpRight size={18} /></a>}
    </div>
  </article>;
}
