import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';

import './Carousel.css';

import Modal from '../Modal/Modal';

import poscloset1 from '../../assets/imagens/poscloset1.jpg';
import poscloset2 from '../../assets/imagens/poscloset2.jpg';
import poscloset3 from '../../assets/imagens/poscloset3.jpg';
import poscloset4 from '../../assets/imagens/poscloset4.jpg';
import poscloset5 from '../../assets/imagens/poscloset5.jpg';
import poscloset6 from '../../assets/imagens/poscloset6.jpg';

const images = [poscloset1, poscloset2, poscloset3, poscloset4, poscloset5, poscloset6];

export default function Carousel() {
  const [selectedImg, setSelectedImg] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 1 : 3);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener(
        'resize',
        handleResize
      );
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev >= images.length - itemsPerPage
        ? 0
        : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev <= 0
        ? images.length - itemsPerPage
        : prev - 1
    );
  };

  return (
    <>
      <div className="carousel-wrapper">
        <button
          className="nav-btn prev"
          onClick={prevSlide}
          type="button"
        >
          ❮
        </button>

        <div className="carousel-container">
          <motion.div
            className="carousel-track"
            animate={{
              x: currentIndex * -(250 + 20),
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
            }}
          >
            {images.map((src, index) => (
              <div
                className="carousel-item"
                key={index}
                onClick={() => setSelectedImg(src)}
              >
                <img
                  src={src}
                  alt={`Case ${index + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          className="nav-btn next"
          onClick={nextSlide}
          type="button"
        >
          ❯
        </button>
      </div>

      <Modal
        image={selectedImg}
        onClose={() => setSelectedImg(null)}
      />
    </>
  );
}