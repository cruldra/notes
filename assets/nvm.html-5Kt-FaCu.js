import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-V4S7cV4c.js";const i={},l=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>nvm 是 node.js 的版本管理工具，可以在同一台机器上安装多个版本的 node.js，并且可以在不同的版本之间切换。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
brew <span class="token function">install</span> nvm

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">curl</span> -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh <span class="token operator">|</span> <span class="token function">bash</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装最新lts版本</span>
nvm <span class="token function">install</span> <span class="token parameter variable">--lts</span>

<span class="token comment"># 安装最新版本</span>
nvm <span class="token function">install</span> <span class="token function">node</span>

<span class="token comment"># 安装指定版本</span>
nvm <span class="token function">install</span> <span class="token number">8.11</span>.3

<span class="token comment"># 查看已安装版本</span>
nvm <span class="token function">ls</span>

<span class="token comment"># 切换版本</span>
nvm use <span class="token number">8.11</span>.3

<span class="token comment"># 查看当前版本</span>
nvm current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),d=[l];function c(r,t){return s(),a("div",null,d)}const u=n(i,[["render",c],["__file","nvm.html.vue"]]);export{u as default};
