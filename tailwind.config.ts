import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

/** @type {Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(262, 80%, 55%)', // indigo/violet blend
          light: 'hsl(262, 80%, 65%)',
          dark: 'hsl(262, 80%, 45%)',
        },
        accent: {
          emerald: 'hsl(158, 70%, 45%)',
          cyan: 'hsl(190, 85%, 45%)',
          amber: 'hsl(45, 90%, 55%)',
          rose: 'hsl(340, 80%, 55%)',
        },
        glass: 'rgba(255,255,255,0.1)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
