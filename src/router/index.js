import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/pages/Home.vue'
import User from '@/pages/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:userid',
      name: 'UserProfile',
      component: User
    },
    {
      path: '/assessment/:section',
      name: 'assessment',
      component: Form
    },
    { path: '/', redirect: '/assessment/897281' }
  ]
})
