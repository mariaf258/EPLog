import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Inicio from '@/views/Inicio.vue'
import Registrate from '@/views/Registrate.vue'
import Login from '@/views/Login.vue'
import Perfil from '@/views/Perfil.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },
    {
      path: '/registrate',
      name: 'registrate',
      component: Registrate,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: Perfil,
    },
    /* {
      path: '/',
      name: 'home',
      component: HomeView,
    }, */
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
