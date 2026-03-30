import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'

const defaultTitle = 'Dr. Katharina Weweck | Psychologische Psychotherapeutin Kolbermoor'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/impressum',
    component: () => import('./views/Impressum.vue'),
    meta: { title: 'Impressum | Dr. Katharina Weweck' },
  },
  {
    path: '/datenschutz',
    component: () => import('./views/Datenschutz.vue'),
    meta: { title: 'Datenschutz | Dr. Katharina Weweck' },
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./views/NotFound.vue'),
    meta: { title: 'Seite nicht gefunden | Dr. Katharina Weweck' },
  },
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

router.afterEach((to) => {
  document.title = to.meta.title || defaultTitle
})

export default router
