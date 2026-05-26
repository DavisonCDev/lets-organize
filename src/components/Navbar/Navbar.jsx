import React, { useState } from 'react';
import './Navbar.css';
import logoIcon from '../../assets/imagens/icon2.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo-wrapper">
            <img src={logoIcon} alt="Let's Organize" className="navbar-icon" />
          </div>

          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a href="#sobre" className="nav-links" onClick={(e) => scrollToSection(e, 'sobre')}>Sobre Mim</a>
            </li>
            <li className="nav-item">
              <a href="#projetos" className="nav-links" onClick={(e) => scrollToSection(e, 'projetos')}>Projetos</a>
            </li>
            <li className="nav-item">
              <a href="#cases" className="nav-links" onClick={(e) => scrollToSection(e, 'cases')}>Cases</a>
            </li>
            <li className="nav-item">
              <a href="#servicos" className="nav-links" onClick={(e) => scrollToSection(e, 'servicos')}>Serviços</a>
            </li>
            <li className="nav-item">
              <a href="#contato" className="nav-links" onClick={(e) => scrollToSection(e, 'contato')}>Contato</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="navbar-spacer"></div>
    </>
  );
}