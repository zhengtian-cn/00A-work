import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/nav',
      name: 'nav',
      component: () => import('../views/nav.vue'),
      children:[{
        path: '/',
        name: 'home',
        component: () => import('../views/home.vue')
      },{
        path: '/resume',
        name: 'resume',
        component: () => import('../views/resume.vue')
      },{
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue')
      },{
        path: '/job',
        name: 'job',
        component: () => import('../views/job.vue')
      },{
        path: '/jobDetails',
        name: 'jobDetails',
        component: () => import('../views/jobDetails.vue')
      }]
    },
    {
      path: '/resumeDetails',
      name: 'resumeDetails',
      component: () => import('../views/resumeDetails.vue')
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: () => import('../views/changePassword.vue')
    }
  ]
})
