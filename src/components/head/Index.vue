<script setup>
import { ref } from 'vue';
import R from '@/assets/img/R.vue';
import AutoLightVue from './autolight/AutoLight.vue';
const items = ref([]);
items.value = [
    {
        name: "Blog",
        path: "/blog"
    },
    {
        name: "Project",
        path: "/project"
    },
]
console.log(items.value) 
</script>

<template>
    <div id="head">
        <div class="head_left">
            <R />
        </div>
        <div class="head_right">
            <template v-for="(item, index) in items" :key="index">
                <RouterLink :to="item.path">
                    {{ item.name }}
                </RouterLink>
            </template>
            <AutoLightVue />
        </div>
    </div>
</template>

<style lang="scss" scoped>
#head {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 0.6rem;
    font-size: 0.24rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    z-index: 10;
    background-color: #fff;

    .head_right,
    .head_left {
        display: flex;
        align-items: center;
        height: 100%;
        margin: 0 0.4rem;
    }

    .head_right {
        a {
            margin-left: 0.4rem;
        }
    }
}
</style>