import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/前端/状态管理/": [
    {
      text: "状态管理",
      icon: "laptop-code",
      collapsible:true,
      children: "structure",
    },

  ],
  "/JVM/": [
    {
      text: "JVM生态",
      icon: "laptop-code",
      collapsible:true,
      // children: [
      //   "ershouche/",
      // ],
      children: "structure",
    },

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
  "/projects/": [
    {
      text: "项目",
      icon: "laptop-code",
      collapsible:true,
      // children: [
      //   "ershouche/",
      // ],
      children: "structure",
    },

  ],  "/terminology/": [
    {
      text: "术语",
      icon: "laptop-code",
      collapsible:true,
      // children: [
      //   "ershouche/",
      // ],
      children: "structure",
    },

  ],
});
