// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}', './src/**/*.{jsx}',],

  theme: {
    extend: {},
    colors: {
      'primary-text': "#303345",
      'secundary-text': '#9A938C',
      'red': 'red',
      'white': '#F9F9F9',
      'secundary-text-100': '#fbd1a6',
      'secundary-text-900': '#fffcf8',
      'background-gradient': 'linear-gradient(to left top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    },
  },
  plugins: [],
};
