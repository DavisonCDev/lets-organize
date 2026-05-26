import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import ProjectCard from './components/ProjectCard/ProjectCard';

// 1. Importando todas as imagens da pasta assets
import flores1 from './assets/imagens/flores1.png';
import flores2 from './assets/imagens/flores2.png';
import flores3 from './assets/imagens/flores3.png';

// Importando a nova imagem de fitas
import fitas1 from './assets/imagens/fitas1.png';

import baby1 from './assets/imagens/baby1.png';
import baby2 from './assets/imagens/baby2.png';
import baby3 from './assets/imagens/baby3.png';

import closet1 from './assets/imagens/closet1.png';
import closet2 from './assets/imagens/closet2.png';
import closet3 from './assets/imagens/closet3.png';

import cozinha1 from './assets/imagens/cozinha1.png';
import cozinha2 from './assets/imagens/cozinha2.png';

function App() {
  return (
    <div className="app-wrapper">
      {/* FLORES (Decoração de fundo) */}
      <img src={flores1} alt="" className="flower-decor flower-1" aria-hidden="true" />
      <img src={flores2} alt="" className="flower-decor flower-2" aria-hidden="true" />
      <img src={flores3} alt="" className="flower-decor flower-3" aria-hidden="true" />

      {/* FITAS (Divisórias de fundo bem apagadas) */}
      <img src={fitas1} alt="" className="ribbon-decor ribbon-1" aria-hidden="true" />
      <img src={fitas1} alt="" className="ribbon-decor ribbon-2" aria-hidden="true" />
      <img src={fitas1} alt="" className="ribbon-decor ribbon-3" aria-hidden="true" />

      <div className="container">
        
        {/* Classes anim-delay adicionadas para criar a sequência de entrada */}
        <div className="anim-delay-1">
          <Header />
        </div>
        
        <div className="anim-delay-2">
          <About />
        </div>

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

        <div className="anim-delay-6">
          <Services />
          <Footer />
        </div>
        
      </div>
    </div>
  );
}

export default App;