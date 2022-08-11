/**
 * fade in and out only
 * no movements
 */
export const FADE = {
  IN: {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  OUT: {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
}

/**
 * fade in up
 */

export const FADE_IN_UP = {
  withOpacity: {
    from: {
      opacity: 0,
      top: '10%',
    },
    to: {
      opacity: 1,
      top: '0%',
    },
  },
  noOpacity: {
    from: {
      top: '10%',
    },
    to: {
      top: '0%',
    },
  },
}

/**
 * fade in down
 */
export const FADE_IN_DONW = {
  withOpacity: {
    from: {
      opacity: 0,
      top: '-10%',
    },
    to: {
      opacity: 1,
      top: '0%',
    },
  },
  noOpacity: {
    from: {
      top: '-10%',
    },
    to: {
      top: '0%',
    },
  },
}
