import{_ as i,o as s,c as a,e as n}from"./app-Bmelea3n.js";const e={},t=n(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><code>Kotlin</code>通过语法糖支持将函数作为顶级成员,比如变量、方法参数等</p><h2 id="函数变量" tabindex="-1"><a class="header-anchor" href="#函数变量"><span>函数变量</span></a></h2><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> callback: (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">AbstractPersistable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;*&gt;) -&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Unit</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { it, entity </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    it.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">takeIf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        it::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.java.isPersistEntity</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        ?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { it </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> AbstractPersistable</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;*&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        ?.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { persistence </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            persistence::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.java.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">allManyToOneFields</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { manyToOneField </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                manyToOneField.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> entityDescription.entityClass</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                ReflectUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setFieldValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(persistence, it, entity)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="函数参数" tabindex="-1"><a class="header-anchor" href="#函数参数"><span>函数参数</span></a></h2><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> printer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(callback: (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ) -&gt; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Unit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    callback</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//使用控制台打印</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">printer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(it) }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//使用日志打印</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">printer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(it) }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),l=[t];function h(p,k){return s(),a("div",null,l)}const d=i(e,[["render",h],["__file","函数作为顶级成员.html.vue"]]),c=JSON.parse('{"path":"/JVM/Kotlin/%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E9%A1%B6%E7%BA%A7%E6%88%90%E5%91%98.html","title":"函数作为顶级成员","lang":"zh-CN","frontmatter":{"title":"函数作为顶级成员","comment":false,"editLink":false,"prev":false,"next":false,"order":1,"description":"简介 Kotlin通过语法糖支持将函数作为顶级成员,比如变量、方法参数等 函数变量 函数参数","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/JVM/Kotlin/%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E9%A1%B6%E7%BA%A7%E6%88%90%E5%91%98.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"函数作为顶级成员"}],["meta",{"property":"og:description","content":"简介 Kotlin通过语法糖支持将函数作为顶级成员,比如变量、方法参数等 函数变量 函数参数"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"函数作为顶级成员\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"函数变量","slug":"函数变量","link":"#函数变量","children":[]},{"level":2,"title":"函数参数","slug":"函数参数","link":"#函数参数","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":0.38,"words":113},"filePathRelative":"JVM/Kotlin/函数作为顶级成员.md","localizedDate":"2024年7月3日","autoDesc":true}');export{d as comp,c as data};
