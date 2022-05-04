<script >
import { defineComponent, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name: 'blogMd',

    setup() {
        const route = useRoute();
        const str = ref();

        const unMdByRoute = async function (callback) {
            const mdFile = import.meta.glob('@/assets/datas/blog/*.md');
            const path = `../../../assets/datas/blog/${route.params.md}.md`;
            const mdhtml = mdFile[path]()
            callback(await mdhtml)
            // const mdhtml = import(/* @vite-ignore */ `./${route.params.md}.md`)
            // callback(await mdhtml)
        }
        unMdByRoute(target => {
            console.log(target.html)
            str.value = target.html
        })
        return {
            str
        }
    },
})
</script>

<template>
    <div class="template-container markdown-body main_cont" v-html="str"> </div>
</template>