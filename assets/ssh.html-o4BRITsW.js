import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,f as a}from"./app-QgoAa0Qv.js";const i={},o=a(`<h2 id="允许root登录" tabindex="-1"><a class="header-anchor" href="#允许root登录" aria-hidden="true">#</a> 允许root登录</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>＃　先设置root密码
<span class="token function">sudo</span> <span class="token function">passwd</span> root

<span class="token comment"># 编辑配置文件</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/ssh/sshd_config

<span class="token comment"># 找到PermitRootLogin,将其值改为yes</span>

<span class="token comment"># 重启ssh服务</span>
<span class="token function">sudo</span> <span class="token function">service</span> <span class="token function">ssh</span> restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[o];function t(d,l){return n(),e("div",null,c)}const m=s(i,[["render",t],["__file","ssh.html.vue"]]);export{m as default};
