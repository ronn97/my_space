<script setup>
import R from '@/assets/img/R.vue';
</script>

<template>
    <div id="head">
        <div class="head_left">
            <R />
        </div>
        <div class="head_right"></div>
    </div>
</template>

<style lang="scss" scoped>
#head {
    width: 100%;
    height: 0.6rem;
    padding: 0 0.4rem;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

    .head_right,
    .head_left {
        display: flex;
        align-items: center;
        height: 100%;
    }
}
</style>