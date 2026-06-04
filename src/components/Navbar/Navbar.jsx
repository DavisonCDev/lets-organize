import { useCallback, useEffect, useId, useRef, useState } from 'react';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

import './Navbar.css';

import logoIcon from '../../assets/imagens/icon2.png';

const NAV_ITEMS = [
  { id: 'sobre', label: 'Sobre Mim' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'cases', label: 'Cases' },
  { id: 'servicos', label: 'Serviços' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuId = useId();

  const toggleButtonRef = useRef(null);
  const firstLinkRef = useRef(null);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const scrollToSection = useCallback((e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    closeMenu();
  }, [closeMenu]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 0);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();

        closeMenu();

        window.setTimeout(() => {
          toggleButtonRef.current?.focus();
        }, 0);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);

      document.body.style.overflow = previousOverflow || 'auto';

      window.removeEventListener('keydown', onKeyDown);
    };
  }, [closeMenu, isOpen]);

  return (
    <>
      <nav className="navbar" aria-label="Navegação principal">
        <div className="navbar-container">
          <div className="navbar-logo-wrapper">
            <img
              src={logoIcon}
              alt="Let's Organiza"
              className="navbar-icon"
              loading="lazy"
            />
          </div>

          {/* Desktop: links + bolinhas à direita do logo */}
          <div className="navbar-right">
            <ul className="nav-menu nav-menu--desktop">
              {NAV_ITEMS.map((item) => (
                <li className="nav-item" key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="nav-links"
                    onClick={(e) => scrollToSection(e, item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="navbar-social" aria-label="Redes sociais">
              <a
                href="https://wa.me/5511985543513"
                target="_blank"
                rel="noreferrer"
                className="social-bubble social-bubble--whatsapp"
                aria-label="Chamar no WhatsApp"
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/letsorganiza/"
                target="_blank"
                rel="noreferrer"
                className="social-bubble social-bubble--instagram"
                aria-label="Abrir Instagram"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Mobile: hamburguer */}
          <button
            ref={toggleButtonRef}
            className={`menu-icon ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            type="button"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls={menuId}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>

          {/* Mobile: menu overlay */}
          <ul id={menuId} className={`nav-menu nav-menu--mobile ${isOpen ? 'active' : ''}`}>
            {NAV_ITEMS.map((item, index) => (
              <li className="nav-item" key={item.id}>
                <a
                  ref={index === 0 ? firstLinkRef : null}
                  href={`#${item.id}`}
                  className="nav-links"
                  onClick={(e) => scrollToSection(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}

            <li className="nav-item nav-social-mobile">
              <a
                href="https://wa.me/5511985543513"
                target="_blank"
                rel="noreferrer"
                className="social-bubble social-bubble--whatsapp"
                aria-label="Chamar no WhatsApp"
                title="WhatsApp"
                onClick={closeMenu}
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/letsorganiza/"
                target="_blank"
                rel="noreferrer"
                className="social-bubble social-bubble--instagram"
                aria-label="Abrir Instagram"
                title="Instagram"
                onClick={closeMenu}
              >
                <FaInstagram size={18} />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="navbar-spacer"></div>
    </>
  );
}