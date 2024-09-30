import{_ as i,o as s,c as a,e as n}from"./app-Bmelea3n.js";const e={},t=n(`<p>##　设置镜像</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 查看当前镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> registry</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置淘宝镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://registry.npm.taobao.org</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置官方镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> registry</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://registry.npmjs.org</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理"><span>设置代理</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 获取当前代理设置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https-proxy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 设置代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:7890</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https-proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http://localhost:7890</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">## 删除代理设置</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> delete</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https-proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果删除代理配置不起作用的话,有可能是全局配置文件中也设置了,找到删掉即可,具体位置在:<a href="https://poe.com/s/nPlrL2HVkwp4YexO1CRe" target="_blank" rel="noopener noreferrer">pnpm全局配置文件位置</a></p></div>`,5),l=[t];function p(h,r){return s(),a("div",null,l)}const d=i(e,[["render",p],["__file","pnpm.html.vue"]]),c=JSON.parse('{"path":"/Tools/pnpm.html","title":"pnpm","lang":"zh-CN","frontmatter":{"title":"pnpm","comment":false,"editLink":false,"prev":false,"next":false,"description":"## 设置镜像 设置代理 提示 如果删除代理配置不起作用的话,有可能是全局配置文件中也设置了,找到删掉即可,具体位置在:pnpm全局配置文件位置","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Tools/pnpm.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"pnpm"}],["meta",{"property":"og:description","content":"## 设置镜像 设置代理 提示 如果删除代理配置不起作用的话,有可能是全局配置文件中也设置了,找到删掉即可,具体位置在:pnpm全局配置文件位置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"pnpm\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"设置代理","slug":"设置代理","link":"#设置代理","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":0.52,"words":157},"filePathRelative":"Tools/pnpm.md","localizedDate":"2024年7月3日","autoDesc":true}');export{d as comp,c as data};
