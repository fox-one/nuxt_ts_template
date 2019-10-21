import Vue from 'vue'
import { mdiArrowLeft } from '@mdi/js'
import errorHandler from '@/utils/errorHandler'

export default () => {
  Vue.prototype.$icons = {
    mdiArrowLeft
  }

  Vue.prototype.$toast = function (data: { message: string; color: string }) {
    this.$store.commit('app/toast', data)
  }

  Vue.prototype.$errorHandler = errorHandler
}
