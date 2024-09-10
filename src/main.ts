// 应用初始化
import '@/core'

import { createApp } from 'vue'

// pinia
import { createPinia } from 'pinia'

import App from './App.vue'

// Vue-Router4
import router from './router'

// nativeUI
import { NaiveUiPlugin } from '@/core/nativeUI'

const app = createApp(App)

app.use(NaiveUiPlugin)
app.use(router)
app.use(createPinia())

app.mount('#app')
