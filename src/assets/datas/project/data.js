import { defineComponent, reactive } from 'vue';
import Calendar from '@/assets/img/Calendar.vue';

const Projects = reactive({
    pro: [
        {
            capName: '独立完成的',
            capList: [
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
                    name: 'XBIM',
                    desc: '公司合作支持的一个关于展馆导航的项目',
                    url: 'https://px-bim.com/'
                },
                {
                    icon: Calendar,
                    name: '筑星云',
                    desc: '公司官网项目',
                    url: 'https://zhuxingyun.com/'
                },
                {
                    icon: Calendar,
                    name: '筑星云BIM 开放平台',
                    desc: '公司项目平台',
                    url: 'https://proto.zhuxingyun.com/'
                },
            ]
        },
        {
            capName: '个人简历',
            capList: [
                {
                    icon: Calendar,
                    name: '我的简历',
                    desc: '一个PDF关于我的简历',
                    url: 'https://view.xdocin.com/view?src=https://raw.githubusercontent.com/ronn97/my_space/master/src/assets/datas/project/assets/other/resume.pdf'
                }
            ]
        },
    ]
})


export default Projects