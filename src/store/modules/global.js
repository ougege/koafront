import * as types from '../mutation-type'
// 保存组件的数据
const state = {
  /* ====== 用户信息 ====== */
  userData: {
    userName: '',
    phone: '',
    userId: '',
    email: ''
  }
}
// state状态
const getters = {
  userData: state => {
    if (!state.userData || !state.userData.userId) {
      // 尝试从LocalStorage中获取
      try {
        let data = JSON.parse(localStorage.getItem(types.SYSTEM_USERDATA))
        if (data) {
          state.userData = data
        }
      } catch (e) {}
    }
  }
}
// 动作导致的状态变化:同步
const mutations = {
  /* ====== 用户信息 ====== */
  [types.SYSTEM_USERDATA] (state, userData) {
    state.userData = userData
  }
}
// 等同于mutations,可以包含异步操作
const actions = {
  /* ====== 用户信息 ====== */
  [types.SYSTEM_USERDATA] ({commit}, userData) {
    localStorage.setItem(types.SYSTEM_USERDATA, JSON.stringify(userData))
    commit(types.SYSTEM_USERDATA, userData)
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}
