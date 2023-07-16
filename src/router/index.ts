import { createRouter, createWebHistory } from 'vue-router'
import { close, start } from '~/utils/nprogress'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('~/layout/layout.vue'),
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('~/pages/index/index.vue'),
      },
      {
        path: 'test1',
        name: 'Test1',
        component: () => import('~/pages/test1/test1.vue'),
      },
      {
        path: 'test2',
        name: 'Test2',
        component: () => import('~/pages/test2/test2.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/pages/login/login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/element-plus-template'),
  routes,
})

// 路由 前置守卫
router.beforeEach((to, from, next) => {
  start()
  next()
})
// 路由 后置守卫
router.afterEach(() => {
  close()
})

export default router
