import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    // "/projects",
    {
      text: "项目",
      icon: "lightbulb",
       prefix: "/projects",
      children: [
        {
          text: "二手车",
          icon: "lightbulb",
            link: "/ershouche/",
          // children: [ ],
        },
      ],
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
