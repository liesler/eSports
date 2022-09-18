/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: "url('/Fundo.png')",
        'gradient': 'linear-gradient(89.86deg, #9572fc 0%, #43e7ad 50.52%, #e1d55d 100%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);',

      }
    },
  },
  plugins: [],
}
