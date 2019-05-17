import Vue from 'vue'
import Router from 'vue-router'
import layouts from '@/view/layout/index'
import projectDetail from '@/view/projectDetail/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layouts',
      component: layouts
    },
    {
      path: '/projectDetail',
      name: 'projectDetail',
      component: projectDetail
    }
  ]
})
