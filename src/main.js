import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router/index'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.prototype.$axios=axios
const $router = router
Vue.prototype.$url = 'http://14.23.115.53:8688/testProject/getAll.do';

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
