import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/projects/": [
    // "",
    {
      text: "项目",
      icon: "laptop-code",
      // children: [
      //   "ershouche/",
      // ],
      children: "structure",
    },
   /* {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },

    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    "slides",*/
  ],


  "/programming/": [
    {
      text: "编程",
      icon: "laptop-code",
      collapsible:true,
      // children: [
      //   "ershouche/",
      // ],
      children: "structure",
    },

  ],


  "/tools/": [
    {
      text: "工具",
      icon: "laptop-code",
      collapsible:true,
      // children: [
      //   "ershouche/",
      // ],
      children: "structure",
    },

  ],
});
