<script >
import { defineComponent, reactive } from 'vue';
import Blogs from '@/assets/datas/blog/index.js';

export default defineComponent({
    setup() {
        const BlogDatas = reactive({
            length: Blogs.getLength(),
            titles: Blogs.getTitles(),
            currentBlog: [],
            currentIndex: 0,
        })
        const getChildByIndex = function (index) {
            BlogDatas.currentIndex = index
            BlogDatas.currentBlog = Blogs.getChildByIndex(index)
        };
        getChildByIndex(BlogDatas.currentIndex);

        console.log(BlogDatas.titles)

        return {
            BlogDatas,
            getChildByIndex
        }
    },
})
</script>
<template>
    <div class="blogs main_cont">
        <div v-if="BlogDatas.length > 1" class="tabs">
            <div class="tab_title" :class="{ active: (index === BlogDatas.currentIndex) }"
                v-for="(title, index) in BlogDatas.titles" :key="index" @click="getChildByIndex(index)">
                <div>{{ title }}</div>
            </div>
        </div>
        <div v-if="BlogDatas?.currentBlog?.length" class="tab_cont">
            <div v-for="(child, idx) in BlogDatas?.currentBlog" :key="idx">
                <RouterLink :to="'/blog/' + child.path">
                    <h2> {{ child.title }}</h2>
                </RouterLink>
                <div>{{ child.desc }}</div>
                <div class="other">
                    <span>{{ child.created }} · <span class="readTime">{{ child.readTime }}</span></span>
                </div>
            </div>
        </div>
    </div>
</template> 

<style scoped lang="scss">
.blogs {
    opacity: 1;
    color: #fff;

    .tabs {
        display: flex;
        font-size: 0.24rem;
        font-weight: 500;

        .tab_title {
            margin-right: 0.1rem;
            cursor: pointer;
        }

        .active {
            text-decoration: underline;
        }

    }

    .tab_cont {
        margin-top: 0.1rem
    }
}
</style>