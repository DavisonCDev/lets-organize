import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section className="section section-box services">
      <h2>Meus Serviços</h2>
      <div className="services-content">
        <div className="services-text">
          <ul>
            <li>Organização Residencial e Organização Baby</li>
            <li>Pré-mudança, triagem e categorização</li>
            <li>Pós-mudança e estruturação de ambientes</li>
            <li>Closets, cozinhas e áreas gerais</li>
          </ul>
        </div>
        <img src="/imagens/itens1.png" alt="Organização em Prática" className="services-img" />
      </div>
    </section>
  );
}