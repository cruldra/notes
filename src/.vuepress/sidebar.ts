import {sidebar} from "vuepress-theme-hope";

export default sidebar({
    "/programming/frontend/React/": [
        {
            text: "React",
            collapsible: true,
            children: "structure",
        },
    ],
    "/programming/frontend/Typescript/": [
        {
            text: "Typescript",
            collapsible: true,
            children: "structure",
        },
    ],
    "/programming/frontend/Javascript/": [
        {
            text: "Javascript",
            collapsible: true,
            children: "structure",
        },
    ],
    "/programming/frontend/Zustand/": [
        {
            text: "Zustand",
            collapsible: true,
            children: "structure",
        },
    ],
    "/programming/frontend/Vite/": [
        {
            text: "Vite",
            collapsible: true,
            children: "structure",
        },
    ],
    "/programming/frontend/Routing/": [
        {
            text: "路由系统",
            collapsible: true,
            children: "structure",
        },
    ],
    "/projects/ailoveworld/": [
        {
            text: "机器人",
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

    "/tools/": [
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
    "/projects/": [
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
