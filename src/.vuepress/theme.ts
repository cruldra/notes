import {hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import {MR_HOPE_AVATAR} from "./logo.js";

export default hopeTheme({
    hostname: "https://mister-hope.github.io",

    author: {
        name: "Cruldra",
        url: "https://mister-hope.com",
    },

    iconAssets: "fontawesome-with-brands",

    logo: "https://theme-hope-assets.vuejs.press/logo.svg",

    repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "src",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    footer: "默认页脚",
    displayFooter: true,

    // 博客相关
    blog: {
        description: "一个前端开发者",
        intro: "/intro.html",
        medias: {
            Baidu: "https://example.com",
            BiliBili: "https://example.com",
            Bitbucket: "https://example.com",
            Dingding: "https://example.com",
            Discord: "https://example.com",
            Dribbble: "https://example.com",
            Email: "mailto:info@example.com",
            Evernote: "https://example.com",
            Facebook: "https://example.com",
            Flipboard: "https://example.com",
            Gitee: "https://example.com",
            GitHub: "https://example.com",
            Gitlab: "https://example.com",
            Gmail: "mailto:info@example.com",
            Instagram: "https://example.com",
            Lark: "https://example.com",
            Lines: "https://example.com",
            Linkedin: "https://example.com",
            Pinterest: "https://example.com",
            Pocket: "https://example.com",
            QQ: "https://example.com",
            Qzone: "https://example.com",
            Reddit: "https://example.com",
            Rss: "https://example.com",
            Steam: "https://example.com",
            Twitter: "https://example.com",
            Wechat: "https://example.com",
            Weibo: "https://example.com",
            Whatsapp: "https://example.com",
            Youtube: "https://example.com",
            Zhihu: "https://example.com",
            MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
        },
    },

    // 加密配置
    encrypt: {
        config: {
            "/projects/机器人": ["123394"]
        },
    },

    // 多语言配置
    metaLocales: {
        editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 在这里配置主题提供的插件
    plugins: {
        components: {
            components: ['VidStack', "Badge", "VPCard"]
        },
        searchPro:true,
        blog: true,
        photoSwipe: true,
        // install @waline/client before enabling it
        // WARNING: This is a test server for demo only.
        // You should create and use your own comment service in production.
        // comment: {
        //   provider: "Waline",
        //   serverURL: "https://waline-comment.vuejs.press",
        // },

        // 此处开启了很多功能用于演示，你应仅保留用到的功能。
        mdEnhance: {
            mermaid: true,
            align: true,
            attrs: true,
            vuePlayground: true,
            // install chart.js before enabling it
            // chart: true,
            tasklist: true,
            codetabs: true,
            footnote: true,

            // insert component easily
            // component: true,

            demo: true,

            // install echarts before enabling it
            // echarts: true,

            figure: true,

            // install flowchart.ts before enabling it
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            imgLazyload: true,
            imgSize: true,
            include: true,

            // install katex before enabling it
            // katex: true,

            // install mathjax-full before enabling it
            // mathjax: true,

            mark: true,

            // install mermaid before enabling it
            // mermaid: true,

            playground: {
                presets: ["ts", "vue"],
            },

            // install reveal.js before enabling it
            // revealJs: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },

            stylize: [
                {
                    matcher: "Recommended",
                    replacer: ({tag}) => {
                        if (tag === "em")
                            return {
                                tag: "Badge",
                                attrs: {type: "tip"},
                                content: "Recommended",
                            };
                    },
                },
            ],
            sub: true,
            sup: true,
            tabs: true,
            vPre: true,

            // 在启用之前安装 chart.js
            // chart: true,

            // insert component easily

            // 在启用之前安装 echarts
            // echarts: true,

            // 在启用之前安装 flowchart.ts
            // flowchart: true,

            // gfm requires mathjax-full to provide tex support
            // gfm: true,

            // 在启用之前安装 katex
            // katex: true,

            // 在启用之前安装 mathjax-full
            // mathjax: true,
            // playground: {
            //   presets: ["ts", "vue"],
            // },

            // 在启用之前安装 reveal.js
            // revealJs: {
            //   plugins: ["highlight", "math", "search", "notes", "zoom"],
            // },

            // 在启用之前安装 @vue/repl
            // vuePlayground: true,

            // install sandpack-vue3 before enabling it
            // sandpack: true,
        },

        // uncomment these if you want a PWA
        // pwa: {
        //   favicon: "/favicon.ico",
        //   cacheHTML: true,
        //   cachePic: true,
        //   appendBase: true,
        //   apple: {
        //     icon: "/assets/icon/apple-icon-152.png",
        //     statusBarColor: "black",
        //   },
        //   msTile: {
        //     image: "/assets/icon/ms-icon-144.png",
        //     color: "#ffffff",
        //   },
        //   manifest: {
        //     icons: [
        //       {
        //         src: "/assets/icon/chrome-mask-512.png",
        //         sizes: "512x512",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-mask-192.png",
        //         sizes: "192x192",
        //         purpose: "maskable",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-512.png",
        //         sizes: "512x512",
        //         type: "image/png",
        //       },
        //       {
        //         src: "/assets/icon/chrome-192.png",
        //         sizes: "192x192",
        //         type: "image/png",
        //       },
        //     ],
        //     shortcuts: [
        //       {
        //         name: "Demo",
        //         short_name: "Demo",
        //         url: "/demo/",
        //         icons: [
        //           {
        //             src: "/assets/icon/guide-maskable.png",
        //             sizes: "192x192",
        //             purpose: "maskable",
        //             type: "image/png",
        //           },
        //         ],
        //       },
        //     ],
        //   },
        // },
    },
});
