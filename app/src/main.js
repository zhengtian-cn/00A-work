// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import myConfig from './assets/my-config.js'

import './assets/static/css/common.css'
import './assets/static/css/bootstrap.min.css'
import './assets/static/js/jquery-3.3.1.min.js'
import './assets/static/js/bootstrap.min.js'

Vue.config.productionTip = false;

Vue.prototype.GLOBAL = myConfig;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
