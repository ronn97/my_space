import { defineComponent, reactive } from 'vue';
import Calendar from '@/assets/img/Calendar.vue';

const Projects = reactive({
    pro: [
        {
            capName: '进行中的',
            capList: [
                {
                    icon: Calendar,
                    name: 'Chrome-Ads',
                    desc: '一个百度搜索过滤广告插件',
                    url: 'https://github.com/NemophilistWatermelon/chrome-ads'
                },
                {
                    icon: Calendar,
                    name: 'JSON2EXCEL',
                    desc: '一个百度搜索过滤广告插件',
                    url: 'https://github.com/NemophilistWatermelon/chrome-ads'
                }
            ]
        },
    ]
})


export default Projects