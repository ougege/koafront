// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// import axios from './utils/request'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
// import './assets/css/site.scss'

Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  data: {
    // 专门用一个空的vue实例来做中央事件总线更加清晰也易于管理
    // 参考 https://segmentfault.com/a/1190000008018314
    eventHub: new Vue()
  }
})
