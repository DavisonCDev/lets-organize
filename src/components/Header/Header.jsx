import './Header.css';

import { FaWhatsapp } from 'react-icons/fa';

import logo1 from '../../assets/imagens/logo1.png';

const WHATSAPP_PHONE = '5511985543513';
const WHATSAPP_TEXT = 'Olá Letícia! Gostaria de agendar uma avaliação de organização.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

export default function Header() {
  return (
    <header className="header section-box" aria-label="Apresentação">
      <img src={logo1} alt="Logo Let's Organiza" className="logo" loading="lazy" />

      <p className="subtitle">Letícia Machado — Personal Organizer</p>

      <p className="slogan">
        Organização personalizada: transformamos ambientes em espaços leves, funcionais e acolhedores
      </p>

      <div className="header-cta" aria-label="Ações principais">
        <a
          className="btn btn-primary"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Agendar avaliação pelo WhatsApp"
          title="Agendar avaliação"
        >
          <FaWhatsapp size={18} />
          Agendar avaliação
        </a>

        <a className="btn btn-ghost" href="#servicos" aria-label="Ver serviços">
          Ver serviços
        </a>
      </div>
    </header>
  );
}