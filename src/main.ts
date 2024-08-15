import './assets/main.css'

// animate.css 动画库
import 'animate.css'
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

// Vue-Router4
import router from './router'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
