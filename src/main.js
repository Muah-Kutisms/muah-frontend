import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import * as filters from './utils/filters.js';
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
