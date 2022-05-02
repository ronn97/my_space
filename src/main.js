import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import '@/assets/js/adaptive.js'
import '@/assets/css/rest.css'
import '@/assets/css/main.css'

/* 挂接 */
const app = createApp(App);
app.use(Router);
app.mount('#app');