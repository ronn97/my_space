<template>
    <a :href="$attrs.url" target="_blank" class="list_item">
        <component class="icon" :is="$attrs.icon"></component>
        <div class="box_item">
            <p class="name"> {{ $attrs.name }}</p>
            <p class="desc">{{ $attrs.desc }}</p>
        </div>
    </a>

</template>


<style scoped lang="scss">
.list_item {
    display: flex;
    align-items: center;

    .icon {
        font-size: 0.5rem;
    }

    .box_item {
        display: flex;
        flex-direction: column;
    }
}
</style>