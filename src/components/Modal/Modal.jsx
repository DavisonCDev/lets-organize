import { useEffect } from 'react';

import { createPortal } from 'react-dom';

import './Modal.css';

export default function Modal({ image, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!image) return null;

  return createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <button
        className="modal-close-btn"
        onClick={onClose}
        aria-label="Fechar imagem"
      >
        ×
      </button>

      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt="Imagem ampliada"
        />
      </div>
    </div>,

    document.body
  );
}