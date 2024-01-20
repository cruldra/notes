import {navbar} from "vuepress-theme-hope";

export default navbar([
    "/",
    // "/projects",
    {
        text: "JVM生态",
        icon: "lightbulb",
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
    {
        text: "编程",
        icon: "lightbulb",
        prefix: "/programming",
        link: '/programming/',
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
    {
        text: "工具",
        prefix: "/tools",
        link: '/tools/'
    },

    // "/demo/",
    {
      text: "项目",
      icon: "lightbulb",
      prefix: "/projects",
        link: '/projects/',
     /* children: [
        {
          text: "安徽臻信通",
          icon: "lightbulb",
            link: '/projects/安徽臻信通/',
        }
      ],*/
    },
    {
        text: "术语",
        icon: "lightbulb",
        prefix: "/terminology",
        link: '/terminology/',
        /* children: [
           {
             text: "安徽臻信通",
             icon: "lightbulb",
               link: '/projects/安徽臻信通/',
           }
         ],*/
    },
    /* {
       text: "V2 文档",
       icon: "book",
       link: "https://theme-hope.vuejs.press/zh/",
     },*/
]);
