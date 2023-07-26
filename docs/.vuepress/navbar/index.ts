import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    // "/projects",
    {
        text: "编程",
        icon: "lightbulb",
        prefix: "/programming",
        children: [
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
        ],
    },

    {
      text: "项目",
      icon: "lightbulb",
       prefix: "/projects",
      children: [
        {
          text: "二手车",
          icon: "lightbulb",
            link: "/二手车/简介/",
          // children: [ ],
        },
      ],
    },
    {
        text: "工具",
        prefix: "/tools" ,
        link:'/tools/'
    },

    // "/demo/",
    /*{
      text: "指南",
      icon: "lightbulb",
      prefix: "/zh/guide/",
      children: [
        {
          text: "Bar",
          icon: "lightbulb",
          prefix: "bar/",
          children: ["baz", { text: "...", icon: "ellipsis", link: "" }],
        },
        {
          text: "Foo",
          icon: "lightbulb",
          prefix: "foo/",
          children: ["ray", { text: "...", icon: "ellipsis", link: "" }],
        },
      ],
    },
    {
      text: "V2 文档",
      icon: "book",
      link: "https://theme-hope.vuejs.press/zh/",
    },*/
]);
