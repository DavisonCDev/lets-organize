let cachedCatalog = null;

function normalizeForMatch(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function fileBaseName(path) {
  const file = String(path).split('/').pop() ?? '';
  return file.replace(/\.[^/.]+$/, '');
}

function naturalCompare(a, b) {
  return a.localeCompare(b, 'pt-BR', { numeric: true, sensitivity: 'base' });
}

function isDecorativeAsset(normalizedBase) {
  return (
    normalizedBase.startsWith('flores') ||
    normalizedBase.startsWith('fitas') ||
    normalizedBase.startsWith('icon') ||
    normalizedBase.startsWith('logo')
  );
}

function titleFromBase(base) {
  const normalized = normalizeForMatch(base);

  if (normalized.includes('antes')) return 'Antes';
  if (normalized.includes('depois')) return 'Depois';

  const m = base.match(/^([A-Za-zÀ-ÿ_ -]+?)(\d+)$/);
  if (m) {
    const prefix = m[1].replace(/[_-]+/g, ' ').trim();
    const num = String(m[2]).padStart(2, '0');
    return `${prefix.charAt(0).toUpperCase()}${prefix.slice(1)} ${num}`;
  }

  return base
    .replace(/[_-]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase());
}

const CATEGORY_META = {
  baby: { title: 'Organização Baby', order: 10 },
  closet: { title: 'Organização de Closet', order: 20 },
  closet_before_after: { title: 'Antes e Depois — Closet', order: 30 },
  cozinha: { title: 'Organização de Cozinha', order: 40 },
  biblioteca: { title: 'Organização de Biblioteca', order: 50 },
  lavanderia: { title: 'Organização de Lavanderia', order: 60 },
  rouparia: { title: 'Organização de Rouparia', order: 70 },
  toalhas: { title: 'Organização de Toalhas', order: 80 },
  uniformes: { title: 'Organização de Uniformes', order: 90 },
  acessorios: { title: 'Organização de Acessórios', order: 100 },
  bastidores: { title: 'Bastidores', order: 9999 }, // no final (mas vamos ocultar no Portfólio)
  outros: { title: 'Outros', order: 99999 },
};

function categoryKeyFromBase(base) {
  const n = normalizeForMatch(base);

  // Ignorar decorativos/branding
  if (isDecorativeAsset(n)) return null;
  if (n.startsWith('leticia')) return null;
  if (n === 'cartao_visita') return null;

  // Cases
  if (n.startsWith('poscloset')) return 'cases_photos';
  if (n.startsWith('em_acao')) return 'cases_videos';

  // Portfólio (fotos E vídeos por categoria)
  if (n.startsWith('baby')) return 'baby';

  if (n.startsWith('closet') && (n.includes('antes') || n.includes('depois'))) {
    return 'closet_before_after';
  }
  if (n.startsWith('closet')) return 'closet';

  if (n.startsWith('cozinha')) return 'cozinha';

  if (n.startsWith('biblioteca') || n === 'org_biblioteca') return 'biblioteca';

  if (n.startsWith('lavanderia')) return 'lavanderia';
  if (n.startsWith('rouparia')) return 'rouparia';
  if (n.startsWith('toalhas')) return 'toalhas';
  if (n.startsWith('uniformes')) return 'uniformes';

  if (n.startsWith('bon')) return 'acessorios';
  if (n.startsWith('bastidores')) return 'bastidores';

  return 'outros';
}

function buildMediaItems(modules, type) {
  return Object.entries(modules)
    .map(([path, src]) => {
      const base = fileBaseName(path);
      const categoryKey = categoryKeyFromBase(base);

      if (!categoryKey) return null;

      return {
        type, // 'image' | 'video'
        src,
        base,
        title: titleFromBase(base),
        categoryKey,
      };
    })
    .filter(Boolean)
    .sort((a, b) => naturalCompare(a.base, b.base));
}

function groupByCategory(items) {
  const map = new Map();
  for (const item of items) {
    if (!map.has(item.categoryKey)) map.set(item.categoryKey, []);
    map.get(item.categoryKey).push(item);
  }
  return map;
}

function buildCatalog() {
  const imageModules = import.meta.glob('../assets/imagens/*.{jpg,jpeg,png,webp,gif}', {
    eager: true,
    import: 'default',
  });

  const videoModules = import.meta.glob('../assets/videos/*.{mp4,webm,ogg}', {
    eager: true,
    import: 'default',
  });

  const images = buildMediaItems(imageModules, 'image');
  const videos = buildMediaItems(videoModules, 'video');

  return { images, videos };
}

function getCatalog() {
  if (!cachedCatalog) cachedCatalog = buildCatalog();
  return cachedCatalog;
}

export function getPortfolioSections() {
  const { images, videos } = getCatalog();


  const portfolioItems = [...images, ...videos].filter(
    (i) =>
      i.categoryKey !== 'cases_photos' &&
      i.categoryKey !== 'cases_videos' &&
      i.categoryKey !== 'bastidores'
  );

  const byCategory = groupByCategory(portfolioItems);

  return Array.from(byCategory.entries())
    .map(([key, sectionItems]) => ({
      key,
      title: CATEGORY_META[key]?.title ?? key,
      order: CATEGORY_META[key]?.order ?? 500,
      items: sectionItems,
    }))
    .filter((s) => s.items.length > 0)
    .sort((a, b) => a.order - b.order);
}

export function getCasesMedia() {
  const { images, videos } = getCatalog();

  const photos = images.filter((i) => i.categoryKey === 'cases_photos'); // poscloset*
  const actionVideos = videos.filter((i) => i.categoryKey === 'cases_videos'); // em_acao*

  return { photos, videos: actionVideos };
}

export function getBastidoresMedia() {
  const { images } = getCatalog();
  return images.filter((i) => i.categoryKey === 'bastidores');
}