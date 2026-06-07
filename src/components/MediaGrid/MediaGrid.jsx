import './MediaGrid.css';

export default function MediaGrid({
  items,
  onSelect,
  variant = 'default',
  showCaptions = false,
}) {
  const gridClassName = `media-grid ${variant === 'small' ? 'media-grid--small' : ''}`.trim();

  return (
    <div className={gridClassName}>
      {items.map((item, index) => (
        <button
          key={`${item.type}-${item.base}-${index}`}
          className="media-card"
          type="button"
          onClick={() => onSelect(item)}
          aria-label={`Abrir ${item.type === 'video' ? 'vídeo' : 'imagem'}`}
        >
          <div className="media-thumb">
            {item.type === 'video' ? (
              <>
                <video
                  className="media-el"
                  src={item.src}
                  preload="metadata"
                  muted
                  playsInline
                  autoPlay
                  loop
                />
                <span className="media-play-badge" aria-hidden="true">
                  ▶
                </span>
              </>
            ) : (
              <img
                className="media-el"
                src={item.src}
                alt="Imagem do portfólio"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

          {showCaptions && item.title ? (
            <div className="media-caption">{item.title}</div>
          ) : null}
        </button>
      ))}
    </div>
  );
}