import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "Java",
        prefix: "/JVM",
        link: '/JVM/',
    },
    {
        text: "Spring Boot",
        prefix: "/Programming/SpringBoot",
        children: [
            {
                text: "Security",
                link: "Security/简介"
            }
        ]
    },{
        text: "数据库",
        prefix: "/Programming/Database",
        children: [
            {
                text: "Mysql",
                link: "Mysql/简介"
            }
        ]
    },
    {
        text: "前端",
        prefix: "/Programming/Frontend",
        children: [
            {
                text: "编程语言",
                children: [{
                    text: "Typescript",
                    link: 'Typescript/简介'
                }, {
                    text: "Javascript",
                    link: 'Javascript/简介'
                }]
            },
            {
                text: "用户界面",
                children: [
                    {
                        text: "Css",
                        prefix: "Css",
                        link: 'Css/简介'
                    },
                    {
                        text: "React",
                        prefix: "React",
                        link: 'React/简介'
                    },
                    {
                        text: "Vue",
                        link: 'Vue/简介'
                    },
                ]
            },
            {
                text: "状态管理",
                children: [{
                    text: "Zustand",
                    link: 'Zustand/简介'
                }]
            },
            {
                text: "构建工具",
                children: [{
                    text: "Vite",
                    link: 'Vite/Vite'
                }]
            },
            {
                text: "路由系统",
                children: [{
                    text: "React Router Dom",
                    link: 'Routing/React Router Dom/简介'
                }]
            },
            {
                text: "http客户端",
                children: [{
                    text: "Axios",
                    link: 'Http-Client/Axios'
                }]
            }
        ],
    },
    {
        text: "解决方案",
        prefix: '/Solutions/',
        children: [

            {
                text: "支付",
                children: [{
                    text: "支付宝",
                    link: 'Payment/支付宝/简介'
                }, {
                    text: "微信",
                    link: 'Payment/微信/开通流程'
                }]
            }, {
                text: "Web流",
                link: 'WebStreams/简介'
            },
        ]
    },
    {
        text: "工具",
        prefix: '/Tools/',
        children: [
            {
                text: "链接预览",
                link: 'https://iframely.com/home'
            },
            {
                text: "录屏",
                link: 'https://gifcap.dev/'
            },
            {
                text: "虚拟化",
                link: 'Docker/简介'
            },
            {
                text: "版本控制",
                link: 'Git/简介'
            },
            {
                text: "Http服务器",
                link: 'Http Server/Caddy/简介'
            },
            {
                text: "网络",
                link: 'Network/SSH'
            },
            {
                text: "调试",
                link: 'Debug/DevTools/简介'
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
