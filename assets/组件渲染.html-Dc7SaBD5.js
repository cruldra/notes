import{_ as r,r as c,o as d,c as a,d as t,e as o}from"./app-Bmelea3n.js";const s={},n=o('<h2 id="哪些情况下会触发组件重新渲染" tabindex="-1"><a class="header-anchor" href="#哪些情况下会触发组件重新渲染"><span>哪些情况下会触发组件重新渲染</span></a></h2><p><code>React</code>组件的重新渲染(re-render)通常是由以下几种情况触发的:</p><ol><li><strong>State改变</strong>:当组件的<code>state</code>通过<code>setState</code>方法更新时,组件会重新渲染.</li><li><strong>Props改变</strong>:当传递给组件的<code>props</code>发生变化时,组件会重新渲染.</li><li><strong>父组件渲染</strong>:如果一个组件的父组件重新渲染,即使<code>props</code>和<code>state</code>没有变化,子组件默认也会重新渲染.</li><li><strong>Context改变</strong>:如果组件消费的<code>ReactContext</code>的值发生变化,那么所有消费该<code>Context</code>的组件都将重新渲染.</li><li><strong>强制渲染</strong>:调用组件的<code>forceUpdate</code>方法会导致组件跳过<code>shouldComponentUpdate</code>,直接引发重新渲染.</li><li><strong>Hooks改变</strong>:使用<code>Hooks</code>的函数组件会在依赖的<code>hooks</code>改变时重新渲染,例如<code>useState</code>、<code>useReducer</code> 的状态更新,或<code>useEffect</code>、<code>useMemo</code>、<code>useCallback</code>的依赖项改变.</li><li><strong>错误边界</strong>:当组件中的某个子组件抛出错误时,如果这个组件上层有错误边界(ErrorBoundary) 组件并且定义了<code>getDerivedStateFromError</code>或<code>componentDidCatch</code>,那么会触发错误边界组件的重新渲染以显示错误信息.</li></ol><h2 id="props变化导致的重新渲染" tabindex="-1"><a class="header-anchor" href="#props变化导致的重新渲染"><span><code>props</code>变化导致的重新渲染</span></a></h2><p>在<code>React</code>中,组件的<code>props</code>更新会触发组件的重新渲染,<strong>但这并不意味着组件内部所有的状态都会自动更新</strong>.</p><p>具体来说,若内部状态是由<code>props</code>初始化的,那么在后续的<code>props</code>更新时,这个内部状态不会自动跟随更新,下面的例子证明了这一点:</p>',6),p=o("<p>上面的例子中可以看到,尽管传递给<code>MyComponent</code>的<code>value</code>发生了变化,但是<code>MyComponent</code>内部的<code>internalValue</code> 并没有自动更新,这是因为<code>useState</code><strong>只会在组件首次渲染时初始化</strong>,后续的更新不会再次初始化<code>useState</code>的值.</p><p>要解决这个问题,可以使用<code>useEffect</code>来监听<code>props</code>的变化,并在<code>props</code>变化时更新内部状态:</p>",2);function i(l,m){const e=c("SandPack");return d(),a("div",null,[n,t(e,{theme:"dark",title:"React%20%E7%A4%BA%E4%BE%8B%20",template:"react-ts",files:"eJydU01Lw0AQ/StDL7ZYGr3WpiA9eRBEwYvxENstBNNN2GxKJQQqtkWsB/FQUBE8KHoRetAitj+n29h/4X5Umn4c1LnNZOfNm/cmQULbdN0M9WqJbAKsiusQCrvILNI0BL6H9qhJUQhl4lRghYj6yoaBDVx0sEdh+6Tg8BaMMAUdki5xXC8Feh4CAwMPTQN2fs+e2+yyw1rN8dkLeAIQhh+f7LHD8+HggTWfotsGyGaomraPVLMacWBhigg27X3xJQ0eolvxyiEf/MNTEchIjJSkKXAIoj7BkFSZiFzJquanqSy5edHM6oMsBDGYMKe5i0/VLtFFb1Q/5e9nKC7rOPIpdTA4uGBbxWM9SEqR5leZoR/OYYhg3daE5Nd7O+rfxGnMTdTUyBhITptuLcQJYz7umIRbOONl3MaJE5KYdGBR+bW/6h0/HQmsB0pw7dfiKdFkF6zC+lLJRndvo06XX9m4fi0Ue72K+o1hv8cvbiLlP4VDNfmrlFDZ9O0FBQ2cCL8B8fIu8Q==",options:"eJyrrgUAAXUA+Q==",customSetup:"eJyrrgUAAXUA+Q=="}),p,t(e,{theme:"dark",title:"React%20%E7%A4%BA%E4%BE%8B%20",template:"react-ts",files:"eJydU01LAlEU/SsXNxmJU9tSIaJFiyAK2mSLyZ4g2Zth5o0Yw4CRSmSQtZBKghZFLQpclFT6c3xO/ovex5jPD0J6u3fnnnPPPe+MG9KWTTNK7HxoMQSZQ9OwCGwiPUUi4Do22iI6QR6kLeMQZixen1lK4iROGdgmsH60YjAIRphAHMKmZZj2LMQT4CYxsKNpQE/v6FOFntdoudQ7eQabE0Ln44s+1Ni9076npUf/tggCDDk96yAJliN2MpggC+vZbf4lAjYia2pllw3u65QCooJjVsgMRPj1S1p9CUbQi2su57PZrb91aw2pyz9rdgvHEiDWjzLS1XQapUg4rK7Ez6iG0bm8x4vAjlLe7dctRBwLQ3jAFtvP5BKDqyiZCY6lhfYiuAqLF9PM8VZ1A9Y/ZNgkxJ5DiIHBwCvZTOog7sr9/lzKG+HghzbKgcjv94rfuhk38neiJkcqJDFtsDW3xlNStaFbLFBDyVJfIMiFECbyMJ6D+cHrT+e3GmRBHHel4drU5knTBArmYGGiZTJxLPO9whV37LXqt4qdVpPlP7Dyn8ahvPhx91Fad7JjDiZxyPsBg01n9A==",options:"eJyrrgUAAXUA+Q==",customSetup:"eJyrrgUAAXUA+Q=="})])}const h=r(s,[["render",i],["__file","组件渲染.html.vue"]]),u=JSON.parse('{"path":"/Programming/Frontend/React/%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93.html","title":"组件渲染","lang":"zh-CN","frontmatter":{"title":"组件渲染","comment":false,"editLink":false,"prev":false,"next":false,"description":"哪些情况下会触发组件重新渲染 React组件的重新渲染(re-render)通常是由以下几种情况触发的: State改变:当组件的state通过setState方法更新时,组件会重新渲染. Props改变:当传递给组件的props发生变化时,组件会重新渲染. 父组件渲染:如果一个组件的父组件重新渲染,即使props和state没有变化,子组件默认也会重...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/Frontend/React/%E7%BB%84%E4%BB%B6%E6%B8%B2%E6%9F%93.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"组件渲染"}],["meta",{"property":"og:description","content":"哪些情况下会触发组件重新渲染 React组件的重新渲染(re-render)通常是由以下几种情况触发的: State改变:当组件的state通过setState方法更新时,组件会重新渲染. Props改变:当传递给组件的props发生变化时,组件会重新渲染. 父组件渲染:如果一个组件的父组件重新渲染,即使props和state没有变化,子组件默认也会重..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"组件渲染\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"哪些情况下会触发组件重新渲染","slug":"哪些情况下会触发组件重新渲染","link":"#哪些情况下会触发组件重新渲染","children":[]},{"level":2,"title":"props变化导致的重新渲染","slug":"props变化导致的重新渲染","link":"#props变化导致的重新渲染","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":2.49,"words":746},"filePathRelative":"Programming/Frontend/React/组件渲染.md","localizedDate":"2024年7月3日","autoDesc":true}');export{h as comp,u as data};
