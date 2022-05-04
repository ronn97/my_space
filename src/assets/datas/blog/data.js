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
                path: 'resume',
                title: 'Resume',
                desc: '一个MD关于My Resume',
                created: moment().format('YYYY-MM-DD'),
                readTime: '10min'
            })
        }
    ]
}

const Blogs = [
    tip1,
    tip2
]


export default Blogs