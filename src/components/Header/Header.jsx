import React from 'react';
import './Header.css';

// Voltando duas pastas para acessar a pasta assets
import logo1 from '../../assets/imagens/logo1.png';

export default function Header() {
  return (
    <header className="header section-box">
      {/* Substituindo o texto pela variável logo1 */}
      <img src={logo1} alt="Let's Organiza Logo" className="logo" />
      <p className="subtitle">Letícia Machado - Personal Organizer</p>
      <p className="slogan">Organização que simplifica o dia a dia</p>
    </header>
  );
}