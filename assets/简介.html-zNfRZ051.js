import{_ as n,r as e,o as l,c as t,a as i,b as s,d as h,w as k,e as p}from"./app-Bmelea3n.js";const r={},d=p(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><a href="https://recoiljs.org/" target="_blank" rel="noopener noreferrer">Recoil</a>是一个针对<code>React</code>应用程序的状态管理库.它旨在提供一种简单且高效的方式来管理<code>React</code>组件中的状态</p><h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h2><ol><li><strong>Atoms</strong> - 原子状态,是一个可读写的状态单元,类似于<code>React</code>的<code>state</code></li></ol><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> fontSizeState</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> atom</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;fontSizeState&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 唯一 ID (并行安全)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 默认值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>Selectors</strong> - 选择器,是一个纯函数,用于从原子状态中派生新的状态</li></ol><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> fontSizeLabelState</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> selector</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;fontSizeLabelState&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: ({</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> fontSize</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fontSizeState</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> \`Font size is </span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">fontSize</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>Snapshot</strong> - 捕获了当前的状态快照,它可用于持久化、时间旅行调试、撤销/重做等功能.</li></ol><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> snapshot</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getRecoilSnapshot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 持久化到本地存储</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">localStorage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;persistedState&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">snapshot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h3 id="使用recoilroot包裹根组件" tabindex="-1"><a class="header-anchor" href="#使用recoilroot包裹根组件"><span>使用<code>RecoilRoot</code>包裹根组件</span></a></h3><p><strong>RecoilRoot</strong>用于提供<code>Recoil</code>状态的上下文,并确保所有组件都可以访问到<code>Recoil</code>状态,所以在正式开始使用<code>Recoil</code> 之前,需要将根组件包裹在<code>RecoilRoot</code>中</p><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">RecoilRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;recoil&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ReactDOM</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">render</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">RecoilRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">RecoilRoot</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例一-存储全局主题设置" tabindex="-1"><a class="header-anchor" href="#案例一-存储全局主题设置"><span>案例一:存储全局主题设置</span></a></h3><ol><li>首先定义一个状态原子,即具体的状态数据</li></ol><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">atom</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;recoil&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> themeState</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> atom</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;themeState&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;light&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用<code>useRecoilState</code>来读取和更新状态</li></ol><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">useRecoilState</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;recoil&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ThemeSwitcher</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">setTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> useRecoilState</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">themeState</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> toggleTheme</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 直接传递一个新的值来更新状态</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    //setTheme(&#39;dark&#39;);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 也可以传递一个函数来更新计算后的状态值</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">    setTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">((</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">prevTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">prevTheme</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;light&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;dark&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;light&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">toggleTheme</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      Toggle Theme</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在组件中使用<code>useRecoilValue</code>来读取状态</li></ol><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">useRecoilValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;recoil&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ThemeLabel</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> theme</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> useRecoilValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">themeState</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;Current theme is: </span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">theme</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),g={id:"和zustant的区别",tabindex:"-1"},c={class:"header-anchor",href:"#和zustant的区别"},o=i("ol",null,[i("li",null,"响应式编程:Recoil采用了响应式编程的概念,支持状态的订阅和衍生,类似RxJS。"),i("li",null,"异步数据流:Recoil内置了对异步数据流的优雅处理,方便管理异步操作。"),i("li",null,"数据流图:Recoil将状态看作数据流图,方便调试和思考状态之间的关系。"),i("li",null,"时间旅行调试:Recoil支持时间旅行调试,可以回放和检查状态的变化历史。"),i("li",null,"与React思维一致:Recoil的理念与React函数组件、hooks等高度契合。")],-1);function B(y,E){const a=e("RouteLink");return l(),t("div",null,[d,i("h2",g,[i("a",c,[i("span",null,[s("和"),h(a,{to:"/Programming/Frontend/ReactLibs/%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86/Zustant/%E7%AE%80%E4%BB%8B.html"},{default:k(()=>[s("Zustant")]),_:1}),s("的区别")])])]),o])}const A=n(r,[["render",B],["__file","简介.html.vue"]]),u=JSON.parse('{"path":"/Programming/Frontend/ReactLibs/%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86/Recoil/%E7%AE%80%E4%BB%8B.html","title":"简介","lang":"zh-CN","frontmatter":{"title":"简介","comment":false,"editLink":false,"prev":false,"next":false,"order":1,"description":"简介 Recoil是一个针对React应用程序的状态管理库.它旨在提供一种简单且高效的方式来管理React组件中的状态 核心概念 Atoms - 原子状态,是一个可读写的状态单元,类似于React的state Selectors - 选择器,是一个纯函数,用于从原子状态中派生新的状态 Snapshot - 捕获了当前的状态快照,它可用于持久化、时间旅行...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/Frontend/ReactLibs/%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86/Recoil/%E7%AE%80%E4%BB%8B.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"简介 Recoil是一个针对React应用程序的状态管理库.它旨在提供一种简单且高效的方式来管理React组件中的状态 核心概念 Atoms - 原子状态,是一个可读写的状态单元,类似于React的state Selectors - 选择器,是一个纯函数,用于从原子状态中派生新的状态 Snapshot - 捕获了当前的状态快照,它可用于持久化、时间旅行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"核心概念","slug":"核心概念","link":"#核心概念","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"使用RecoilRoot包裹根组件","slug":"使用recoilroot包裹根组件","link":"#使用recoilroot包裹根组件","children":[]},{"level":3,"title":"案例一:存储全局主题设置","slug":"案例一-存储全局主题设置","link":"#案例一-存储全局主题设置","children":[]}]},{"level":2,"title":"和Zustant的区别","slug":"和zustant的区别","link":"#和zustant的区别","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":1.92,"words":577},"filePathRelative":"Programming/Frontend/ReactLibs/状态管理/Recoil/简介.md","localizedDate":"2024年7月3日","autoDesc":true}');export{A as comp,u as data};
