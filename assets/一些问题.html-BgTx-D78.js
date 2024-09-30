import{_ as i,o as s,c as e,e as a}from"./app-Bmelea3n.js";const n="/assets/2023-12-15_23-14-CEZovKcq.png",t={},l=a(`<h2 id="引入vue3-audio-player组件报错的问题" tabindex="-1"><a class="header-anchor" href="#引入vue3-audio-player组件报错的问题"><span>引入<a href="https://github.com/RealCoolSnow/vue3-audio-player?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">vue3-audio-player</a>组件报错的问题</span></a></h2><p>首先使用下面的代码引用组件:</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//.vuepress/client.ts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  AudioPlayer</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vue3-audio-player&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;vue3-audio-player/dist/style.css&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineClientConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    enhance</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">router</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">siteData</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        app</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;AudioPlayer&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">AudioPlayer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后<code>pnpm run docs:build</code>报错:</p><figure><img src="`+n+`" alt="2023-12-15_23-14.png" tabindex="0" loading="lazy"><figcaption>2023-12-15_23-14.png</figcaption></figure><p>原因是<code>vue3-audio-player</code>这个组件中有不兼容<code>ssr</code>的代码,需要在<code>vite</code>配置中将其排除</p><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//.vuepress/config.ts</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> defineUserConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    bundler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">viteBundler</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        viteOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            ssr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">                // SSR 相关配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">                noExternal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;vue3-audio-player&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="几个问题" tabindex="-1"><a class="header-anchor" href="#几个问题"><span>几个问题</span></a></h2><h3 id="为什么dev环境下正常" tabindex="-1"><a class="header-anchor" href="#为什么dev环境下正常"><span>为什么<code>dev</code>环境下正常?</span></a></h3><p>因为<code>dev</code>模式使用的<code>csr</code>,构建时有使用到<code>ssr</code>,但是这个库里面有不兼容<code>ssr</code>的代码,所以构建时报错</p><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://poe.com/s/pLw7k4GfNuehVWe7OUWo" target="_blank" rel="noopener noreferrer">解决思路</a></li></ul>`,12),p=[l];function h(r,d){return s(),e("div",null,p)}const o=i(t,[["render",h],["__file","一些问题.html.vue"]]),c=JSON.parse('{"path":"/Tools/Vuepress2/%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98.html","title":"一些问题","lang":"zh-CN","frontmatter":{"title":"一些问题","comment":false,"editLink":false,"prev":false,"next":false,"order":1,"date":"2023-12-15T00:00:00.000Z","category":["前端"],"tag":["vuepress2"],"description":"引入vue3-audio-player组件报错的问题 首先使用下面的代码引用组件: 然后pnpm run docs:build报错: 2023-12-15_23-14.png2023-12-15_23-14.png 原因是vue3-audio-player这个组件中有不兼容ssr的代码,需要在vite配置中将其排除 几个问题 为什么dev环境下正常? ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Tools/Vuepress2/%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"一些问题"}],["meta",{"property":"og:description","content":"引入vue3-audio-player组件报错的问题 首先使用下面的代码引用组件: 然后pnpm run docs:build报错: 2023-12-15_23-14.png2023-12-15_23-14.png 原因是vue3-audio-player这个组件中有不兼容ssr的代码,需要在vite配置中将其排除 几个问题 为什么dev环境下正常? ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:tag","content":"vuepress2"}],["meta",{"property":"article:published_time","content":"2023-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一些问题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"引入vue3-audio-player组件报错的问题","slug":"引入vue3-audio-player组件报错的问题","link":"#引入vue3-audio-player组件报错的问题","children":[]},{"level":2,"title":"几个问题","slug":"几个问题","link":"#几个问题","children":[{"level":3,"title":"为什么dev环境下正常?","slug":"为什么dev环境下正常","link":"#为什么dev环境下正常","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"Tools/Vuepress2/一些问题.md","localizedDate":"2023年12月15日","autoDesc":true}');export{o as comp,c as data};
