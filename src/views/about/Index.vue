<script setup>
import { ref } from 'vue';
const mineRef = ref()
const readmd = async function (callback) {
    callback(await import('./about.md'))
}

readmd(target => {
    mineRef.value = target.html
})


</script>
<template>
    <div class="about main_cont markdown-body">
        <div v-html="mineRef"></div>
    </div>
</template>

<style scoped>
.about {
    margin: 1rem 0;
}
</style>
