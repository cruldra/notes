import{_ as s,o as i,c as a,e}from"./app-Bmelea3n.js";const n={},t=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><code>useEffect</code>是<code>React</code>中的一个钩子(hook)函数,允许你在函数组件中执行副作用操作</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>副作用指的是那些与渲染无关的操作,如数据获取、手动更改DOM、设置订阅和定时器等</p></div><p><code>useEffect</code>接收两个参数:</p><ol><li>副作用函数:这是一个函数,在组件渲染到屏幕之后和某些值改变之后执行</li><li>依赖项数组(可选):当数组中的值发生变化时,副作用函数会重新执行.如果传递一个空数组([]),副作用函数只会在组件挂载时执行一次,在组件卸载时执行清理</li></ol><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> React</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">useState</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ExampleComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">setCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 使用 useEffect 运行副作用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 更新文档的标题</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    document</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> \`You clicked </span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> times\`</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  }, [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 仅在 count 更改时重新运行</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;You clicked </span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> times&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> setCount</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">count</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#24292E;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        Click me</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码中,<code>useEffect</code>用于更新页面标题以反映按钮点击的次数.副作用函数在组件每次渲染后运行,并且因为我们指定了[count]作为依赖项数组,所以只有当<code>count</code>变量发生变化时,副作用才会重新执行</p><h2 id="清理副作用" tabindex="-1"><a class="header-anchor" href="#清理副作用"><span>清理副作用</span></a></h2><p>有时候你需要清理副作用(比如取消订阅或清除定时器).这可以通过在副作用函数内返回一个清理函数来实现.这个清理函数会在组件卸载前以及依赖项改变导致副作用重新运行前被调用</p><div class="language-tsx line-numbers-mode" data-highlighter="shiki" data-ext="tsx" data-title="tsx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> subscription</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> props</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">subscribe</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  //清理函数会在组件卸载前以及依赖项改变导致副作用重新运行前被调用</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 清理订阅</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    subscription</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">unsubscribe</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}, [</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">source</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 仅在 props.source 更改时重新运行</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个清理阶段的示例中,我们假设有一个需要订阅的资源<code>props.source</code>.副作用函数设置了订阅,并返回了一个函数来取消订阅.当<code>props.source</code>改变时,旧的订阅将被取消,组件将重新订阅新的资源</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ol><li><code>useEffect</code>是<code>React</code>中的一个钩子(hook)函数</li><li>类似这样的函数还有<code>useMemo</code>、<code>useCallback</code>、<code>useRef</code>等</li><li>可以把它看成是<code>vue</code>中的<code>onMounted</code>、<code>onMounted</code>和<code>watch</code>等函数的集合</li></ol><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ol><li><a href="https://poe.com/s/QVmSOn05agVafhLJqhVR" target="_blank" rel="noopener noreferrer">poe问答-useEffect是什么</a></li><li><a href="https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html" target="_blank" rel="noopener noreferrer">轻松学会React钩子:以<code>useEffect()</code>为例-阮一峰的网络日志</a></li></ol>`,16),l=[t];function h(k,p){return i(),a("div",null,l)}const d=s(n,[["render",h],["__file","useEffect.html.vue"]]),c=JSON.parse('{"path":"/Programming/Frontend/React/useEffect.html","title":"useEffect","lang":"zh-CN","frontmatter":{"title":"useEffect","comment":false,"editLink":false,"prev":false,"next":false,"description":"简介 useEffect是React中的一个钩子(hook)函数,允许你在函数组件中执行副作用操作 提示 副作用指的是那些与渲染无关的操作,如数据获取、手动更改DOM、设置订阅和定时器等 useEffect接收两个参数: 副作用函数:这是一个函数,在组件渲染到屏幕之后和某些值改变之后执行 依赖项数组(可选):当数组中的值发生变化时,副作用函数会重新执行...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/Frontend/React/useEffect.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"useEffect"}],["meta",{"property":"og:description","content":"简介 useEffect是React中的一个钩子(hook)函数,允许你在函数组件中执行副作用操作 提示 副作用指的是那些与渲染无关的操作,如数据获取、手动更改DOM、设置订阅和定时器等 useEffect接收两个参数: 副作用函数:这是一个函数,在组件渲染到屏幕之后和某些值改变之后执行 依赖项数组(可选):当数组中的值发生变化时,副作用函数会重新执行..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"useEffect\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"清理副作用","slug":"清理副作用","link":"#清理副作用","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":2.11,"words":634},"filePathRelative":"Programming/Frontend/React/useEffect.md","localizedDate":"2024年7月3日","autoDesc":true}');export{d as comp,c as data};
