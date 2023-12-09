import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,f as e}from"./app-d7rVN-Gj.js";const t="/notes/assets/1-Iu1UXqOd.gif",i={},p=e(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p><code>GitHub Actions</code> 是 GitHub 的持续集成服务，它允许您在 GitHub 存储库中创建自定义工作流程（workflow），以响应存储库中的事件。例如，每当有人提交新的 <code>pull request</code> 时，您可以编写一个工作流程来运行测试并通知您的团队。工作流程由一个或多个 <code>job</code> 组成，并且可以在 Linux、Windows 和 macOS 上运行。每个 <code>job</code> 都包含一系列 <code>step</code>，这些 <code>step</code> 将按顺序执行。GitHub 提供了一些内置的 <code>actions</code>，您可以在工作流程中使用这些 <code>actions</code>，也可以编写自己的 <code>actions</code>。</p><p>工作流(workflow)文件放在项目根目录下的 <code>.github/workflows</code> 目录中，文件名以 <code>.yml</code> 结尾。您可以在同一存储库中创建多个工作流程文件，每个文件都可以包含一个或多个工作流程。例如，您可以创建一个工作流程来自动测试代码，另一个工作流程来自动部署代码，等等。</p><h2 id="实例一" tabindex="-1"><a class="header-anchor" href="#实例一" aria-hidden="true">#</a> 实例一</h2><h3 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作</h3><div class="hint-container warning"><p class="hint-container-title">提示</p><ul><li>在gitee上创建一个空项目</li><li>准备好私人令牌</li></ul></div><h3 id="项目目录结构" tabindex="-1"><a class="header-anchor" href="#项目目录结构" aria-hidden="true">#</a> 项目目录结构</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>- project <span class="token comment"># github项目根目录</span>
  - app <span class="token comment"># php后台代码</span>
  - <span class="token function">docker</span> <span class="token comment"># docker部署文件</span>
  - public <span class="token comment"># nginx站点根目录</span>
  - web <span class="token comment"># nodejs前端代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目的" tabindex="-1"><a class="header-anchor" href="#目的" aria-hidden="true">#</a> 目的</h3><p>在 <mark>每次push到github上的master分支</mark> 时实现以下效果</p><ul><li>在web目录下运行<code>pnpm install</code>及<code>pnpm build</code></li><li>把由<code>pnpm build</code>生成的<code>/project/web/dist</code>目录拷贝到<code>/project/public</code>目录下</li><li>把<code>/project/web</code>目录删掉,因为这里面包括前端源代码,正式环境下不需要</li><li>把git项目的remote地址改为gitee的地址然后推送到gittee上</li></ul><h3 id="创建工作流定义文件" tabindex="-1"><a class="header-anchor" href="#创建工作流定义文件" aria-hidden="true">#</a> 创建工作流定义文件</h3><p>接下来创建一个工作流定义文件放在<code>$project_root/.github/workflows/</code>目录下,文件名随意,文件后缀用<code>yml</code></p><details class="hint-container details"><summary>完整的工作流定义文件</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout code
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup Node.js
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> <span class="token number">18</span>

      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> pnpm/action<span class="token punctuation">-</span>setup@v2
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Install pnpm
        <span class="token key atrule">id</span><span class="token punctuation">:</span> pnpm<span class="token punctuation">-</span>install
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token number">8</span>
          <span class="token key atrule">run_install</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Get pnpm store directory
        <span class="token key atrule">id</span><span class="token punctuation">:</span> pnpm<span class="token punctuation">-</span>cache
        <span class="token key atrule">shell</span><span class="token punctuation">:</span> bash
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;STORE_PATH=$(pnpm store path)&quot; &gt;&gt; $GITHUB_OUTPUT</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
        <span class="token key atrule">name</span><span class="token punctuation">:</span> Setup pnpm cache
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> steps.pnpm<span class="token punctuation">-</span>cache.outputs.STORE_PATH <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>pnpm<span class="token punctuation">-</span>store<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;<span class="token important">**/pnpm-lock.yaml&#39;)</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-pnpm-store-</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install dependencies and build web app
        <span class="token key atrule">working-directory</span><span class="token punctuation">:</span> ./web
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          pnpm install
          pnpm run build</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy web app to public directory
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          cp -R ./web/dist/* ./public/
          rm -rf ./web</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configure Git
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          git config --global user.email &quot;cruldra@gmail.com&quot;
          git config --global user.name &quot;cruldra&quot;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Commit changes to Gitee
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          git add .
          git add ./public -f
          git commit -m &quot;Update by github workflow&quot;
          git remote set-url origin https://这里换成你的gitee用户名:这里换成你的gitee私有token@gitee.com/cruldra/zmesc.git
          git push -u origin &quot;master&quot; -f</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>以上步骤完成后,在本地随便改动某个文件后push到github上,然后就可以看到github actions的运行结果了</p><figure><img src="`+t+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',17),c=[p];function l(o,u){return s(),a("div",null,c)}const k=n(i,[["render",l],["__file","Actions.html.vue"]]);export{k as default};
