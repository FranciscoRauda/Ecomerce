import { unsplashPhoto } from '../lib/unsplashUrl'

export const categories = ['Todos', 'Moda', 'Hogar', 'Objetos']

export const products = [
  {
    id: 'ln-wool-coat',
    name: 'Abrigo lana merino',
    category: 'Moda',
    price: 189,
    tag: 'Nuevo',
    description:
      'Corte recto, solapa ancha y forro en cupro. Ideal para inviernos urbanos sin sacrificar elegancia.',
    image: unsplashPhoto('photo-1539533018447-63fcce2678e3', 800),
  },
  {
    id: 'ln-ceramic-vase',
    name: 'Jarrón gres esmaltado',
    category: 'Hogar',
    price: 64,
    tag: 'Curado',
    description:
      'Piezas artesanales con terminación mate y vetas orgánicas. Cada jarrón es único.',
    image: unsplashPhoto('photo-1578749556568-bc2b40e68f61', 800),
  },
  {
    id: 'ln-leather-tote',
    name: 'Tote piel vegetal',
    category: 'Moda',
    price: 142,
    description:
      'Correas reforzadas y compartimento oculto para laptop de hasta 14". Envejece con carácter.',
    image: unsplashPhoto('photo-1590874103328-eac38a683ce7', 800),
  },
  {
    id: 'ln-desk-lamp',
    name: 'Lámpara mesa latón',
    category: 'Hogar',
    price: 98,
    tag: '-15%',
    description:
      'Luz cálida regulable. Brazo articulado y base maciza para lectura nocturna.',
    image: unsplashPhoto('photo-1507473885765-e6ed057f782c', 800),
  },
  {
    id: 'ln-watch',
    name: 'Reloj campo minimal',
    category: 'Objetos',
    price: 215,
    description:
      'Quarzo suizo, caja de acero cepillado y correa intercambiable en cuero curtido.',
    image: unsplashPhoto('photo-1524592094714-0f0654e20314', 800),
  },
  {
    id: 'ln-linen-shirt',
    name: 'Camisa lino crudo',
    category: 'Moda',
    price: 79,
    description:
      'Tejido fresco de lino europeo. Botones de nácar y corte relajado para verano.',
    image: unsplashPhoto('photo-1594938298603-c8148c4dae35', 800),
  },
  {
    id: 'ln-tray',
    name: 'Bandeja roble ahumado',
    category: 'Hogar',
    price: 52,
    description:
      'Ideal para desayunos lentos o como pieza central con velas y ramas secas.',
    image: unsplashPhoto('photo-1615486511484-92e172cc4fe0', 800),
  },
  {
    id: 'ln-notebook',
    name: 'Cuaderno encuadernación japonesa',
    category: 'Objetos',
    price: 28,
    tag: 'Pequeño placer',
    description:
      'Papel libre de ácido, puntos sutiles y cubierta en tela reciclada.',
    image: unsplashPhoto('photo-1544816155-12df96455552', 800),
  },
]
