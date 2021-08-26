import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/memo-en',
    name: 'MEMO en',
    component: () => import(/* webpackChunkName: "about" */ '../views/Memo.vue')
  },
  {
    path: '/memo-es',
    name: 'MEMO es',
    component: () => import(/* webpackChunkName: "about" */ '../views/memo-es.vue')
  },
  {
    path: '/memo-pt',
    name: 'MEMO pt',
    component: () => import('../views/memo-pt.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
