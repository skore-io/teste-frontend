module.exports = {
  mode: 'spa',
  head: {
    title: 'Skore Teste',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
      { rel: 'stylesheet', href: '//fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700&display=swap' },
    ],
  },

  modules: [
    '@nuxtjs/axios',
  ],

  plugins: [
    '~/plugins/axios',
  ],
}
