module.exports = {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {
      transitionProperty: {
        flow: 'background-position',
      },
      backgroundSize: {
        flow: '400% auto',
      },
      backgroundImage: {
        'nuxt-gradient':
          'linear-gradient(30deg,#475569,#475569 25%,#0007dc 50%,#5400dc 75%,#dc00bf)',
      },
    },
  },
  plugins: [],
}
