import { useEffect, useMemo, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import './Carousel.css';

import Modal from '../Modal/Modal';
import MediaGrid from '../MediaGrid/MediaGrid';

import { getBastidoresMedia, getCasesMedia } from '../../lib/mediaCatalog';

function getCssNumberVar(name, fallback) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const num = Number.parseFloat(raw.replace('px', ''));

  return Number.isFinite(num) ? num : fallback;
}

function pickPosCloset1to6(photos) {
  const byBase = new Map(photos.map((p) => [String(p.base).toLowerCase(), p]));

  const result = [];
  for (let i = 1; i <= 6; i += 1) {
    const key = `poscloset${i}`;
    const item = byBase.get(key);
    if (item) result.push(item);
  }

  return result;
}

export default function Carousel() {
  const { photos, videos } = useMemo(() => getCasesMedia(), []);
  const bastidoresItems = useMemo(() => getBastidoresMedia(), []);

  // GARANTE: exatamente poscloset1..poscloset6, na ordem
  const carouselPhotos = useMemo(() => pickPosCloset1to6(photos), [photos]);

  const [selectedMedia, setSelectedMedia] = useState(null);

  const [itemsPerPage, setItemsPerPage] = useState(() => (window.innerWidth <= 768 ? 1 : 3));
  const [stepPx, setStepPx] = useState(278); // fallback (260 + 18)

  // Loop infinito real (com clones)
  const [index, setIndex] = useState(() => (window.innerWidth <= 768 ? 1 : 3));
  const [instant, setInstant] = useState(false);
  const instantTimerRef = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      const perPage = window.innerWidth <= 768 ? 1 : 3;

      // Atualiza itemsPerPage e, se mudou, reposiciona o índice no MESMO fluxo
      // (evita cascata de effects e o warning do React)
      setItemsPerPage((prev) => {
        if (prev === perPage) return prev;

        setInstant(true);
        setIndex(perPage);

        window.clearTimeout(instantTimerRef.current);
        instantTimerRef.current = window.setTimeout(() => setInstant(false), 0);

        return perPage;
      });

      const w = getCssNumberVar('--case-item-width', 260);
      const g = getCssNumberVar('--case-gap', 18);
      setStepPx(w + g);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(instantTimerRef.current);
    };
  }, []);

  const displayItems = useMemo(() => {
    const clones = itemsPerPage;
    if (carouselPhotos.length === 0) return [];

    const head = carouselPhotos.slice(-clones);
    const tail = carouselPhotos.slice(0, clones);

    return [...head, ...carouselPhotos, ...tail];
  }, [carouselPhotos, itemsPerPage]);

  const canNavigate = carouselPhotos.length > itemsPerPage;

  const next = () => {
    if (!canNavigate) return;
    setIndex((v) => v + 1);
  };

  const prev = () => {
    if (!canNavigate) return;
    setIndex((v) => v - 1);
  };

  const handleAnimationComplete = () => {
    const clones = itemsPerPage;
    const realLen = carouselPhotos.length;

    if (realLen === 0) return;

    // Se entrou nos clones do final, volta instantaneamente pro começo real
    if (index >= realLen + clones) {
      setInstant(true);
      setIndex(index - realLen);
      window.setTimeout(() => setInstant(false), 0);
      return;
    }

    // Se entrou nos clones do início, volta instantaneamente pro final real
    if (index < clones) {
      setInstant(true);
      setIndex(index + realLen);
      window.setTimeout(() => setInstant(false), 0);
    }
  };

  return (
    <>
      {/* CARROSSEL (somente poscloset1..poscloset6, looping real, sem nomes) */}
      <div className="cases-carousel" aria-label="Carrossel de cases">
        <button
          className="cases-nav-btn prev"
          onClick={prev}
          type="button"
          aria-label="Voltar"
          disabled={!canNavigate}
        >
          ❮
        </button>

        <div className="cases-carousel-container">
          <motion.div
            className="cases-carousel-track"
            animate={{ x: -index * stepPx }}
            transition={instant ? { duration: 0 } : { type: 'spring', stiffness: 280, damping: 30 }}
            onAnimationComplete={handleAnimationComplete}
          >
            {displayItems.map((item, i) => (
              <button
                key={`${item.base}-${i}`}
                className="cases-carousel-item"
                type="button"
                onClick={() => setSelectedMedia(item)}
                aria-label="Abrir imagem do case"
              >
                <div className="cases-media">
                  <img
                    className="cases-media-el"
                    src={item.src}
                    alt="Case"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </button>
            ))}
          </motion.div>
        </div>

        <button
          className="cases-nav-btn next"
          onClick={next}
          type="button"
          aria-label="Avançar"
          disabled={!canNavigate}
        >
          ❯
        </button>
      </div>

      {/* BASTIDORES (Vídeos + Bastidores em uma única sessão) */}
      <div className="bastidores-section" aria-label="Bastidores">
        <h3 className="cases-subtitle">Bastidores</h3>

        <div className="bastidores-grids">
          <div className="bastidores-grid bastidores-grid--videos" aria-label="Vídeos">
            <MediaGrid items={videos} onSelect={setSelectedMedia} showCaptions={false} />
          </div>

          <div className="bastidores-grid bastidores-grid--fotos" aria-label="Fotos dos bastidores">
            <MediaGrid items={bastidoresItems} onSelect={setSelectedMedia} showCaptions={false} />
          </div>
        </div>
      </div>

      <Modal media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </>
  );
}