module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#F3F3F4',
          200: '#E4E4E4',
          300: '#EEEEEE',
          400: '#A9A9AF',
          500: '#272738'
        },
        white: '#FFFFFF',
        black: '#000',
        blue: {
          100: '#4F3CC9'
        },
        grey: {
          100: '#747474',
          200: '#F3F3F3',
          300: '#8B8B9E'
        }
      },
      fontFamily:{
        sans: ['Poppins', 'sans-serif'],
      },
      width:{
        'on-lg': '1150px'
      },
      boxShadow: {
        'on-shadow': '8px 8px 23px rgba(60, 60, 60, 0.15);',
      }
    },
  },
  plugins: [],
}
