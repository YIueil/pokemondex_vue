import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/NativeUIComponent.vue'
import AboutView from '@/views/XIcons.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router