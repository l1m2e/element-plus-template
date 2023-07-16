import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from '~/router'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '~/theme/theme.css'

const app = createApp(App)

// 导入 element plus 所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue))
  app.component(key, component)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')
