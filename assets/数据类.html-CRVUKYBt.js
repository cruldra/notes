import{_ as i,o as s,c as a,e as t}from"./app-Bmelea3n.js";const n={},e=t(`<p>在<code>Python 3.7</code>及以后的版本中,<code>数据类(Data Class)</code>是一个方便的功能,它使用装饰器和类型注解自动添加了特殊方法,如<code>__init__</code>、<code>__repr__</code>、<code>__eq__</code>等,以减少样板代码.</p><p><strong>数据类非常适合创建那些主要用于存储数据的类.</strong></p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> dataclasses </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> dataclass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">@dataclass</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> InventoryItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;&quot;&quot;Class for keeping track of an item in inventory.&quot;&quot;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    name: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">str</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    unit_price: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">float</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    quantity_on_hand: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> total_cost</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.unit_price </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.quantity_on_hand</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 使用数据类</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">item </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> InventoryItem</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;widget&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">unit_price</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">quantity_on_hand</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(item)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 自动提供一个有用的 __repr__ 方法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(item.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">total_cost</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 100.0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[e];function h(p,k){return s(),a("div",null,l)}const d=i(n,[["render",h],["__file","数据类.html.vue"]]),o=JSON.parse('{"path":"/Programming/Python/%E7%B1%BB/%E6%95%B0%E6%8D%AE%E7%B1%BB.html","title":"数据类","lang":"zh-CN","frontmatter":{"title":"数据类","comment":false,"editLink":false,"prev":false,"next":false,"description":"在Python 3.7及以后的版本中,数据类(Data Class)是一个方便的功能,它使用装饰器和类型注解自动添加了特殊方法,如__init__、__repr__、__eq__等,以减少样板代码. 数据类非常适合创建那些主要用于存储数据的类.","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/Python/%E7%B1%BB/%E6%95%B0%E6%8D%AE%E7%B1%BB.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"数据类"}],["meta",{"property":"og:description","content":"在Python 3.7及以后的版本中,数据类(Data Class)是一个方便的功能,它使用装饰器和类型注解自动添加了特殊方法,如__init__、__repr__、__eq__等,以减少样板代码. 数据类非常适合创建那些主要用于存储数据的类."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据类\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":0.5,"words":150},"filePathRelative":"Programming/Python/类/数据类.md","localizedDate":"2024年7月3日","autoDesc":true}');export{d as comp,o as data};
