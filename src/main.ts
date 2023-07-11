import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '~/router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '~/theme/theme.css'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
