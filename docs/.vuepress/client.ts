// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import 'uno.css';

// import VueFullscreen from 'vue-fullscreen'
export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {

       // app.component("Full", Full);
        // app.use(VueFullscreen);
    },
});
