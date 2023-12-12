import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c,a as n,b as s,d as l,f as o}from"./app-V4S7cV4c.js";const p={},r=o(`<p>##　设置镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment"># 查看当前镜像</span>
<span class="token function">pnpm</span> config get registry

<span class="token comment"># 设置淘宝镜像</span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org

<span class="token comment"># 设置官方镜像</span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmjs.org

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置代理" tabindex="-1"><a class="header-anchor" href="#设置代理" aria-hidden="true">#</a> 设置代理</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 获取当前代理设置</span>
<span class="token function">pnpm</span> config get proxy
<span class="token function">pnpm</span> config get https-proxy

<span class="token comment"># 设置代理</span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> proxy http://localhost:7890
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> https-proxy http://localhost:7890

<span class="token comment">## 删除代理设置</span>

<span class="token function">pnpm</span> config delete proxy
<span class="token function">pnpm</span> config delete https-proxy

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d={class:"hint-container tip"},m=n("p",{class:"hint-container-title"},"提示",-1),v={href:"https://poe.com/s/nPlrL2HVkwp4YexO1CRe",target:"_blank",rel:"noopener noreferrer"};function u(b,h){const e=i("ExternalLinkIcon");return t(),c("div",null,[r,n("div",d,[m,n("p",null,[s("如果删除代理配置不起作用的话,有可能是全局配置文件中也设置了,找到删掉即可,具体位置在:"),n("a",v,[s("pnpm全局配置文件位置"),l(e)])])])])}const k=a(p,[["render",u],["__file","pnpm.html.vue"]]);export{k as default};
