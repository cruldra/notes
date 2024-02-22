import { defineClientConfig } from "vuepress/client";
import 'uno.css';
import CommandBuilder from "./components/CommandBuilder.vue";
import  AudioPlayer from 'vue3-audio-player'
import 'vue3-audio-player/dist/style.css'
import { defineSandpackConfig } from "vuepress-plugin-md-enhance/client";
// import Test from "./components/Test.vue";
// import AudioPlayer from 'vue3-audio-player'
// import 'vue3-audio-player/dist/style.css'
// import dayjs from "dayjs";
export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        // alert(dayjs)
        // app.use(naive)
       // app.component("Test", Test);
       app.component("AudioPlayer", AudioPlayer);
       app.component("CommandBuilder", CommandBuilder);
       //  app.use(RedisVersionHistories);
    },
});
defineSandpackConfig({
    // 这里是 sandpack 配置
});
