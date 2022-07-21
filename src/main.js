import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Notifications from 'vue-notification'
import router from './router'
import store from './store'

import VueAxios from 'vue-axios';
import axios from 'axios';

import { Bar } from 'vue-chartjs';
import { Bar } from 'vue-chartjs/legacy';


Vue.use(VueAxios, axios);
Vue.use(Notifications)
import 'bootstrap';
import './assets/app.scss';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
