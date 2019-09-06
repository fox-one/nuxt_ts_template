import 'nuxt-i18n'

declare module 'vue/types/vue' {
  interface Vue {
    $velocity: any
    title?: any
    $errorHandler?: any
  }

  interface VueConstructor {
    $velocity: any
    title?: any
    $errorHandler?: any
  }
}
