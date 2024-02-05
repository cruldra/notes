import {navbar} from "vuepress-theme-hope";

export default navbar([
    {
        text: "Java",
        prefix: "/JVM",
        link: '/JVM/',
        /*children: [
            {
                text: "Mysql",
                link: "/mysql/安装/",
                // children: [ ],
            }, {
                text: "Docker",
                link: "/docker/安装/",
                // children: [ ],
            },{
                text: "Github",
                link: "/github/",
                // children: [ ],
            },{
                text: "Ubuntu",
                link: "/ubuntu/",
                // children: [ ],
            },
        ],*/
    },
    /*{
        text: "编程",
        icon: "lightbulb",
        prefix: "/programming",
        link: '/programming/',
        /!*children: [
            {
                text: "Mysql",
                link: "/mysql/安装/",
                // children: [ ],
            }, {
                text: "Docker",
                link: "/docker/安装/",
                // children: [ ],
            },{
                text: "Github",
                link: "/github/",
                // children: [ ],
            },{
                text: "Ubuntu",
                link: "/ubuntu/",
                // children: [ ],
            },
        ],*!/
    },*/
    {
        text: "前端",
        prefix: "/programming/frontend",
        children: [
            {
                text: "编程语言",
                children: [{
                    text:"Typescript",
                    link:'Typescript/简介'
                }]
            },
            {
                text: "用户界面",
                children:[
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
            }
        ],
    },
    {
        text: "工具",
        prefix: "/tools",
        link: '/tools/'
    },

    // "/demo/",
    {
        text: "项目",
        prefix: "/projects",
         children: [
           {
             text: "机器人",
               link: '/projects/机器人/待办事项/其它',
           }
         ]
    },
    /* {
         text: "术语",
         icon: "lightbulb",
         prefix: "/terminology",
         link: '/terminology/',
         /!* children: [
            {
              text: "安徽臻信通",
              icon: "lightbulb",
                link: '/projects/安徽臻信通/',
            }
          ],*!/
     },*/
    /* {
       text: "V2 文档",
       icon: "book",
       link: "https://theme-hope.vuejs.press/zh/",
     },*/
]);
