/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'text': '#e5e5e5',
      'background': '#0B0F14',
      'primary': '#FF3495',
      'secondary': '#87B0FF',
      'accent': '#FFAE34',
      'green': '#16a34a',
    },
    extend: {
      fontSize: {
        sm: '0.707rem',
        base: '1rem',
        xl: '1.414rem',
        '2xl': '1.999rem',
        '3xl': '2.827rem',
        '4xl': '3.997rem',
        '5xl': '5.652rem',
      },
      fontFamily: {
        heading: 'Manrope',
        body: 'Manrope',
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        bold: '800',
      },
      blur: {
        '5xl': '180px',
      },
      animation: {
        'bloba': 'bloba 10s infinite ease-in-out',
        'blobb': 'blobb 10s infinite ease-in-out',
        'point': 'point 1.5s ease-out forwards',
      },
      keyframes: {
        'bloba': {
          '0%': { transform: 'translate(10rem, -6rem)', 'background-color': 'var(--secondary)'},
          '50%': { transform: 'translate(-10rem, 6rem)', 'background-color': 'var(--primary)'},
          '100%': { transform: 'translate(10rem, -6rem)', 'background-color': 'var(--secondary)'},
        },
        'blobb': {
          '0%': { transform: 'translate(-10rem, 6rem)', 'background-color': 'var(--secondary)'},
          '50%': { transform: 'translate(10rem, -6rem)', 'background-color': 'var(--accent)'},
          '100%': { transform: 'translate(-10rem, 6rem)', 'background-color': 'var(--secondary)'},
        },
        'point': {
          '0%': { transform: 'translate(-50%, 0)', opacity: '0' },
          '1%': { transform: 'translate(-50%, 0)', opacity: '100%' },
          '99%': { transform: 'translate(-50%, -500%)', opacity: '0' },
          '100%': { transform: 'translate(-50%, 0)', opacity: '0' },
        },
      }
    },
  },
  plugins: [],
}