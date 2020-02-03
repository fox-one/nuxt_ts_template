import { Configuration } from '@nuxt/types'
import i18n from './src/i18n'
import { isProduct, GA } from './src/constants'

const config: Configuration = {
  mode: 'spa',
  router: {
    mode: 'hash'
  },
  srcDir: './src',
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: ['~/styles/index.scss'],
  plugins: [
    '~/plugins/globalComponents.ts',
    '~/plugins/globalProperty.ts'
  ],
  buildModules: [
    '@nuxtjs/eslint-module',
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
    '@nuxtjs/google-analytics',
    '@nuxtjs/dotenv',
    [
      'nuxt-i18n',
      {
        vueI18n: i18n,
        locales: ['en', 'zh'],
        defaultLocale: 'zh',
        strategy: 'no_prefix',
        detectBrowserLanguage: false,
        parsePages: false,
        seo: false
      }
    ]
  ],
  googleAnalytics: {
    id: GA,
    dev: false,
    debug: {
      enabled: !isProduct,
      sendHitTask: isProduct
    }
  },
  vuetify: {
    customVariables: ['~/styles/variables.scss'],
    defaultAssets: false,
    treeShake: true,
    optionsPath: './vuetify.options.ts'
  },
  build: {
    transpile: ['vuetify'],
    extend () {}
  },
  env: {
    TOKEN: process.env.TOKEN || '',
    APP_ENV: process.env.APP_ENV || ''
  }
}

export default config
