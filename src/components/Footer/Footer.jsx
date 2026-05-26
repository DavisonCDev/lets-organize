import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Contato</h2>
      <p>Atendimento em São Paulo e região.</p>
      <a
        href="https://wa.me/5511985543513"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        Chamar no WhatsApp
      </a>
    </footer>
  );
}