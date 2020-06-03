import { Plugin } from '@nuxt/types'
import createApiService from '@/services/createApiService'
import utils from '@/utils'

declare module 'vue/types/vue' {
  interface Vue {
    title?: string
    $utils: typeof utils
    $apis: ReturnType<typeof createApiService>
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $utils: typeof utils
    $apis: ReturnType<typeof createApiService>
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $utils: typeof utils
    $apis: ReturnType<typeof createApiService>
  }
}

const plugin: Plugin = ({ app }, inject) => {
  inject('apis', createApiService(app))
  inject('utils', utils)
}

export default plugin
