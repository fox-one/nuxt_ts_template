import { Configuration } from '@nuxt/types'
import i18n from './i18n'

const config: Configuration = {
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/scss/index.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/globalComponents.ts' },
    { src: '~/plugins/globalProperty.ts' },
    { src: '~plugins/vue-lazyload.ts', ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  buildModules: [
    [
      '@nuxt/typescript-build',
      {
        typeCheck: true,
        ignoreNotFoundWarnings: true
      }
    ],
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/eslint-module',
    [
      'nuxt-i18n',
      {
        vueI18n: i18n,
        locales: ['en', 'zh'],
        defaultLocale: 'zh',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: false,
        parsePages: false,
        seo: false
      }
    ]
  ],
  axios: {},
  vuetify: {
    defaultAssets: false,
    treeShake: true,
    optionsPath: './vuetify.options.ts'
  },
  build: {
    transpile: ['vuetify'],
    babel: {
      plugins: [
        [
          'import',
          {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
          },
          'vant'
        ]
      ]
    },
    extend() {}
  }
}

export default config
