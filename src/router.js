import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/impressum', component: () => import('./views/Impressum.vue') },
  { path: '/datenschutz', component: () => import('./views/Datenschutz.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('./views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

export default router
