// .vuepress/client.ts
import { defineClientConfig } from "vuepress/client";
import 'uno.css';
// import VueFullscreen from 'vue-fullscreen'
// import RedisVersionHistories from "../programming/Redis/理论篇/RedisVersionHistories.vue";
import ImageRenderer from "./components/ImageRenderer.vue";
import Todo from "./components/Todo.vue";
import  AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
// import Test from "./components/Test.vue";
// import AudioPlayer from 'vue3-audio-player'
// import 'vue3-audio-player/dist/style.css'
export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        // app.use(naive)
       app.component("ImageRenderer", ImageRenderer);
       app.component("Todo", Todo);
       // app.component("Test", Test);
       app.component("AudioPlayer", AudioPlayer);
       //  app.use(RedisVersionHistories);
    },
});
