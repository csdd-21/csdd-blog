import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('../views/Study.vue'),
  },
  {
    path: '/life',
    name: 'life',
    component: () => import('../views/Life.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/article/:tab/:title',
    name: 'article',
    component: () => import('../components/Article.vue')
  },
]
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHistory(),
  routes,
})

export default router
