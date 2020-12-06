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
