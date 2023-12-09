import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as s}from"./app-d7rVN-Gj.js";const i={},r=s(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token punctuation">\\</span>
<span class="token function">apt</span> <span class="token function">install</span> certbot python3-certbot-nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="申请证书" tabindex="-1"><a class="header-anchor" href="#申请证书" aria-hidden="true">#</a> 申请证书</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 仅申请证书</span>
certbot certonly  <span class="token parameter variable">-d</span> <span class="token variable">$domain</span> <span class="token parameter variable">--manual</span> --preferred-challenges dns-01

<span class="token comment"># 申请证书并自动安装到nginx</span>
certbot  <span class="token parameter variable">-d</span> <span class="token variable">$domain1</span>,<span class="token variable">$domain2</span> <span class="token parameter variable">--nginx</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动续订" tabindex="-1"><a class="header-anchor" href="#自动续订" aria-hidden="true">#</a> 自动续订</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>
<span class="token comment">## 写入自动续订证书计划任务</span>
<span class="token number">0</span> <span class="token number">5</span> * * * /usr/bin/certbot renew <span class="token parameter variable">--quiet</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),t=[r];function l(c,d){return n(),e("div",null,t)}const m=a(i,[["render",l],["__file","certbot.html.vue"]]);export{m as default};
