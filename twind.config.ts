import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'theme-light-grey': '#737272',
        'theme-dark-pink': '#A68F8A',
        'theme-pink': '#D9BEB8',
        'theme-medium-grey': '#404040',
        'theme-black': '#0D0D0D'
      },
      animation: {
        fadeIn: "fadeIn 1s linear",
        fadeInSec: "fadeIn2 1s linear",
        fadeInThird: "fadeIn2 1.5s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: 'translateY(0.25rem)' },
          "100%": { opacity: 1, transform: 'translateY(0rem)' }
        },
        fadeIn2: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0, transform: 'translateY(0.25rem)' },
          "100%": { opacity: 1, transform: 'translateY(0rem)' }
        }
      }
    }
  },
} as Options;
