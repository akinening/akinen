export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '#times | デザイン, PM, エンジニアリングのTips集',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Open Graph
      { hid: 'og:title', property: 'og:title', content: '#times' },
      { hid: 'og:description', property: 'og:description', content: '#timesは、デザイン, PM, エンジニアリングのTipsを集めたサイトです。' },
      { hid: 'og:image', property: 'og:image', content: 'https://times.akinen.com/ogp.png' },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@_akinen' },
      { hid: 'twitter:title', name: 'twitter:title', content: '#times' },
      { hid: 'twitter:description', name: 'twitter:description', content: '#timesは、デザイン, PM, エンジニアリングのTipsを集めたサイトです。' },
      // サムネイル指定
      { name: 'thumbnail', content: 'https://times.akinen.com/ogp.png' },

      { name: 'format-detection', content: 'telephone=no' },
    ],
    bodyAttrs: {
      class: 'body-class'
    },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap'
  ],

  // https://go.nuxtjs.dev/config-axios
  axios: {
    // https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // https://go.nuxtjs.dev/config-content
  content: {},

  sitemap: {
    hostname: 'https://times.akinen.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    async routes() {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()
      return files.map((file) => (file.path === '/index' ? '/' : file.path))
    },
  },
}
