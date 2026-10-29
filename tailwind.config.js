import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      height: {
        'screen-75': '90vh',
        'screen-50': '50vh',
      },
      fontFamily: {
        main: ['"Open Sans"'],
      },
    },
  },
  plugins: [daisyui],
  // Keep the same light look the original pages had.
  daisyui: { themes: ['light'] },
};
