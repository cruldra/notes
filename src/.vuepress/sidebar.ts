import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/Programming/Frontend/React/": [
        {
            text: "React",
            collapsible: true,
            children: "structure",
        },
    ],
    "/Programming/Frontend/Typescript/": [
        {
            text: "Typescript",
            collapsible: true,
            children: "structure",
        },
    ],
    "/Programming/Frontend/Javascript/": [
        {
            text: "Javascript",
            collapsible: true,
            children: "structure",
        },
    ],
    "/Programming/Frontend/Zustand/": [
        {
            text: "Zustand",
            collapsible: true,
            children: "structure",
        },
    ],
    "/Programming/Frontend/Vite/": [
        {
            text: "Vite",
            collapsible: true,
            children: "structure",
        },
    ],
    "/Programming/Frontend/Routing/": [
        {
            text: "路由系统",
            collapsible: true,
            children: "structure",
        },
    ],
    "/Projects/ailoveworld/": [
        {
            text: "机器人",
            collapsible: true,
            children: "structure",
        },
    ],
    "/Solutions/Payment/": [
        {
            text: "支付解决方案",
            collapsible: true,
            children: "structure",
        },
    ],
    "/JVM/": [
        {
            text: "JVM生态",
            icon: "laptop-code",
            collapsible: true,
            // children: [
            //   "ershouche/",
            // ],
            children: "structure",
        },

    ],

    "/Tools/": [
        {
            text: "工具",
            icon: "laptop-code",
            collapsible: true,
            // children: [
            //   "ershouche/",
            // ],
            children: "structure",
        },

    ],
    "/Projects/": [
        {
            text: "项目",
            icon: "laptop-code",
            collapsible: true,
            // children: [
            //   "ershouche/",
            // ],
            children: "structure",
        },

    ],
});
