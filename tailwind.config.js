/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
      xl: '1540px',
    },

  extend: {
      fontFamily: {
        roboto: ['Roboto']
      },
      colors: {            
        'dark-slate-greys': 'hsl(234, 29%, 20%)', //Added s at the end of every name to avoid clashes
        'charcoal-greys': 'hsl(235, 18%, 26%)',
        'greys': 'hsl(231, 7%, 60%)',
        'whites': 'hsl(0, 0%, 100%)',
        'tomatos': 'hsl(4, 100%, 67%)',      
      },
      
    },
  },
  plugins: [],
}


