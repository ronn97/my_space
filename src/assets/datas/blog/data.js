// import { defineComponent, reactive } from 'vue';
// import Calendar from '@/assets/img/Calendar.vue';

// const Blogs = reactive({
//     pro: [
//         {
//             capName: '进行中的',
//             capList: [
//                 {
//                     icon: Calendar,
//                     name: 'Chrome-Ads',
//                     desc: '一个百度搜索过滤广告插件',
//                     url: 'https://github.com/NemophilistWatermelon/chrome-ads'
//                 },
//                 {
//                     icon: Calendar,
//                     name: 'JSON2EXCEL',
//                     desc: '一个百度搜索过滤广告插件',
//                     url: 'https://github.com/NemophilistWatermelon/chrome-ads'
//                 }
//             ]
//         },
//     ]
// })


// export default Blogs

/**
 *  WebSite: {
 *    SubTitle
 *  }
 * 
 */
import moment from 'moment';

const Template = function (o) {
    this.path = o.path
    this.title = o.title
    this.desc = o.desc
    this.created = o.created
    this.readTime = o.readTime
}

const tip1 = {
    title: "技术栈",
    children: [
        {
            ...new Template({
                path: 'start',
                title: '创建Vue3模版!',
                desc: '一个项目关于创建Vue-Vite-template',
                created: moment().format('YYYY-MM-DD'),
                readTime: '1min'
            })
        }
    ]
};

const tip2 = {
    title: "日记本",
    children: [
        {
            ...new Template({
                path: 'start',
                title: 'First Note!',
                desc: '一个项目关于Note',
                created: moment().format('YYYY-MM-DD'),
                readTime: '1min'
            })
        }
    ]
}

const Blogs = [
    tip1,
    tip2
]


export default Blogs