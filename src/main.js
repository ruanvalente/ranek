import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Loading from '@/components/Loading'

Vue.config.productionTip = false

// Global Components
Vue.component('Loading', Loading)
Vue.filter('formatPrice', value => {
  value = Number(value)
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
