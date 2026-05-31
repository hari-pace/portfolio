import { ArrowUpRight } from "react-bootstrap-icons";

const ProjectCards = ({ title, description, tech, imgURL, link }) => (
  <article className="project-card">
    <div className="project-img-wrap">
      <img src={imgURL} alt={`Screenshot of ${title}`} loading="lazy" />
      <div className="project-img-overlay" aria-hidden="true" />
    </div>
    <div className="project-body">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="tech-chips" aria-label="Technologies used">
        {tech.map((t) => (
          <span key={t} className="tech-chip">{t}</span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline"
        aria-label={`View ${title} live demo`}
      >
        View Project <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </div>
  </article>
);

export default ProjectCards;
