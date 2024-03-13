/** @type {import('tailwindcss').Config} */
export default {
  // "**" Funciona para llamar a todas las carpetas que esten dentro de src (en este caso)
  // y el "*" lo utilizaremos para indicar que usaremos todos los archivos que tengan la terminacion .jsx
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        'azure-radiance':
        {
          DEFAULT: '#3B82F6',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEFEFF',
          300: '#D7E6FD',
          400: '#B0CDFB',
          500: '#89B4FA',
          600: '#629BF8',
          700: '#3B82F6',
          800: '#0B61EE',
          900: '#084BB8',
          950: '#07409E'
        },
        'flamingo': 
        
        {  DEFAULT: '#EF4444',  
        50: '#FFFFFF',  
        100: '#FFFFFF',  
        200: '#FFFFFF',  
        300: '#FCDADA',  
        400: '#F9B5B5',  
        500: '#F58F8F',  
        600: '#F26A6A',  
        700: '#EF4444',  
        800: '#E71414',  
        900: '#B30F0F',  
        950: '#9A0D0D'},
      }
    },
  },
  plugins: [],

  variants: {
    extend: {},
  },

  darkMode: false,

}



