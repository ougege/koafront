import Vue from 'vue'
import vuex from 'vuex'
import global from './modules/global'
Vue.use(vuex)

export default new vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    global
  }
})
