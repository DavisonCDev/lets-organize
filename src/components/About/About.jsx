import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="section section-box">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        
        {/* MÁSCARA: Este contêiner fará o recorte e a sombra */}
        <div className="profile-img-wrapper">
          <picture>
            <source media="(max-width: 768px)" srcSet="/imagens/leticia2.png" />
            <img 
              src="/imagens/leticia1.png" 
              alt="Letícia Machado" 
              className="profile-img" 
            />
          </picture>
        </div>
        
        <div className="about-text">
          <p>
            Sou Personal Organizer atuante em projetos de organização residencial com experiência prática em pré-mudança, pós mudança e reorganização de ambientes já habitados.
          </p>
          <p>
            Meu trabalho vai além de organizar espaços: auxilio o cliente em todo o processo de triagem, ajudando a decidir o que manter, doar ou realocar, sempre respeitando a rotina, os hábitos e as necessidades de cada pessoa.
          </p>
          <p>
            Tenho facilidade em trabalhar em equipe, seguir diretrizes de projetos já estruturados e também propor soluções práticas para otimizar espaços, categorização e manutenção da organização no dia a dia.
          </p>
          <p>
            Além da parte técnica, sou reconhecida pelo meu perfil positivo, colaborativo e comunicativo. Tenho uma postura leve e organizada no ambiente de trabalho, o que contribui para um clima produtivo e agradável durante os projetos, algo que os clientes e colegas frequentemente destacam.
          </p>
          <p>
            Atuo de forma ética, organizada e comprometida com prazos e resultados, entregando ambientes funcionais, visualmente agradáveis e sustentáveis a longo prazo.
          </p>
        </div>
      </div>
    </section>
  );
}