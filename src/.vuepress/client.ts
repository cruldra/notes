// .vuepress/client.ts
// @ts-ignore
import { defineClientConfig } from "vuepress/client";
import 'uno.css';
// import VueFullscreen from 'vue-fullscreen'
// import RedisVersionHistories from "../programming/Redis/理论篇/RedisVersionHistories.vue";
// @ts-ignore
import ImageRenderer from "./components/ImageRenderer.vue";
// @ts-ignore
import Todo from "./components/Todo.vue";
// @ts-ignore
import NaiveUiRoot from "./components/NaiveUiRoot.vue";
// @ts-ignore
import CommandBuilder from "./components/CommandBuilder.vue";
import  AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
// @ts-ignore
import { defineSandpackConfig } from "vuepress-plugin-md-enhance/client";
// import Test from "./components/Test.vue";
// import AudioPlayer from 'vue3-audio-player'
// import 'vue3-audio-player/dist/style.css'
// import dayjs from "dayjs";
export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        // alert(dayjs)
        // app.use(naive)
       app.component("ImageRenderer", ImageRenderer);
       app.component("Todo", Todo);
       // app.component("Test", Test);
       app.component("AudioPlayer", AudioPlayer);
       app.component("NaiveUiRoot", NaiveUiRoot);
       app.component("CommandBuilder", CommandBuilder);
       //  app.use(RedisVersionHistories);
    },
});
defineSandpackConfig({
    // 这里是 sandpack 配置
});
