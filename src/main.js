import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/index'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
const $router = router
new Vue({
  render: h => h(App),
  router
}).$mount('#app')