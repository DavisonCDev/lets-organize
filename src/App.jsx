import './App.css';

import { FaWhatsapp } from 'react-icons/fa';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Carousel from './components/Carousel/Carousel';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import SmoothScroll from './components/SmoothScroll.jsx';

import flores1 from './assets/imagens/flores1.png';
import flores2 from './assets/imagens/flores2.png';
import flores3 from './assets/imagens/flores3.png';
import fitas1 from './assets/imagens/fitas1.png';

const WHATSAPP_PHONE = '5511985543513';
const WHATSAPP_TEXT = 'Olá Letícia! Vim pelo site e gostaria de mais informações.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;

function App() {
  return (
    <div className="app-wrapper">
      <a className="skip-link" href="#inicio">
        Pular para o conteúdo
      </a>

      <SmoothScroll />
      <Navbar />

      <img
        src={flores1}
        alt=""
        role="presentation"
        aria-hidden="true"
        loading="lazy"
        className="flower-decor flower-1"
      />

      <img
        src={fitas1}
        alt=""
        role="presentation"
        aria-hidden="true"
        loading="lazy"
        className="ribbon-decor ribbon-1"
      />

      <img
        src={flores2}
        alt=""
        role="presentation"
        aria-hidden="true"
        loading="lazy"
        className="flower-decor flower-2"
      />

      <img
        src={fitas1}
        alt=""
        role="presentation"
        aria-hidden="true"
        loading="lazy"
        className="ribbon-decor ribbon-2"
      />

      <img
        src={flores3}
        alt=""
        role="presentation"
        aria-hidden="true"
        loading="lazy"
        className="flower-decor flower-3"
      />

      <img
        src={fitas1}
        alt=""
        role="presentation"
        aria-hidden="true"
        loading="lazy"
        className="ribbon-decor ribbon-3"
      />

      <div className="container">
        <div id="inicio" className="anim-delay-1">
          <Header />
        </div>

        <div id="sobre" className="anim-delay-2">
          <About />
        </div>

        <div id="projetos" className="anim-delay-3">
          <Projects />
        </div>

        <div id="cases" className="section section-box anim-delay-4">
          <div className="cases-section-heading">
            <h2>Cases</h2>
            <small className="cases-section-subtitle">Projetos Autorais</small>
          </div>

          <Carousel />
        </div>

        <div id="servicos" className="anim-delay-5">
          <Services />
        </div>

        <Footer />
      </div>

      <a
        className="whatsapp-fab"
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chamar no WhatsApp"
        title="WhatsApp"
      >
        <FaWhatsapp size={22} />
      </a>
    </div>
  );
}

export default App;