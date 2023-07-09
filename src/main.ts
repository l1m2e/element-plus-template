import { createApp } from 'vue'
import App from './App.vue'
import router from '~/router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '~/theme/theme.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
