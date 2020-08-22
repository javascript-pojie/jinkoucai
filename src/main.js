// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../theme/index.css'
import {fetchGet, fetchPost} from "./http/http";

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.post = fetchPost;
Vue.prototype.get = fetchGet;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
