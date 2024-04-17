module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: 'Jost',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#FF7235',
        accentHover: '#e05216',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        hero: "url('./img/hero.webp')",
        repair: "url(./img/b2.jpg)",
      },
    },
  },
  plugins: [],
};
