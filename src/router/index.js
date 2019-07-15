import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Blog from '../components/Blog'
import Detail from '../components/Detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/Blog',
      name:'Blog',
      component: Blog
    },
    {
      path:'/Detail',
      name:'Detail',
      component:Detail
    }
  ]
})
