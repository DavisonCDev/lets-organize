import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import ProjectCard from './components/ProjectCard/ProjectCard';

function App() {
  return (
    <div className="app-wrapper">
      {/* FLORES (Decoração de fundo) */}
      <img src="/imagens/flores1.png" alt="" className="flower-decor flower-1" aria-hidden="true" />
      <img src="/imagens/flores2.png" alt="" className="flower-decor flower-2" aria-hidden="true" />
      <img src="/imagens/flores3.png" alt="" className="flower-decor flower-3" aria-hidden="true" />

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
            <ProjectCard image="/imagens/baby1.png" title="Ambiente de Troca" layoutClass="vertical" />
            <ProjectCard image="/imagens/baby3.png" title="Organização de Gavetas" layoutClass="horizontal" />
            <ProjectCard image="/imagens/baby2.png" title="Enxoval e Detalhes" layoutClass="vertical" />
          </div>
        </section>

        {/* ORGANIZAÇÃO DE CLOSET */}
        <section className="section section-box anim-delay-4">
          <h2>Organização de Closet</h2>
          <div className="projects-grid">
            <ProjectCard image="/imagens/closet1.png" title="Visão Geral" layoutClass="vertical" />
            <ProjectCard image="/imagens/closet3.png" title="Gavetas e Acessórios" layoutClass="horizontal" />
            <ProjectCard image="/imagens/closet2.png" title="Prateleiras" layoutClass="vertical" />
          </div>
        </section>

        {/* ORGANIZAÇÃO DE COZINHA */}
        <section className="section section-box anim-delay-5">
          <h2>Organização de Cozinha</h2>
          <div className="projects-grid kitchen-grid">
            <ProjectCard image="/imagens/cozinha1.png" title="Louças" layoutClass="vertical" />
            <ProjectCard image="/imagens/cozinha2.png" title="Armários e Utensílios" layoutClass="vertical" />
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