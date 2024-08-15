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
          keepAlive: true,
          transition: 'fade'
        },
        component: () => import('@/views/NativeUIComponent.vue')
      },
      {
        path: '/home2',
        name: 'Home2',
        meta: {
          keepAlive: true,
          transition: 'fade'
        },
        component: () => import('@/views/XIcons.vue')
      }
    ]
  },
  {
    path: '/access',
    component: RouteView,
    children: [
      {
        path: '/login',
        name: 'Login',
        meta: {
          keepAlive: true,
          transition: 'fade'
        },
        component: () => import('@/views/access/LoginPage.vue')
      },
      {
        path: '/register',
        name: 'Register',
        meta: {
          keepAlive: false,
          transition: 'fade'
        },
        component: () => import('@/views/access/RegisterPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
