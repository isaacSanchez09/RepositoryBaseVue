import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/about',
      name: 'about',
      //component: () => import('../views/AboutView.vue')
      component: About
    }
  ]
})

export default router
