import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './Modal.css';

function getFocusableElements(container) {
  if (!container) return [];

  const selectors = [
    'a[href]',
    'button:not([disabled])',
    'video[controls]',
    '[tabindex]:not([tabindex="-1"])',
  ].join(',');

  return Array.from(container.querySelectorAll(selectors));
}

export default function Modal({ media, onClose }) {
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (!media) return;

    previouslyFocusedRef.current = document.activeElement;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusables = getFocusableElements(overlayRef.current);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow || 'auto';
      window.removeEventListener('keydown', onKeyDown);

      if (previouslyFocusedRef.current instanceof HTMLElement) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [media, onClose]);

  if (!media) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={media.type === 'video' ? 'Vídeo ampliado' : 'Imagem ampliada'}
    >
      <button
        ref={closeButtonRef}
        className="modal-close-btn"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Fechar"
      >
        ×
      </button>

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {media.type === 'video' ? (
          <video
            className="modal-media"
            src={media.src}
            controls
            autoPlay
            playsInline
            muted
          />
        ) : (
          <img className="modal-media" src={media.src} alt={media.title ?? 'Imagem ampliada'} />
        )}
      </div>
    </div>,
    document.body
  );
}