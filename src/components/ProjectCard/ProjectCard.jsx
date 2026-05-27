import './ProjectCard.css';

export default function ProjectCard({
  image,
  title,
  layoutClass,
  onClick,
}) {
  return (
    <button
      className={`project-card ${layoutClass}`}
      onClick={onClick}
      type="button"
    >
      <img
        src={image}
        alt={title}
        className="project-img"
        loading="lazy"
      />

      <h3>{title}</h3>
    </button>
  );
}