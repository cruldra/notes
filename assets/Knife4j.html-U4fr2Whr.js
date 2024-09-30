import{_ as h,r as k,o as p,c as r,d,w as a,e as l,b as s,a as i}from"./app-Bmelea3n.js";const g={},o=l('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><code>Spring Boot3</code>之后使用<a href="https://springdoc.org/" target="_blank" rel="noopener noreferrer"><code>Spring Doc</code></a>来生成<a href="https://swagger.io/specification/" target="_blank" rel="noopener noreferrer">Open API3</a> 规范的文档,而<a href="https://doc.xiaominfo.com/" target="_blank" rel="noopener noreferrer"><code>Knife4j</code></a>是基于<code>Spring Doc</code>的一个增强UI实现,可以让我们更方便的查看和测试接口.</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>关于<code>springfox</code>、<code>springdoc</code>、<code>openapi</code>、<code>swagger</code>、<code>knife4j</code>这几个组件之间的关系如下:</p></div><ol><li><strong>Swagger</strong> - 一套完整的规范及框架,用于生成、描述、调用和可视化<code>RESTful</code>风格的<code>Web</code>服务 <ul><li><code>Swagger Ui</code> - 一个<code>HTML</code>5的<code>API</code>文档渲染器,可以动态地根据<code>Swagger</code>规范生成<code>API</code>文档</li></ul></li><li><strong>OpenAPI</strong> - Swagger中关于文档生成的那一套规范的继承者,目前已经发展到了第三版,也就是<code>OpenAPI3</code></li><li><strong>Springfox</strong> - 用于和<code>Spring MVC</code>集成,生成符合<code>Swagger</code>规范的<code>API</code>文档</li><li><strong>Springdoc</strong> - <code>Springfox</code>的替代品,支持<code>OpenAPI3</code>规范</li><li><strong>Knife4j</strong> - 基于<code>Springdoc</code>的增强UI实现,提供更强大的<code>UI</code>界面</li></ol><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>',5),c=i("div",{class:"language-xml line-numbers-mode","data-highlighter":"shiki","data-ext":"xml","data-title":"xml",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"dependency"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"groupId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">com.github.xiaoymin</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"groupId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"artifactId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">knife4j-openapi3-jakarta-spring-boot-starter</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"artifactId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">4.4.0</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"dependency"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),B=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"implementation("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},'"com.github.xiaoymin:knife4j-openapi3-jakarta-spring-boot-starter:4.4.0"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},")")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1),y=l(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h3><p>在<code>application.yml</code>中添加如下配置:</p><details class="hint-container details"><summary>基础配置</summary><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># springdoc-openapi项目配置</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">springdoc</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  swagger-ui</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/swagger-ui.html</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    tags-sorter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">alpha</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    operations-sorter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">alpha</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  api-docs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">/v3/api-docs</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  group-configs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">group</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;default&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      paths-to-match</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;/**&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">      packages-to-scan</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">com.xiaominfo.knife4j.demo.web</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># knife4j的增强配置，不需要增强可以不配</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">knife4j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  enable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  setting</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    language</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">zh_cn</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="修改站点标题描述等" tabindex="-1"><a class="header-anchor" href="#修改站点标题描述等"><span>修改站点标题描述等</span></a></h3><details class="hint-container details"><summary>修改站点标题描述等</summary><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Configuration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> SwaggerConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     * 根据@Tag 上的排序，写入x-order</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     * </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">@return</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> the global open api customizer</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> orderGlobalOpenApiCustomizer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">GlobalOpenApiCustomizer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> GlobalOpenApiCustomizer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { openApi: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">OpenAPI</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> -&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (openApi.tags </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                openApi.tags</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">forEach</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Consumer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Tag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; { tag: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Tag</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> -&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">                        val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> map: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">MutableMap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">                            HashMap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                        map[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;x-order&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> RandomUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">randomInt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                        tag.extensions </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> map</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (openApi.paths </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                openApi.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">addExtension</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;x-test123&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;333&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                openApi.paths.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">addExtension</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;x-abb&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, RandomUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">randomInt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> customOpenAPI</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">OpenAPI</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> OpenAPI</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">                Info</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;XXX用户系统API&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Knife4j集成springdoc-openapi示例&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">termsOfService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;http://doc.xiaominfo.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">license</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">                        License</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Apache 2.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                            .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;http://doc.xiaominfo.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">                    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ol><li><a href="https://juejin.cn/post/7080328458206707720" target="_blank" rel="noopener noreferrer">神器 SpringDoc 横空出世！最适合 SpringBoot 的API文档工具来了！ - 掘金</a></li><li><a href="https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-spring-boot3-demo" target="_blank" rel="noopener noreferrer">swagger-bootstrap-ui-demo: knife4j 以及swagger-bootstrap-ui 集成框架示例项目 - Gitee.com</a></li></ol>`,8);function F(A,m){const t=k("CodeTabs");return p(),r("div",null,[o,d(t,{id:"48",data:[{id:"maven"},{id:"gradle-kts"}],active:0,"tab-id":"安装springboot-security"},{title0:a(({value:n,isActive:e})=>[s("maven")]),title1:a(({value:n,isActive:e})=>[s("gradle-kts")]),tab0:a(({value:n,isActive:e})=>[c]),tab1:a(({value:n,isActive:e})=>[B]),_:1}),y])}const E=h(g,[["render",F],["__file","Knife4j.html.vue"]]),v=JSON.parse('{"path":"/Programming/SpringBoot/Knife4j.html","title":"Knife4j","lang":"zh-CN","frontmatter":{"title":"Knife4j","comment":false,"editLink":false,"prev":false,"next":false,"description":"简介 Spring Boot3之后使用Spring Doc来生成Open API3 规范的文档,而Knife4j是基于Spring Doc的一个增强UI实现,可以让我们更方便的查看和测试接口. 提示 关于springfox、springdoc、openapi、swagger、knife4j这几个组件之间的关系如下: Swagger - 一套完整的规范及...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/SpringBoot/Knife4j.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"Knife4j"}],["meta",{"property":"og:description","content":"简介 Spring Boot3之后使用Spring Doc来生成Open API3 规范的文档,而Knife4j是基于Spring Doc的一个增强UI实现,可以让我们更方便的查看和测试接口. 提示 关于springfox、springdoc、openapi、swagger、knife4j这几个组件之间的关系如下: Swagger - 一套完整的规范及..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Knife4j\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[]},{"level":3,"title":"修改站点标题描述等","slug":"修改站点标题描述等","link":"#修改站点标题描述等","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"Programming/SpringBoot/Knife4j.md","localizedDate":"2024年7月3日","autoDesc":true}');export{E as comp,v as data};
