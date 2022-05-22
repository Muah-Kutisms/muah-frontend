import Vue from 'vue';
import App from './App.vue';
import router from './routes';
import store from './store';
import * as filters from './utils/filters.js';
import vuetify from '@/plugins/vuetify';
import IMP from 'vue-iamport';

Vue.config.productionTip = false;

Vue.use(IMP, 'imp95649390');
Vue.IMP().load();

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]));

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
