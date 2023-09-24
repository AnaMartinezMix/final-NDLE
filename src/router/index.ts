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
      path: '/conocenos',
      name: 'conocenos',
      component: () => import('../views/conocenosView.vue')
    },
    {
      path: '/servicios',
      name: 'servicios',
      component: () => import('../views/serviciosView.vue')
    },
    {
      path: '/sedes',
      name: 'sedes',
      component: () => import('../views/sedesView.vue')
    },
    {
      path: '/nuestroequipo',
      name: 'nuestroequipo',
      component: () => import('../views/nuestroequipoView.vue')
    },
    {
      path: '/Suscribete',
      name: 'Suscribete',
      component: () => import('../views/SuscribeteView.vue')
    },
  ]
})

export default router
