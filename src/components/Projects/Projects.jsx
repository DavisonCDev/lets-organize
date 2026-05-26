import React from 'react';
import './Projects.css';
import ProjectCard from '../ProjectCard/ProjectCard';

// Importando as imagens específicas dos projetos
import baby1 from '../../assets/imagens/baby1.png';
import baby2 from '../../assets/imagens/baby2.png';
import baby3 from '../../assets/imagens/baby3.png';

import closet1 from '../../assets/imagens/closet1.png';
import closet2 from '../../assets/imagens/closet2.png';
import closet3 from '../../assets/imagens/closet3.png';

import cozinha1 from '../../assets/imagens/cozinha1.png';
import cozinha2 from '../../assets/imagens/cozinha2.png';

export default function Projects() {
  return (
    <>
      {/* ORGANIZAÇÃO BABY */}
      <section className="section section-box anim-delay-3">
        <h2>Organização Baby</h2>
        <div className="projects-grid">
          <ProjectCard image={baby1} title="Ambiente de Troca" layoutClass="vertical" />
          <ProjectCard image={baby3} title="Organização de Gavetas" layoutClass="horizontal" />
          <ProjectCard image={baby2} title="Enxoval e Detalhes" layoutClass="vertical" />
        </div>
      </section>

      {/* ORGANIZAÇÃO DE CLOSET */}
      <section className="section section-box anim-delay-4">
        <h2>Organização de Closet</h2>
        <div className="projects-grid">
          <ProjectCard image={closet1} title="Visão Geral" layoutClass="vertical" />
          <ProjectCard image={closet3} title="Gavetas e Acessórios" layoutClass="horizontal" />
          <ProjectCard image={closet2} title="Prateleiras" layoutClass="vertical" />
        </div>
      </section>

      {/* ORGANIZAÇÃO DE COZINHA */}
      <section className="section section-box anim-delay-5">
        <h2>Organização de Cozinha</h2>
        <div className="projects-grid kitchen-grid">
          <ProjectCard image={cozinha1} title="Louças" layoutClass="vertical" />
          <ProjectCard image={cozinha2} title="Armários e Utensílios" layoutClass="vertical" />
        </div>
      </section>
    </>
  );
}