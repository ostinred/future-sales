export const PAGE_VARIANT_BASIC = {
  initial: {
    opacity: 0,
    y: '20vh',
  },
  in: {
    opacity: 1,
    y: '0',
  },
  out: {
    opacity: 0,
    y: '20vh',
  },
};

export const PAGE_VARIANT_OPACITY = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const PAGE_VARIANT_RIGHT = {
  initial: {
    opacity: 0,
    x: '100vw',
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: '-100vw',
  },
};

export const PAGE_TRANSITION = {
  type: 'tween',
  stiffness: 50,
  ease: 'easeInOut',
  duration: 0.3,
};

export const CATEGORIES = [
  { name: 'Watches', icon: 'icon-watch' },
  { name: 'Phones', icon: 'icon-phone' },
  { name: 'Laptops', icon: 'icon-laptop' },
  { name: 'Sound', icon: 'icon-speaker' },
  { name: 'Sports', icon: 'icon-baseball' },
  { name: 'Clothes', icon: 'icon-clothes' },
  { name: 'Shoes', icon: 'icon-shoes' },
];

export const NOTIFICATIONS = [
  {
    id: 1,
    date: 'Today, 13:00 PM',
    title: 'Jane Doe commited to your product',
    good: 'PS5 Digital Edition gaming console',
  },
  {
    id: 2,
    date: '5 Dec, 16:00 PM',
    title:
      'Selling date is coming. Don’t forget to prepair your product for shipping.',
    good: 'PS5 Digital Edition gaming console',
  },
];
