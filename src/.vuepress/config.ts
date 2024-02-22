import {defineUserConfig} from "vuepress";
import {viteBundler} from '@vuepress/bundler-vite'
import theme from "./theme.js";
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite';
import AutoImport from "unplugin-auto-import/vite";
// import {searchProPlugin} from "vuepress-plugin-search-pro";
import {NaiveUiResolver ,AntDesignVueResolver } from "unplugin-vue-components/resolvers";
// import {cut} from "nodejs-jieba";
const base = <"/" | `/${string}/`>process.env["BASE"] || "/";
export default defineUserConfig({
    base,
    dest: "dist",
    lang: "zh-CN",
    title: "一星的臭弟弟",
    description: "vuepress-theme-hope 的文档演示",
    port:8082,
    bundler: viteBundler({
        viteOptions: {
            // define: {
            //     'VITE_APP_ENV': process.env.VITE_APP_ENV,
            // },
            ssr: {
                // SSR 相关配置
                noExternal: ['vue3-audio-player', 'naive-ui', 'ant-design-vue'],
            },
            // resolve: {
            //     mainFields: ['module', 'main'],
            // },
            // optimizeDeps: {
            //     // include: ['vue3-audio-player']
            //     entries: ['vue3-audio-player'],
            //     force: true
            // },
            plugins: [UnoCSS(),
                AutoImport({
                    imports: ['vue'],
                    dts: 'src/typings/auto-imports.d.ts',
                    vueTemplate: true,
                }),
                Components({
                    dts: 'src/typings/components.d.ts',
                    resolvers: [
                        NaiveUiResolver(),
                        //AntDesignVueResolver()
                    ]
                }),
            ],
            optimizeDeps: {
                include: ['mermaid','sandpack-vue3' ]
            }
        },
        vuePluginOptions: {},
    }),
    // alias: {
    //     "@MyComponent": path.resolve(__dirname, "components/Test.vue"),
    // },
    theme,
    plugins: [

        // searchProPlugin({
        //     // 配置选项
        //
        //     // 索引全部内容
        //     indexContent: true,
        //
        //     // indexOptions: {
        //     //     // 使用 nodejs-jieba 进行分词
        //     //     tokenize: (text, fieldName) =>
        //     //         fieldName === "id" ? [text] : cut(text, true),
        //     // },
        //     // 为分类和标签添加索引
        //     customFields: [
        //         {
        //             // @ts-ignore
        //             getter: (page) => page.frontmatter.category,
        //             formatter: "分类：$content",
        //         },
        //         {
        //             // @ts-ignore
        //             getter: (page) => page.frontmatter.tag,
        //             formatter: "标签：$content",
        //         },
        //     ],
        // }),

    ],
    // Enable it with pwa
    // shouldPrefetch: false,
});
