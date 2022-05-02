<script >
import { defineComponent, reactive } from 'vue';
import moment from 'moment';

export default defineComponent({
    setup() {
        const mdRouter = reactive({
            BlogRoute: [
                {
                    path: 'start',
                    title: '创建Vue3模版',
                    desc: '一个项目关于创建Vue-Vite-template',
                    data: moment().format('YYYY-MM-DD'),
                    readTime: '1min'
                }
            ]
        })

        return {
            mdRouter
        }
    },
})
</script>
<template>
    <div class="blogs">
        <!-- this is blog -->
        <Title title="Blogs" />
        <div class="post-item" v-for="(item, index) in mdRouter.BlogRoute" :key="index">
            <RouterLink :to="'/blog/' + item.path">{{ item.title }}</RouterLink>
            <div class="other">
                <span>{{ item.data }} · <span class="readTime">{{ item.readTime }}</span></span>
            </div>
        </div>
    </div>
</template> 
