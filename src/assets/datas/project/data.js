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
        {
            capName: '个人简历',
            capList: [
                {
                    icon: Calendar,
                    name: '我的简历',
                    desc: '一个Html关于我的简历',
                    url: 'https://htmlpreview.github.io/?https://raw.githubusercontent.com/ronn97/my_space/master/src/assets/datas/project/resume.html'
                }
            ]
        },
    ]
})


export default Projects