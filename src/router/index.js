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
          },{
              path: '/agent',
              name: 'agent',
              component: resolve => require(['@/components/agent/agentlist'], resolve)
          },{
              path: '/agent/add',
              name: 'addagent',
              component: resolve => require(['@/components/agent/addagent'], resolve)
          },{
              path: '/materialclass',
              name: 'materialclass',
              component: resolve => require(['@/components/material/materialclass'], resolve)
          },{
              path: '/materialclass/add',
              name: 'addmaterialclass',
              component: resolve => require(['@/components/material/addmaterialclass'], resolve)
          },{
              path: '/material',
              name: 'material',
              component: resolve => require(['@/components/material/material'], resolve)
          },{
              path: '/material/add',
              name: 'addmaterial',
              component: resolve => require(['@/components/material/addmaterial'], resolve)
          },{
              path: '/forumclass',
              name: 'forumclass',
              component: resolve => require(['@/components/forum/forumclass'], resolve)
          },{
              path: '/forumclass/add',
              name: 'addforumclass',
              component: resolve => require(['@/components/forum/addforumclass'], resolve)
          },{
              path: '/user',
              name: 'user',
              component: resolve => require(['@/components/user/user'], resolve)
          },{
              path: '/ordinaryMsg',
              name: 'ordinaryMsg',
              component: resolve => require(['@/components/msg/ordinaryMsg'], resolve)
          },{
              path: '/ordinaryMsg/sendMsg',
              name: 'sendMsg',
              component: resolve => require(['@/components/msg/sendMsg'], resolve)
          }]
      },
      {
          path: '/login',
          name: 'login',
          component: resolve => require(['@/components/login/login'], resolve)
      }
  ]
})
