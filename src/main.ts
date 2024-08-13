import './assets/main.css'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vue-Router4
import router from './router/index'

import App from './App.vue'

// Vue-Router4
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(router)

app.mount('#app')
