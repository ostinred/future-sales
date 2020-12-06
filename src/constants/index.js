export const PAGE_VARIANT_BASIC = {
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
};
