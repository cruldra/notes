// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import 'uno.css';
// import VueFullscreen from 'vue-fullscreen'
// import RedisVersionHistories from "../programming/Redis/理论篇/RedisVersionHistories.vue";
// import ImageRenderer from "./components/ImageRenderer.vue";
export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        // app.use(naive)
       //app.component("ImageRenderer", ImageRenderer);
       //  app.use(RedisVersionHistories);
    },
});
