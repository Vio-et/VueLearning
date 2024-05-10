import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/attribute',
      name: 'attribute',
      component: () => import('../views/AttributeBinding.vue')
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('../views/ConditionalRendering.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/ListRendering.vue')
    }
  ]
})

export default router
