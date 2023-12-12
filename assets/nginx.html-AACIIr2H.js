import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as i,c,a as n,b as l,d as t,f as r}from"./app-aIhAEzpS.js";const d={},o=r(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="使用命令行安装" tabindex="-1"><a class="header-anchor" href="#使用命令行安装" aria-hidden="true">#</a> 使用命令行安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># ubuntu</span>
<span class="token function">apt</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用docker安装" tabindex="-1"><a class="header-anchor" href="#使用docker安装" aria-hidden="true">#</a> 使用docker安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用docker快速安装</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> nginx-luodi-pages <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span>  <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /Users/dongjak/IdeaProjects/landing_pages/dist:/usr/share/nginx/html <span class="token punctuation">\\</span>
nginx
<span class="token comment">#--name 容器名称 </span>
<span class="token comment">#-d 后台运行 </span>
<span class="token comment">#-p 本地端口:容器端口  </span>
<span class="token comment">#-v 本地文件路径:容器内路径</span>
<span class="token comment">#镜像名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工具" tabindex="-1"><a class="header-anchor" href="#工具" aria-hidden="true">#</a> 工具</h2>`,6),p={href:"https://www.digitalocean.com/community/tools/nginx?global.app.lang=zhCN",target:"_blank",rel:"noopener noreferrer"};function u(m,v){const a=s("ExternalLinkIcon");return i(),c("div",null,[o,n("ul",null,[n("li",null,[n("a",p,[l("nginx config builder"),t(a)])])])])}const k=e(d,[["render",u],["__file","nginx.html.vue"]]);export{k as default};
