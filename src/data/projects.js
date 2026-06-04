import baby1 from '../assets/imagens/baby1.jpg';
import baby2 from '../assets/imagens/baby2.jpg';
import baby3 from '../assets/imagens/baby3.jpg';

import closet1 from '../assets/imagens/closet1.jpg';
import closet2 from '../assets/imagens/closet2.jpg';
import closet3 from '../assets/imagens/closet3.jpg';

import cozinha1 from '../assets/imagens/cozinha1.jpg';
import cozinha2 from '../assets/imagens/cozinha2.jpg';

export const PROJECT_SECTIONS = [
  {
    heading: 'Organização Baby',
    items: [
      { image: baby1, title: 'Ambiente de Troca', layoutClass: 'vertical' },
      { image: baby3, title: 'Organização de Gavetas', layoutClass: 'horizontal' },
      { image: baby2, title: 'Enxoval e Detalhes', layoutClass: 'vertical' },
    ],
  },
  {
    heading: 'Organização de Closet',
    items: [
      { image: closet1, title: 'Visão Geral', layoutClass: 'vertical' },
      { image: closet3, title: 'Gavetas e Acessórios', layoutClass: 'horizontal' },
      { image: closet2, title: 'Prateleiras', layoutClass: 'vertical' },
    ],
  },
  {
    heading: 'Organização de Cozinha',
    gridClass: 'kitchen-grid',
    items: [
      { image: cozinha1, title: 'Louças', layoutClass: 'vertical' },
      { image: cozinha2, title: 'Armários e Utensílios', layoutClass: 'vertical' },
    ],
  },
];