import Vue from 'vue'
import Vuex from 'vuex'
import {store} from './stores/store'

import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import { createPinia, PiniaVuePlugin, storeToRefs } from 'pinia'

import App from './App.vue'
import router from './router'
Vue.use(Vuex)
Vue.use(VueCompositionAPI)

const app = createApp({
  router,
  store : store,
  pinia: createPinia(),
  render: () => h(App)
})
app.use(PiniaVuePlugin)

app.mount('#app')
