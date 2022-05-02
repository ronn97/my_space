import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

/* 挂接 */
const app = createApp(App);
app.use(Router);
app.mount('#app');