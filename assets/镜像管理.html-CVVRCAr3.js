import{_ as i,o as e,c as s,e as a}from"./app-Bmelea3n.js";const t={},n=a(`<h2 id="构建" tabindex="-1"><a class="header-anchor" href="#构建"><span>构建</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 从Dockerfile构建镜像</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ./</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 当前目录下存在文件Dockerfile</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;username/image_name:version&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ./</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #指定镜像名称和标记</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推送" tabindex="-1"><a class="header-anchor" href="#推送"><span>推送</span></a></h2><h3 id="推送到官方镜像源-dockerhub" tabindex="-1"><a class="header-anchor" href="#推送到官方镜像源-dockerhub"><span>推送到官方镜像源(<a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">dockerhub</a>)</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> login</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 登录,也可以在docker for desktop上面登录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> username/image_name:version</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 推送</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h2><h3 id="删除所有镜像" tabindex="-1"><a class="header-anchor" href="#删除所有镜像"><span>删除所有镜像</span></a></h3><p><code>先确保已经删除所有容器</code></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rmi</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> images</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -q</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,9),l=[n];function h(r,d){return e(),s("div",null,l)}const o=i(t,[["render",h],["__file","镜像管理.html.vue"]]),p=JSON.parse('{"path":"/Tools/Docker/%E9%95%9C%E5%83%8F%E7%AE%A1%E7%90%86.html","title":"镜像管理","lang":"zh-CN","frontmatter":{"title":"镜像管理","comment":false,"editLink":false,"prev":false,"next":false,"order":1,"description":"构建 推送 推送到官方镜像源(dockerhub) 删除 删除所有镜像 先确保已经删除所有容器","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Tools/Docker/%E9%95%9C%E5%83%8F%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"镜像管理"}],["meta",{"property":"og:description","content":"构建 推送 推送到官方镜像源(dockerhub) 删除 删除所有镜像 先确保已经删除所有容器"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"镜像管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"构建","slug":"构建","link":"#构建","children":[]},{"level":2,"title":"推送","slug":"推送","link":"#推送","children":[{"level":3,"title":"推送到官方镜像源(dockerhub)","slug":"推送到官方镜像源-dockerhub","link":"#推送到官方镜像源-dockerhub","children":[]}]},{"level":2,"title":"删除","slug":"删除","link":"#删除","children":[{"level":3,"title":"删除所有镜像","slug":"删除所有镜像","link":"#删除所有镜像","children":[]}]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":0.37,"words":112},"filePathRelative":"Tools/Docker/镜像管理.md","localizedDate":"2024年7月3日","autoDesc":true}');export{o as comp,p as data};
