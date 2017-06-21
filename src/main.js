import Vue from 'vue';
import App from './App';
import router from './router';

import './assets/css/base.css';
import './assets/css/main.less';
import './assets/js/jquery-1.7.2.js';
import './assets/js/rem.js';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
