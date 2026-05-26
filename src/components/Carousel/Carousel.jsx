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
        animate={{ x: ["0%", "-50%"] }} // Move de 0 a -50% (loop infinito)
        transition={{ 
          ease: "linear", 
          duration: 30, // Tempo do ciclo (aumente para ser mais lento)
          repeat: Infinity 
        }}
      >
        {/* Duplicamos o array para criar o efeito de loop infinito */}
        {[...images, ...images].map((src, index) => (
          <div className="carousel-item" key={index}>
            <img src={src} alt={`Case ${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}