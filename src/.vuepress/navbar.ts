import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "Java",
        prefix: "/JVM",
        link: '/JVM/',
    },
    {
        text: "前端",
        prefix: "/Programming/Frontend",
        children: [
            {
                text: "编程语言",
                children: [{
                    text:"Typescript",
                    link:'Typescript/简介'
                },{
                    text:"Javascript",
                    link:'Javascript/简介'
                }]
            },
            {
                text: "用户界面",
                children:[
                    {
                        text: "Css",
                        prefix: "Css",
                        link:'Css/简介'
                    },
                    {
                        text: "React",
                        prefix: "React",
                        link:'React/简介'
                    },
                ]
            },
            {
                text: "状态管理",
                children: [{
                    text:"Zustand",
                    link:'Zustand/简介'
                }]
            },
            {
                text: "构建工具",
                children: [{
                    text:"Vite",
                    link:'Vite/Vite'
                }]
            },
            {
                text: "路由系统",
                children: [{
                    text:"React Router Dom",
                    link:'Routing/React Router Dom/简介'
                }]
            },
            {
                text: "http客户端",
                children: [{
                    text:"Axios",
                    link:'Http-Client/Axios'
                }]
            }
        ],
    },
    {
        text: "解决方案",
        prefix: '/Solutions/',
        children:[

            {
                text: "支付",
                children: [{
                    text:"支付宝",
                    link:'Payment/支付宝/简介'
                },{
                    text:"微信",
                    link:'Payment/微信/开通流程'
                }]
            }, {
                text: "Web流",
                link:'WebStreams/简介'
            },
        ]
    },
    {
        text: "工具",
        prefix: '/Tools/',
        children:[
            {
                text: "链接预览",
                children: [{
                    text:"Iframely",
                    link:'https://iframely.com/home'
                } ]
            }
        ]
    },
    {
        text: "项目",
        prefix: "/Projects",
         children: [
           {
             text: "机器人",
               link: 'ailoveworld/待办事项/其它',
           }
         ]
    },
]);
