import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/pages/Home.vue'
import Preferences from '@/pages/Preferences.vue'
import Dashboard from '@/pages/Dashboard.vue'
import UserProfile from '@/pages/UserProfile.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/profile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/preferences',
      name: 'preferences',
      component: Preferences
    },
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/assessment/:assessmentid/:section/:questionid',
      name: 'assessment',
      component: Form
    },
    { path: '/assessment*', redirect: '/assessment/897281/basics/0' }
  ]
})
