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
          title: '首页',
          keepAlive: false,
          transition: 'fadeInUp'
        },
        component: () => import('@/views/home/HomePage.vue')
      },
      {
        path: '/component',
        name: 'CustomComponent',
        redirect: '/component/component1',
        meta: {
          title: '自定义组件'
        },
        children: [
          {
            path: '/component/component1',
            name: 'Component1',
            meta: {
              title: '自定义组件1',
              keepAlive: false,
              transition: 'fadeInDown'
            },
            component: () => import('@/views/component/Component1.vue')
          },
          {
            path: '/component/component2',
            name: 'Component2',
            meta: {
              title: '自定义组件2',
              keepAlive: false,
              transition: 'fadeInDown'
            },
            component: () => import('@/views/component/Component2.vue')
          }
        ]
      },
      {
        path: '/about',
        name: 'About',
        meta: {
          title: '关于',
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
          title: '登录',
          keepAlive: false,
          transition: 'fadeInRight'
        },
        component: () => import('@/views/access/LoginView.vue')
      },
      {
        path: '/access/register',
        name: 'Register',
        meta: {
          title: '注册',
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
