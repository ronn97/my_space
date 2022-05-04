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
                    desc: '一个将JSON数据转换为EXCEL文件的插件（带图片）',
                    url: 'https://json2excel.vercel.app/'
                }
            ]
        },
        {
            capName: '合作完善的',
            capList: [
                {
                    icon: Calendar,
                    name: '筑星云',
                    desc: '公司官网项目',
                    url: 'https://zhuxingyun.com/'
                }
            ]
        },
    ]
})


export default Projects