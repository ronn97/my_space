
// import Router from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router'

// Vue.use(Router)

console.log(createRouter, 'createRouter')
console.log(createWebHashHistory, 'createWebHashHistory')
const routes = [{
    path: '/',
    component: () => import('@/views/Main.vue'),
    redirect: "/about",
    children: [{
        path: '/about',
        component: () => import('@/views/about/About.vue')
    }]

}]

// const router = new Router({
//     mode: 'hash',
//     routes
// })
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router