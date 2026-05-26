import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ image, title, layoutClass }) {
  return (
    <div className={`project-card ${layoutClass}`}>
      <img
        src={image}
        alt={title}
        className="project-img"
      />
      <h3>{title}</h3>
    </div>
  );
}