import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as n,f as e}from"./app-aIhAEzpS.js";const t={},l=e(`<h2 id="代理配置" tabindex="-1"><a class="header-anchor" href="#代理配置" aria-hidden="true">#</a> 代理配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.proxy http://localhost:7890
<span class="token function">git</span> config <span class="token parameter variable">--global</span> https.proxy https://localhost:7890
<span class="token comment"># 取消代理</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> http.proxy
<span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--unset</span> https.proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[l];function o(c,r){return s(),n("div",null,i)}const m=a(t,[["render",o],["__file","配置.html.vue"]]);export{m as default};
