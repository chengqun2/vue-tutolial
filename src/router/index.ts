import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/ref',
      name: 'ref',
      component: () => import('../views/Ref-demo.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/Reactive-demo.vue')
    },
    {
      path: '/v-bind-css',
      name: 'v-bind-css',
      component: () => import('../views/V-bind-css.vue')
    },
    {
      path: '/print',
      name: 'print',
      component: () => import('../views/vue-to-print/print-demo.vue')
    }
  ]
})

export default router
