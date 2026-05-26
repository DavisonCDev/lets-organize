import React from 'react';
import { motion } from 'framer-motion';
import './Carousel.css';

// Importando suas fotos
import p1 from '../../assets/imagens/poscloset1.jpg';
import p2 from '../../assets/imagens/poscloset2.jpg';
import p3 from '../../assets/imagens/poscloset3.jpg';
import p4 from '../../assets/imagens/poscloset4.jpg';
import p5 from '../../assets/imagens/poscloset5.jpg';
import p6 from '../../assets/imagens/poscloset6.jpg';

const images = [p1, p2, p3, p4, p5, p6];

export default function Carousel() {
  return (
    <div className="carousel-container">
      <motion.div 
        className="carousel-track"
        // Move de 0% a -50%. -50% é exatamente quando a primeira lista acaba e a cópia começa.
        animate={{ x: ["0%", "-50%"] }} 
        transition={{ 
          ease: "linear", 
          duration: 7, // Velocidade que você escolheu
          repeat: Infinity // Loop infinito
        }}
      >
        {/* CHAVE PARA O LOOP INFINITO: Duplicamos o conjunto de imagens */}
        {/* Renderizamos o conjunto original... */}
        {images.map((src, index) => (
          <div className="carousel-item" key={`orig-${index}`}>
            <img src={src} alt={`Case Original ${index + 1}`} />
          </div>
        ))}
        {/* ... e imediatamente renderizamos uma cópia exata logo em seguida. */}
        {images.map((src, index) => (
          <div className="carousel-item" key={`copy-${index}`}>
            <img src={src} alt={`Case Cópia ${index + 1}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}