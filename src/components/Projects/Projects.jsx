import { useCallback, useMemo, useState } from 'react';

import './Projects.css';

import MediaGrid from '../MediaGrid/MediaGrid';
import Modal from '../Modal/Modal';

import { getPortfolioSections } from '../../lib/mediaCatalog';

function Section({ title, items, onSelect }) {
  return (
    <section className="section section-box portfolio-section">
      <h2>{title}</h2>
      <MediaGrid items={items} onSelect={onSelect} />
    </section>
  );
}

export default function Projects() {
  const allSections = useMemo(() => getPortfolioSections(), []);

  // REMOVE Bastidores do portfólio (vai ficar só em "Cases")
  const sections = useMemo(
    () => allSections.filter((s) => s.key !== 'bastidores'),
    [allSections]
  );

  const sectionMap = useMemo(() => {
    const map = new Map();
    sections.forEach((s) => map.set(s.key, s));
    return map;
  }, [sections]);

  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleClose = useCallback(() => {
    setSelectedMedia(null);
  }, []);

  // Pares lado a lado
  const lavanderia = sectionMap.get('lavanderia');
  const rouparia = sectionMap.get('rouparia');
  const uniformes = sectionMap.get('uniformes');
  const acessorios = sectionMap.get('acessorios');

  // Renderizar o restante sem repetir os pares
  const skippedKeys = new Set(['lavanderia', 'rouparia', 'uniformes', 'acessorios']);
  const remaining = sections.filter((s) => !skippedKeys.has(s.key));

  return (
    <>
      {remaining.map((section) => (
        <Section
          key={section.key}
          title={section.title}
          items={section.items}
          onSelect={setSelectedMedia}
        />
      ))}

      {(lavanderia || rouparia) && (
        <div className="portfolio-two-col">
          {lavanderia && (
            <Section
              title={lavanderia.title}
              items={lavanderia.items}
              onSelect={setSelectedMedia}
            />
          )}
          {rouparia && (
            <Section
              title={rouparia.title}
              items={rouparia.items}
              onSelect={setSelectedMedia}
            />
          )}
        </div>
      )}

      {(uniformes || acessorios) && (
        <div className="portfolio-two-col">
          {uniformes && (
            <Section
              title={uniformes.title}
              items={uniformes.items}
              onSelect={setSelectedMedia}
            />
          )}
          {acessorios && (
            <Section
              title={acessorios.title}
              items={acessorios.items}
              onSelect={setSelectedMedia}
            />
          )}
        </div>
      )}

      <Modal media={selectedMedia} onClose={handleClose} />
    </>
  );
}