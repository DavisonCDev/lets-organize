import './Services.css';

import itens1 from '../../assets/imagens/itens1.jpg';

export default function Services() {
  return (
    <section className="section section-box services">
      <h2>Meus Serviços</h2>

      <div className="services-content">
        <div className="services-text">
          <ul>
            <li>
              Organização Residencial
            </li>

            <li>
              Organização Baby
            </li>

            <li>
              Pré-mudança, triagem, categorização e preparo
            </li>

            <li>
              Pós-mudança, (desembalar, organizar e estruturar ambientes)
            </li>

            <li>
              Organização de armários, closets, cozinhas e áreas gerais 
            </li>

            <li>
              Apoio ao cliente na tomada de decisões durante a triagem 
            </li>
          </ul>
        </div>

        <img
          src={itens1}
          alt="Organização em prática"
          className="services-img"
          loading="lazy"
        />
      </div>
    </section>
  );
}