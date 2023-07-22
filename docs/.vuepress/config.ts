import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

const base = <"/" | `/${string}/`>process.env["BASE"] || "/";

export default defineUserConfig({
  base,

  dest: "./dist",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "一星的臭弟弟",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  shouldPrefetch: false,
  plugins: [
  ],
});
