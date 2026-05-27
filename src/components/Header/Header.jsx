import './Header.css';

import logo1 from '../../assets/imagens/logo1.png';

export default function Header() {
  return (
    <header className="header section-box">
      <img
        src={logo1}
        alt="Logo Let's Organiza"
        className="logo"
        loading="lazy"
      />

      <p className="subtitle">
        Letícia Machado — Personal Organizer
      </p>

      <p className="slogan">
        Organização que simplifica o dia a dia
      </p>
    </header>
  );
}