
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { createRouter, createWebHashHistory } from 'vue-router'

// Vue.use(Router)

console.log(createRouter, 'createRouter')
console.log(createWebHashHistory, 'createWebHashHistory')
const routes = [{
    path: '/',
    component: () => import('@/views/Main.vue'),
    redirect: "/about",
    children: [
        {
            path: '/about',
            component: () => import('@/views/about/Index.vue')
        },
        {
            path: '/blog',
            component: () => import('@/views/blog/Index.vue'),
        },
        {
            path: '/blog/:md',
            component: () => import('@/views/blog/blogMd/Index.vue'),
        },
        {
            path: '/project',
            component: () => import('@/views/project/Index.vue')
        },
    ]

}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

NProgress.configure({ showSpinner: false })

//在路由跳转前用NProgress.start()标记下进度条开始
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
});

//在路由跳转后用NProgress.done()标记下结束
router.afterEach(() => {
  NProgress.done()
})


export default router