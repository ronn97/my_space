<script setup>
import Model from '@/assets/datas/project/index.js';
import ProjectItem from './projectItem/Index.vue';

const Project = Model.readByKey('pro');
</script>
<template>
    <div class="about main_cont">
        <div class="list-container max-full" :key="index" v-for="(pro, index) in Project">
            <h2> {{ pro.capName }}</h2>
            <div class="catgory_item">
                <ProjectItem :key="idx" v-for="(item, idx) in pro.capList" class="flex-1" :url="item.url"
                    :icon="item.icon" :name="item.name" :desc="item.desc" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.catgory_item {
    display: flex;
    justify-content: space-between;
}
</style>
