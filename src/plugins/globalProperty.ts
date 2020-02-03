import Vue from 'vue'
import { mdiArrowLeft } from '@mdi/js'
import * as utils from '@/utils'
import api from '@/services/api'

Vue.prototype.$icons = {
  mdiArrowLeft
}

Vue.prototype.$utils = utils

Vue.prototype.$api = api
