
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: "Shulk Discord Resources",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "A site containing resources from the Shulk Discord to aspiring pros."}
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  pwa: {
    manifest: {
      lang: 'en',
      name: "Shulk Discord Resources",
      short_name: "Dobercorgi",
      display: 'standalone',
      theme_color: '#A93F55',
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#A93F55' },

  router: {
    middleware: 'resources'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css',
    '~/assets/theme.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-material-design-icons',
    '@nuxtjs/pwa',
    '@nuxtjs/axios'
  ],

  bootstrapVue: {
    bootstrapCSS: false, 
    bootstrapVueCSS: false
  },
  
  axios: {
    // @todo Use an environment variable.
    baseURL: "https://backend.dobercorgi.info"
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
