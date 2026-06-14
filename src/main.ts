import { createApp } from 'vue'
import './style.css'
import { i18n } from './i18n/index.ts'
import App from './App.vue'

createApp(App)
    .use(i18n)
    .mount('#app')
