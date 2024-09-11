import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

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
          transition: 'fadeInUp'
        },
        component: () => import('@/views/home/HomePage.vue')
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          keepAlive: false,
          transition: 'fadeInDown'
        },
        component: () => import('@/views/AboutView.vue')
      }
    ]
  },
  {
    path: '/access',
    redirect: '/access/login',
    component: () => import('@/views/access/AccessView.vue'),
    children: [
      {
        path: '/access/login',
        name: 'Login',
        meta: {
          keepAlive: false,
          transition: 'fadeInRight'
        },
        component: () => import('@/views/access/LoginView.vue')
      },
      {
        path: '/access/register',
        name: 'Register',
        meta: {
          keepAlive: true,
          transition: 'fadeInLeft'
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
