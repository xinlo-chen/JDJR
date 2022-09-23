import router from '@/router'
import 'amfe-flexible'
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
