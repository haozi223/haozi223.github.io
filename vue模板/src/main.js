import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueBus from './vue-bus/vue-bus'
import axios from 'axios'
import qs from 'qs'

import './rem'

Vue.use(vueBus, axios)

Vue.config.productionTip = false;
Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
