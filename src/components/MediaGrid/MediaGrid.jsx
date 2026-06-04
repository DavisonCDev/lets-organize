import './MediaGrid.css';

export default function MediaGrid({
  items,
  onSelect,
  variant = 'default',
  showCaptions = true,
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
          aria-label={`Abrir ${item.type === 'video' ? 'vídeo' : 'imagem'}: ${item.title ?? 'mídia'}`}
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
                />
                <span className="media-play-badge" aria-hidden="true">
                  ▶
                </span>
              </>
            ) : (
              <img
                className="media-el"
                src={item.src}
                alt={item.title ?? 'Imagem'}
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

          {showCaptions ? (
            <div className="media-caption">{item.title}</div>
          ) : null}
        </button>
      ))}
    </div>
  );
}