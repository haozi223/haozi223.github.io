import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios';
import qs from 'qs';
import "element-ui/lib/theme-chalk/index.css";


import { Rate } from "element-ui";

Vue.use(VueAxios, axios, Vuex, VueRouter).use(Rate)



Vue.prototype.$qs = qs;

Vue.config.productionTip = false;

import store from './store/index';
import router from './router/index'

new Vue({

  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
