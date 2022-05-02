<script >
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        const mdRouter = reactive({
            BlogRoute: [
                {
                    path: 'bar',
                    name: '创建Vue3模版',
                    desc: '一个项目关于创建Vue-Vite-template',
                    // time: 'Feb 19',
                    // readTime: '1min'
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
        this is blog
    </div>
</template> 
