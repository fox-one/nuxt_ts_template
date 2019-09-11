import Vue from 'vue'
import { Toast } from 'vant'
import Loading from '@/components/basic/Loading.vue'

import 'animate.css'

Vue.use(Toast)
Vue.component('loading', Loading)
