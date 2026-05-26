import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header section-box">
      <img src="/imagens/logo1.png" alt="Let's Organiza Logo" className="logo" />
      <p className="subtitle">Letícia Machado - Personal Organizer</p>
      <p className="slogan">Organização que simplifica o dia a dia</p>
    </header>
  );
}