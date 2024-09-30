import{_ as a,r as h,o as t,c as e,d as k,w as n,e as r,a as i,b as s}from"./app-Bmelea3n.js";const d={},p=r('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>控制元素在页面上的可见性涉及到以下几个属性:</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/visibility" target="_blank" rel="noopener noreferrer"><code>visibility</code></a>-显示或隐藏元素但不更改文档的布局</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/display" target="_blank" rel="noopener noreferrer"><code>display</code></a>-控制元素的显示方式,当值为<code>none</code>时,元素不会在页面上显示,并且不会占用空间</li><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/opacity" target="_blank" rel="noopener noreferrer"><code>opacity</code></a>-设置元素的透明度</li></ul><h2 id="opacity" tabindex="-1"><a class="header-anchor" href="#opacity"><span>opacity</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><ul><li><code>opacity</code>属性用于设置元素及其所有子元素的不透明度.</li><li>这个属性的值可以在0.0(完全透明)和1.0(完全不透明)之间,包括0和1.</li><li>如果设置元素的<code>opacity</code>为0,那么这个元素及其所有子元素都将变得完全透明,<mark>但它们仍然占据页面空间并可以接收用户交互(如点击)</mark>.</li></ul></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>下面这个例子中,当把滑动条拖到最左边设置<code>opacity</code>为0时可以看下以下效果:</p><ul><li>仍然可以点击按钮(<strong>可以接收用户交互</strong>)</li><li>下面的<code>&lt;div&gt;</code>元素的位置没有改变(<strong>仍然存在于页面上并且仍然占据空间</strong>)</li></ul></div>',6),B=i("div",{class:"language-html line-numbers-mode","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">滑动改变元素可见性</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"h1"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"slidingDiv"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"button"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"clickMe"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">点击我</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"button"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    你好，我是上面的 Div 元素！")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"otherDiv"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">你好，我是下面的 Div 元素！</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"br"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"滑动条：<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"input"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," type"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"range"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," min"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"0"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," max"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"1"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," step"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"0.1"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"1"'),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"slider"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"br"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"当前透明度：<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66"}}," id"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"currentOpacity"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">1</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"span"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),g=i("div",{class:"language-css line-numbers-mode","data-highlighter":"shiki","data-ext":"css","data-title":"css",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"#slidingDiv"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    width"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"300"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    height"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"100"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    background-color"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"red"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    position"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"relative"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"#clickMe"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    position"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"absolute"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    top"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"50"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    left"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"50"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    transform"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#56B6C2"}},"translate"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"-50"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},", "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"-50"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"%"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"#otherDiv"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    width"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"300"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    height"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"100"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#ABB2BF"}},"    background-color"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"blue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),y=i("div",{class:"language-js line-numbers-mode","data-highlighter":"shiki","data-ext":"js","data-title":"js",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"  const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#E5C07B"}}," slider"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}}," document"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"getElementById"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'slider'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#E5C07B"}}," slidingDiv"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}}," document"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"getElementById"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'slidingDiv'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#E5C07B"}}," currentOpacity"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}}," document"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"getElementById"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'currentOpacity'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#E5C07B"}}," clickMeButton"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}}," document"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"getElementById"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'clickMe'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"slider"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"oninput"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}}," function"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}},"    const"),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#E5C07B"}}," opacityValue"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#E5C07B"}}," this"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"value"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"    slidingDiv"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"style"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"opacity"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}}," opacityValue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"    currentOpacity"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"textContent"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}}," opacityValue"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"clickMeButton"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"onclick"),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," ="),i("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#C678DD"}}," function"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"() {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"    alert"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'你点击了我！'"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},");")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"}")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1);function c(o,A){const l=h("CodeDemo");return t(),e("div",null,[p,k(l,{id:"code-demo-62",type:"normal",code:"eJylVE1v00AQ/SsrV6ip1DqJEBfjcChw4IC4cfLFsTfxUmfX8o5DoqpSyzflI6rgEFWqVJCg3HrhQNvk38QOPeUvMJt16kStyqE5WLM7783bebObTSOAVmhYhh1U72Vne+nur+zrSdrrp69fjn8fpr3jv0c72faRXca8wx1u+6xNmF9zDBkyn/HmA9Z2DEwR/Nn1BEBwnfdC5m08ppgcvzhJ355l7/bssgbk8NHwMP0xnAw+YirrH4/+7J4ffB/vvyJYk+gDTAY7qFlGUeQU2gICGmvlS0U+XFXkokQ9xm/e6MG3yWDfZjxKgEA3olg4dnkTj0xajOOqoiK3g1EVIwk0UpumWrTdMFEEFV/YQeOpFVokHX5J33863+5l/c/p6U8lJSN3Zk4Sx5TDk8j1GHSRVbXLKos8Y9XwpMSRLBUOk03t2HPmQ2CR25VK1LmrtwLKmgFYpDq3V3e9jWYsEu6veSIUsUVi6ue5SEgGTHC1F7rA2hQTWw5fyuc1kypwbl2KMAGFUwkQkUXuVG7ly5A2UL1YA1ooGyJuWTpEDVpaw/wqUd+VXG02wRt3Vsc56Jpo3DPlGyGe4BKIngipEV94SQvdNpsUHoZUhevdR35pWSOW1ZkKSu74f2gaNUddnOh19EXkfAk9gXX9iK6roIFTqoMWqy5MwfVNrpFGwj01utLKzF1dX2jFp+rqIgwCJs3pPc7NLfoyJXRDauYExM5Tc/RiGybQDtwXHHDrMh6ng03Ot4fHna6vPK4b0hhKy/i09V/H6PQNvm58xtOO1ai3/gEaT9DB"},{default:n(()=>[B,g,y]),_:1})])}const C=a(d,[["render",c],["__file","可见性.html.vue"]]),F=JSON.parse('{"path":"/Programming/Frontend/Css/%E5%8F%AF%E8%A7%81%E6%80%A7.html","title":"可见性","lang":"zh-CN","frontmatter":{"title":"可见性","comment":false,"editLink":false,"prev":false,"next":false,"description":"简介 控制元素在页面上的可见性涉及到以下几个属性: visibility-显示或隐藏元素但不更改文档的布局 display-控制元素的显示方式,当值为none时,元素不会在页面上显示,并且不会占用空间 opacity-设置元素的透明度 opacity 相关信息 opacity属性用于设置元素及其所有子元素的不透明度. 这个属性的值可以在0.0(完全透明...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/Frontend/Css/%E5%8F%AF%E8%A7%81%E6%80%A7.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"可见性"}],["meta",{"property":"og:description","content":"简介 控制元素在页面上的可见性涉及到以下几个属性: visibility-显示或隐藏元素但不更改文档的布局 display-控制元素的显示方式,当值为none时,元素不会在页面上显示,并且不会占用空间 opacity-设置元素的透明度 opacity 相关信息 opacity属性用于设置元素及其所有子元素的不透明度. 这个属性的值可以在0.0(完全透明..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"可见性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"opacity","slug":"opacity","link":"#opacity","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":1.43,"words":428},"filePathRelative":"Programming/Frontend/Css/可见性.md","localizedDate":"2024年7月3日","autoDesc":true}');export{C as comp,F as data};
