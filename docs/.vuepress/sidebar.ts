import { sidebar } from "vuepress-theme-hope";

export default sidebar({

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
