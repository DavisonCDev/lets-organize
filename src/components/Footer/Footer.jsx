import './Footer.css';

import {
  FaWhatsapp,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h2>Contato</h2>

          <p>
            Atendimento em São Paulo e região.
          </p>

          <div className="contact-buttons">
            <a
              href="https://wa.me/5511985543513"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              <FaWhatsapp size={22} />

              Chamar no WhatsApp
            </a>

            <a
              href="https://www.instagram.com/letsorganiza/"
              target="_blank"
              rel="noreferrer"
              className="instagram-btn"
            >
              <FaInstagram size={22} />

              Instagram
            </a>
          </div>
        </div>
      </footer>

      <div className="developer-credit">
        Developed by OK Smart
      </div>
    </>
  );
}