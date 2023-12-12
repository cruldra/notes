import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-QgoAa0Qv.js";const t={},i=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> js2py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="一个简单的示例" tabindex="-1"><a class="header-anchor" href="#一个简单的示例" aria-hidden="true">#</a> 一个简单的示例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> js2py

add <span class="token operator">=</span> js2py<span class="token punctuation">.</span>eval_js<span class="token punctuation">(</span><span class="token triple-quoted-string string">&quot;&quot;&quot;
...     function add(x, y) {
...         return x + y;
...     }
... &quot;&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>add<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 输出：5</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),d=[i];function c(o,l){return s(),a("div",null,d)}const u=n(t,[["render",c],["__file","Js2Py.html.vue"]]);export{u as default};
