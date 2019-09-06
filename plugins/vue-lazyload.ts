import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default () => {
  Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: '/loading_default.png',
    loading: '/loading_default.png',
    attempt: 1
  })
}
