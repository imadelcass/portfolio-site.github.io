import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import VueGtag from 'vue-gtag'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(
  VueGtag,
  {
    appName: 'My application',
    pageTrackerScreenviewEnabled: true,
    config: { id: 'G-0TJZKY5TNF' }
  },
  router
)
app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
