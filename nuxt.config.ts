import pkg from './package.json'

export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',

  // Client-only SPA: the categories are fetched from the backend at runtime, so the
  // build output is a static shell that GitHub Pages can serve.
  ssr: false,

  modules: ['@vite-pwa/nuxt'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Shulk Discord Resources',
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'description', content: pkg.description },
        { name: 'theme-color', content: '#A93F55' }
      ],
      // Static rather than via <NuxtPwaAssets />, as with ssr: false that only renders in the browser.
      link: [
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', href: '/pwa-192x192.png', sizes: '192x192' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon-180x180.png' }
      ]
    }
  },

  css: [
    'material-icons/iconfont/filled.css',
    '~/assets/theme.scss',
    '~/assets/main.css'
  ],

  runtimeConfig: {
    public: {
      // Override with NUXT_PUBLIC_API_BASE at build time.
      apiBase: 'https://backend.dobercorgi.info',
      version: pkg.version
    }
  },

  nitro: {
    preset: 'github_pages'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Bootstrap 5 still uses @import and the legacy Sass globals.
          quietDeps: true,
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function']
        }
      }
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      lang: 'en',
      name: 'Shulk Discord Resources',
      short_name: 'Dobercorgi',
      description: pkg.description,
      display: 'standalone',
      theme_color: '#A93F55',
      background_color: '#ffffff'
    },
    pwaAssets: {
      image: 'public/icon.png'
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,woff2}']
    }
  }
})
