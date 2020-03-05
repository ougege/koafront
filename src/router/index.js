import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history', // 不显示Url中的#/
  scrollBehavior (to, from, savedPosition) { // 打开滚动到顶部
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  },
  routes: [
    {
      // path: '/',
      // name: 'login',
      // component (resolve) {
      //   require(['../views/Login.vue'], resolve)
      // },
      path: '/',
      name: 'login',
      component (resolve) {
        require(['../views/LayOut.vue'], resolve)
      },
      children: [
        { // 合约列表
          path: '/forward/create',
          component (resolve) {
            require(['../views/forward/create.vue'], resolve)
          }
        },
        { // 合约详情
          path: '/forWard/detail',
          component (resolve) {
            require(['../views/forward/detail.vue'], resolve)
          }
        },
        { // 删除合约
          path: '/forWard/delete',
          component (resolve) {
            require(['../views/forward/delete.vue'], resolve)
          }
        },
        { // 用户列表
          path: '/user/create',
          component (resolve) {
            require(['../views/user/create.vue'], resolve)
          }
        },
        { // 用户详情
          path: '/user/detail',
          component (resolve) {
            require(['../views/user/detail.vue'], resolve)
          }
        },
        { // 删除用户
          path: '/user/delete',
          component (resolve) {
            require(['../views/user/delete.vue'], resolve)
          }
        },
        { // 登录
          path: '/login',
          component (resolve) {
            require(['../views/Login.vue'], resolve)
          }
        }
      ]
    },
    {
      path: '*',
      component (resolve) {
        require(['../components/404.vue'], resolve)
      }
    }
  ]
})
