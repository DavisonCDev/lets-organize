import './ProjectCard.css';

export default function ProjectCard({ image, title, layoutClass, onClick }) {
  return (
    <button
      className={`project-card ${layoutClass}`}
      onClick={onClick}
      type="button"
    >
      <div className="project-media">
        <img
          src={image}
          alt={title}
          className="project-img"
          loading="lazy"
          decoding="async"
        />
      </div>

      <h3 className="project-title">{title}</h3>
    </button>
  );
}