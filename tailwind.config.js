module.exports = {
  content: ["./_site/**/*.{html,js,liquid}"],
  theme: {
    listStyleType: {
      circle: 'circle',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
