/**
 * @typedef {Object} ColorShade
 * @property {string} 50
 * @property {string} 100
 * @property {string} 500
 * @property {string} 600
 */

/**
 * @typedef {Object} NeutralGray
 * @property {string} 50
 * @property {string} 100
 * @property {string} 200
 * @property {string} 300
 * @property {string} 400
 * @property {string} 500
 * @property {string} 600
 * @property {string} 700
 * @property {string} 800
 * @property {string} 900
 */

/**
 * @typedef {Object} Colors
 * @property {Object} primary
 * @property {ColorShade} primary.blue
 * @property {ColorShade} primary.green
 * @property {ColorShade} primary.orange
 * @property {ColorShade} primary.purple
 * @property {ColorShade} primary.red
 * @property {Object} neutral
 * @property {string} neutral.white
 * @property {NeutralGray} neutral.gray
 * @property {string} neutral.black
 */

/**
 * @typedef {Object} Typography
 * @property {Object} fontFamily
 * @property {string[]} fontFamily.sans
 * @property {Object} fontSize
 * @property {string} fontSize.xs
 * @property {string} fontSize.sm
 * @property {string} fontSize.base
 * @property {string} fontSize.lg
 * @property {string} fontSize.xl
 * @property {string} fontSize.2xl
 * @property {string} fontSize.3xl
 * @property {string} fontSize.4xl
 * @property {string} fontSize.5xl
 * @property {Object} fontWeight
 * @property {string} fontWeight.normal
 * @property {string} fontWeight.medium
 * @property {string} fontWeight.semibold
 * @property {string} fontWeight.bold
 * @property {Object} lineHeight
 * @property {string} lineHeight.none
 * @property {string} lineHeight.tight
 * @property {string} lineHeight.snug
 * @property {string} lineHeight.normal
 * @property {string} lineHeight.relaxed
 * @property {string} lineHeight.loose
 */

/**
 * @typedef {Object} Spacing
 * @property {string} px
 * @property {string} 0
 * @property {string} 0.5
 * @property {string} 1
 * @property {string} 1.5
 * @property {string} 2
 * @property {string} 2.5
 * @property {string} 3
 * @property {string} 3.5
 * @property {string} 4
 * @property {string} 5
 * @property {string} 6
 * @property {string} 8
 * @property {string} 10
 * @property {string} 12
 * @property {string} 16
 * @property {string} 20
 * @property {string} 24
 * @property {string} 32
 * @property {string} 40
 * @property {string} 48
 * @property {string} 56
 * @property {string} 64
 */

/**
 * @typedef {Object} BorderRadius
 * @property {string} none
 * @property {string} sm
 * @property {string} DEFAULT
 * @property {string} md
 * @property {string} lg
 * @property {string} xl
 * @property {string} 2xl
 * @property {string} 3xl
 * @property {string} full
 */

/**
 * @typedef {Object} Shadows
 * @property {string} sm
 * @property {string} DEFAULT
 * @property {string} md
 * @property {string} lg
 * @property {string} xl
 * @property {string} 2xl
 * @property {string} inner
 * @property {string} none
 */

/**
 * @typedef {Object} Tokens
 * @property {Colors} colors
 * @property {Typography} typography
 * @property {Spacing} spacing
 * @property {BorderRadius} borderRadius
 * @property {Shadows} shadows
 */

/**
 * @type {Tokens}
 */
export const tokens = {
  colors: {
    primary: {
      blue: {
        50: '#e6f0ff',
        100: '#b3d1ff',
        500: '#3b82f6',
        600: '#2563eb',
      },
      green: {
        50: '#ecfdf5',
        100: '#d1fae5',
        500: '#10b981',
        600: '#059669',
      },
      orange: {
        50: '#fff7ed',
        100: '#ffedd5',
        500: '#f97316',
        600: '#ea580c',
      },
      purple: {
        50: '#faf5ff',
        100: '#f3e8ff',
        500: '#a855f7',
        600: '#9333ea',
      },
      red: {
        50: '#fef2f2',
        100: '#fee2e2',
        500: '#ef4444',
        600: '#dc2626',
      },
    },
    neutral: {
      white: '#ffffff',
      gray: {
        50: '#f9fafb',
        100: '#f3f4f6',
        200: '#e5e7eb',
        300: '#d1d5db',
        400: '#9ca3af',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
      },
      black: '#000000',
    },
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
};
