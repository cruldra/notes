import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "Java",
        prefix: "/JVM",
        link: '/JVM/',
    },
    {
        text: "Python",
        link: "/Programming/Python/简介"
    },
    {
        text: "Spring Boot",
        prefix: "/Programming/SpringBoot/",
        children: [
            {
                text: "Data JPA",
                link: "Data/JPA/简介"
            }, {
                text: "Data Redis",
                link: "Data/Redis/简介"
            },
            {
                text: "Security",
                link: "Security/简介"
            },
            {
                text: "Web MVC",
                link: "WebMvc/简介"
            },
            {
                text: "Bean Mapper",
                link: "BeanMapper/简介"
            },
            {
                text: "任务调度",
                link: "Cron/简介"
            },
            {
                text: "监控",
                link: "Monitor/简介"
            },
            {
                text: "日志",
                link: "Logging/简介"
            },
            {
                text: "Aop",
                link: "Aop/简介"
            }
        ]
    },
    {
        text: "数据库",
        prefix: "/Databases",
        children: [
            {
                text: "Mysql",
                link: "Mysql/简介"
            },
            {
                text: "Redis",
                link: "Redis/简介"
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
                    }, {
                        text: "Postcss",
                        prefix: "Postcss",
                        link: 'Postcss/简介'
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
                    {
                        text: "Nextjs",
                        link: 'Nextjs/简介'
                    }
                ]
            },
            {
                text: "React常用库",
                link: 'ReactLibs/Antd/简介'
            },
            {
                text: "开发、构建和发布",
                link: 'DevBuildRelease/SemanticRelease'
            },
        ],
    },
    {
        text: "最佳实践",
        prefix: '/Best Practices/',
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
            }, {
                text: "标准化",
                link: 'Standardization/简介'
            }, {
                text: "身份认证",
                link: 'Authentication/简介'
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
            },
            {
                text: "设计",
                link: 'Design/图片'
            },
            {
                text: "持续集成和交付",
                link: 'CI_CD/简介'
            },
            {
                text: "AI",
                link: 'Ai/简介'
            },
            {
                text: "Stable Diffusion Web UI",
                link: 'Ai/sdwebui/简介'
            },
            {
                text: "AVD",
                link: 'Avd/简介'
            }
        ]
    },
    {
        text: "项目",
        prefix: "/Projects",
        children: [
            {
                text: "机器人",
                link: 'ailoveworld/简介',
            }
        ]
    },
]);
