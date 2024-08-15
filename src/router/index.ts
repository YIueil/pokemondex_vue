import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const RouteView = () => import('@/components/Layout/RouteView.vue')
const BasicLayout = () => import('@/components/Layout/BasicLayout.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
    component: BasicLayout,
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          keepAlive: false,
          transition: 'fade'
        },
        component: () => import('@/views/home/HomePage.vue')
      }
    ]
  },
  {
    path: '/access',
    redirect: '/access/login',
    component: RouteView,
    children: [
      {
        path: '/access/login',
        name: 'Login',
        meta: {
          keepAlive: false,
          transition: 'fade'
        },
        component: () => import('@/views/access/LoginView.vue')
      },
      {
        path: '/access/register',
        name: 'Register',
        meta: {
          keepAlive: true,
          transition: 'fade'
        },
        component: () => import('@/views/access/RegisterView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
