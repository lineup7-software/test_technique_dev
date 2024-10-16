/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        transparent: 'transparent',
        'dark-lu': '#1f2937',
        action: '#9061f9',
        'action-hover': '#9333ea',
        focus: '#7e22ce',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    require('@tailwindcss/forms'),
  ],
};
