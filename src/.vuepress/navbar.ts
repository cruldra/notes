import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "Java",
        prefix: "/JVM",
        link: '/JVM/',
    },
    {
        text: "Spring Boot",
        prefix: "/Programming/SpringBoot/",
        children: [
            {
                text: "Data JPA",
                link: "Data/JPA/简介"
            },
            {
                text: "Security",
                link: "Security/简介"
            }
        ]
    },
    {
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
                    }, {
                        text: "Antd",
                        link: 'Antd/简介'
                    },
                ]
            },
            {
                text: "状态管理",
                link: 'Zustand/简介'
            },
            {
                text: "路由系统",
                link: 'Routing/React Router Dom/简介'
            },
            {
                text: "HTTP客户端",
                link: 'Http-Client/Axios'
            },
            {
                text: "开发、构建和发布",
                link: 'DevBuildRelease/SemanticRelease'
            }
        ],
    },
    {
        text: "解决方案",
        prefix: '/Solutions/',
        children: [
            {
                text: "支付",
                link: 'Payment/简介'
            }, {
                text: "CDN",
                link: 'CDN/简介'
            }, {
                text: "对象存储",
                link: 'OSS/简介'
            }, {
                text: "短信",
                link: 'SMS/简介'
            }, {
                text: "异常处理",
                link: 'Exception-Handle/简介'
            },
        ]
    },
    {
        text: "工具",
        prefix: '/Tools/',
        children: [
            {
                text: "所有",
                link: '全角转半角'
            },
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
            },
            {
                text: "项目管理",
                link: 'ProjectManage/JIRA'
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
