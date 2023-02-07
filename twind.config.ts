import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'theme-light-grey': '#737272',
    'theme-dark-pink': '#A68F8A',
    'theme-pink': '#D9BEB8',
    'theme-medium-grey': '#404040',
    'theme-black': '#0D0D0D'
  },
  extend: {
    animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
      }
    }
  }
} as Options;
