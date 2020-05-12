
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: "Shulk Discord Resources",
    script: [
      { 
        async: true, 
        defer: true, 
        src: "https://analytics.lewis.coffee/ackee.js", 
        "data-ackee-server": "https://analytics.lewis.coffee",
        "ackee-domain-id": "ef648ef5-f2f3-466d-8ae3-f1952548ea14",
      }
    ]
  },
  pwa: {
    manifest: {
      lang: 'en',
      name: "Shulk Discord Resources",
      short_name: "Dobercorgi",
      display: 'standalone',
      theme_color: '#A93F55',
    },
    meta: {
      ogImage: true
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
