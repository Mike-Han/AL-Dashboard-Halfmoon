import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/chart',
      name: 'chart',
      component: () => import('../views/ChartComponentsView.vue')
    },
    {
      path: '/summary',
      name: 'summary',
      component: () => import('../views/SummaryComponentsView.vue')
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: () => import('../views/Demo1View.vue')
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: () => import('../views/Demo2View.vue')
    }
  ]
})

export default router
