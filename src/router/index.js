import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'layout',
          component: resolve => require(['@/components/layout'], resolve),
          children:[{
              path: '/banner',
              name: 'banner',
              component: resolve => require(['@/components/banner/banner'], resolve)
          },{
              path: '/banner/add',
              name: 'addbanner',
              component: resolve => require(['@/components/banner/addbanner'], resolve)
          }]
      },
      {
          path: '/login',
          name: 'login',
          component: resolve => require(['@/components/login/login'], resolve)
      }
  ]
})
