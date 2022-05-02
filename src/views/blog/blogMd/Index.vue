<script >
import { defineComponent, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
    name: 'blogMd',

    setup() {
        const route = useRoute();
        const str = ref();

        const unMdByRoute = async function (callback) {
            const mdhtml = import(/* @vite-ignore */ `./${route.params.md}.md`)
            callback(await mdhtml)
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
    <div class="template-container markdown-body" v-html="str"> </div>
</template>


<style lang="scss">
.markdown-body {
    margin-top: 10px;
    box-sizing: border-box;
    min-width: 200px;
    max-width: 100%;
    margin: 10px auto;
    font-size: 0.2rem;
    padding: 15px 45px;
}

@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
</style>