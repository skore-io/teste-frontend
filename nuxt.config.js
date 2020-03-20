
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#5ac2a9', height: '4px' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.scss'
  ],
  styleResources: {
    scss: []
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/core-components.ts',
    '~/plugins/axios-accessor.ts',
    '~/plugins/date-filter.ts'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://us-central1-teste-frontend-c2dcc.cloudfunctions.net' || process.env.baseUrl,
    credentials: false
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (/*config, ctx*/) { }
  },
  router: {
    linkExactActiveClass: 'active'
  },
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  }
}
