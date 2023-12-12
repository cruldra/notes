import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-V4S7cV4c.js";const i={},t=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> PyExecJS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="一个简单的示例" tabindex="-1"><a class="header-anchor" href="#一个简单的示例" aria-hidden="true">#</a> 一个简单的示例</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">import</span> execjs

<span class="token comment"># 定义JavaScript代码</span>
js_code <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
function add(a, b) {
    return a + b;
}
&quot;&quot;&quot;</span>

<span class="token comment"># 创建一个运行环境</span>
ctx <span class="token operator">=</span> execjs<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span>js_code<span class="token punctuation">)</span>

<span class="token comment"># 调用JavaScript函数，并获取返回值</span>
result <span class="token operator">=</span> ctx<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token string">&quot;add&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token comment"># 打印结果</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>  <span class="token comment"># 输出：5</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),c=[t];function l(o,d){return s(),a("div",null,c)}const u=n(i,[["render",l],["__file","PyExecJS.html.vue"]]);export{u as default};
