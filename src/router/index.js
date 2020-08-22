import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'layout',
          component: resolve => require(['@/components/layout'], resolve)
      },
      {
          path: '/login',
          name: 'login',
          component: resolve => require(['@/components/login/login'], resolve)
      }
  ]
})
