import { useState } from 'react';

import './Projects.css';

import ProjectCard from '../ProjectCard/ProjectCard';
import Modal from '../Modal/Modal';

import baby1 from '../../assets/imagens/baby1.jpg';
import baby2 from '../../assets/imagens/baby2.jpg';
import baby3 from '../../assets/imagens/baby3.jpg';

import closet1 from '../../assets/imagens/closet1.jpg';
import closet2 from '../../assets/imagens/closet2.jpg';
import closet3 from '../../assets/imagens/closet3.jpg';

import cozinha1 from '../../assets/imagens/cozinha1.jpg';
import cozinha2 from '../../assets/imagens/cozinha2.jpg';

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <section className="section section-box">
        <h2>Organização Baby</h2>

        <div className="projects-grid">
          <ProjectCard
            image={baby1}
            title="Ambiente de Troca"
            layoutClass="vertical"
            onClick={() => setSelectedImg(baby1)}
          />

          <ProjectCard
            image={baby3}
            title="Organização de Gavetas"
            layoutClass="horizontal"
            onClick={() => setSelectedImg(baby3)}
          />

          <ProjectCard
            image={baby2}
            title="Enxoval e Detalhes"
            layoutClass="vertical"
            onClick={() => setSelectedImg(baby2)}
          />
        </div>
      </section>

      <section className="section section-box">
        <h2>Organização de Closet</h2>

        <div className="projects-grid">
          <ProjectCard
            image={closet1}
            title="Visão Geral"
            layoutClass="vertical"
            onClick={() => setSelectedImg(closet1)}
          />

          <ProjectCard
            image={closet3}
            title="Gavetas e Acessórios"
            layoutClass="horizontal"
            onClick={() => setSelectedImg(closet3)}
          />

          <ProjectCard
            image={closet2}
            title="Prateleiras"
            layoutClass="vertical"
            onClick={() => setSelectedImg(closet2)}
          />
        </div>
      </section>

      <section className="section section-box">
        <h2>Organização de Cozinha</h2>

        <div className="projects-grid kitchen-grid">
          <ProjectCard
            image={cozinha1}
            title="Louças"
            layoutClass="vertical"
            onClick={() => setSelectedImg(cozinha1)}
          />

          <ProjectCard
            image={cozinha2}
            title="Armários e Utensílios"
            layoutClass="vertical"
            onClick={() => setSelectedImg(cozinha2)}
          />
        </div>
      </section>

      <Modal
        image={selectedImg}
        onClose={() => setSelectedImg(null)}
      />
    </>
  );
}