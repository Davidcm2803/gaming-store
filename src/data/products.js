export const products = [
  {
    id: 1,
    name: 'PlayStation 5',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80',
    category: 'PlayStation',
    rating: 4.9,
    badge: 'Best Seller',
    badgeColor: 'ps',
    description:
      'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible PlayStation games.',
    specs: ['825GB Custom SSD', '4K@120fps', 'Ray Tracing', 'Tempest 3D Audio'],
  },
  {
    id: 2,
    name: 'PlayStation 5 Digital Edition',
    price: 399.99,
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'PlayStation',
    rating: 4.7,
    badge: 'Sale',
    badgeColor: 'neon',
    description:
      'All the power of PS5 without a disc drive. Access a world of PlayStation games and entertainment at a more accessible price point, digitally.',
    specs: ['825GB Custom SSD', '4K@120fps', 'Ray Tracing', 'No Disc Drive'],
  },
  {
    id: 3,
    name: 'Xbox Series X',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1683823362932-6f7599661d22?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Xbox',
    rating: 4.8,
    badge: 'New',
    badgeColor: 'xbox',
    description:
      'The most powerful Xbox ever. 12 teraflops of raw graphic processing power. Play thousands of titles from four generations of Xbox with Near-instant load times.',
    specs: ['1TB Custom NVMe SSD', '4K@120fps', '12 TFLOPS GPU', 'Quick Resume'],
  },
  {
    id: 4,
    name: 'Xbox Series S',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80',
    category: 'Xbox',
    rating: 4.6,
    badge: null,
    badgeColor: null,
    description:
      'Next-gen performance in the smallest Xbox ever. Experience the speed and performance of a next-gen all-digital console at a budget-friendly price.',
    specs: ['512GB Custom NVMe SSD', '1440p@120fps', '4 TFLOPS GPU', 'Game Pass Ready'],
  },
  {
    id: 5,
    name: 'DualSense Wireless Controller',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1705910308334-568c0ed901df?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Controllers',
    rating: 4.8,
    badge: 'Popular',
    badgeColor: 'ps',
    description:
      'Discover a deeper, highly immersive gaming experience with the DualSense wireless controller. Haptic feedback and adaptive triggers bring games to life in your hands.',
    specs: ['Haptic Feedback', 'Adaptive Triggers', 'Built-in Mic', 'USB-C Charging'],
  },
  {
    id: 6,
    name: 'Xbox Elite Controller Series 2',
    price: 179.99,
    image: 'https://images.unsplash.com/photo-1617096200347-cb04ae810b1d?w=600&q=80',
    category: 'Controllers',
    rating: 4.7,
    badge: 'Premium',
    badgeColor: 'xbox',
    description:
      'Take total control with the Xbox Elite Wireless Controller Series 2. Features include adjustable-tension thumbsticks, wrap-around rubberized grip, and a rechargeable battery.',
    specs: ['Adjustable Thumbsticks', 'Wrap-around Grip', '40hr Battery', 'Interchangeable Parts'],
  },
  {
    id: 7,
    name: 'Sony PULSE 3D Headset',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    category: 'Accessories',
    rating: 4.5,
    badge: null,
    badgeColor: null,
    description:
      'Refined for PlayStation 5 with dual noise-cancelling microphones, USB adapter and a built-in rechargeable battery. Engineered to work with PS5\'s Tempest 3D Audio.',
    specs: ['3D Audio', 'Dual Noise-Cancelling Mic', 'USB Adapter', '12hr Battery'],
  },
  {
    id: 8,
    name: 'Xbox Wireless Headset',
    price: 99.99,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&q=80',
    category: 'Accessories',
    rating: 4.4,
    badge: null,
    badgeColor: null,
    description:
      'Hear every dimension with Dolby Atmos, DTS Headphone:X, and Windows Sonic support on Xbox consoles and Windows. Surrond sound in a comfortable, lightweight design.',
    specs: ['Dolby Atmos', 'DTS Headphone:X', '15hr Battery', 'Foldable Design'],
  },
  {
    id: 9,
    name: 'PS5 DualSense Charging Station',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    category: 'Accessories',
    rating: 4.3,
    badge: 'Deal',
    badgeColor: 'neon',
    description:
      'Charge up to two DualSense wireless controllers simultaneously using the PS5 DualSense Charging Station. Sleek design matches your PS5 console perfectly.',
    specs: ['Dual Charging', 'LED Indicators', 'PS5 Compatible', 'Compact Design'],
  },
  {
    id: 10,
    name: 'Xbox Play & Charge Kit',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=600&q=80',
    category: 'Accessories',
    rating: 4.2,
    badge: null,
    badgeColor: null,
    description:
      'The Xbox Play & Charge Kit lets you play your favorite games without worrying about AA batteries. Use the included USB-C cable to charge while you play or between sessions.',
    specs: ['1400mAh Battery', 'USB-C Cable', 'Play While Charging', 'Xbox Series Compatible'],
  },
];

export const categories = ['All', 'PlayStation', 'Xbox', 'Controllers', 'Accessories'];

export const getFeatured = () => products.filter((p) => p.badge);

export const getByCategory = (cat) =>
  cat === 'All' ? products : products.filter((p) => p.category === cat);

export const getById = (id) => products.find((p) => p.id === id);
