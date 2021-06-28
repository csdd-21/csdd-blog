import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'
import NotFound from '../components/NotFound.vue'

const routes = [
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
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
    component: () => import(/* webpackChunkName: "about" */ '../views/Study.vue'),
  },
  {
    path: '/life',
    name: 'life',
    component: () => import(/* webpackChunkName: "about" */ '../views/Life.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // path: '/article/:title',
    path: '/article/:tab/:title',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../components/Article.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
]
// console.log('process.env.BASE_URL',process.env.BASE_URL)
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/blog'),
  routes,
})

export default router
