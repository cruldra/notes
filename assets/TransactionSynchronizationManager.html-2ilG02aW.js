import{_ as i,o as s,c as a,e as n}from"./app-Bmelea3n.js";const e={},t=n(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/transaction/support/TransactionSynchronizationManager.html" target="_blank" rel="noopener noreferrer">TransactionSynchronizationManager</a> 是<code>Spring</code>框架中用于管理当前线程事务状态和资源绑定的核心类,它协调事务传播行为并提供事务同步回调机制.</p><h2 id="绑定资源" tabindex="-1"><a class="header-anchor" href="#绑定资源"><span>绑定资源</span></a></h2><ol><li>在事务开始时,将数据库连接或其他资源绑定到当前线程,以便在事务范围内共享和重用资源.这样可以避免在事务内多次获取和释放资源,提高性能并确保事务的一致性.</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> doInTransaction</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 获取数据库连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    Connection</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> connection </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> DataSourceUtils</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getConnection</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(dataSource);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 将数据库连接绑定到当前线程</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        TransactionSynchronizationManager</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">bindResource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(dataSource, </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> ConnectionHolder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(connection));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 在事务范围内执行数据库操作</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 解绑数据库连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        TransactionSynchronizationManager</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">unbindResource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(dataSource);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 释放数据库连接</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        DataSourceUtils</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">releaseConnection</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(connection, dataSource);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><ol start="2"><li>在一些特定的场景下,需要将自定义的资源绑定到当前线程,以便在事务范围内共享和访问.</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> doSomething</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 获取自定义资源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    MyResource</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> resource </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> MyResource</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 将自定义资源绑定到当前线程</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    TransactionSynchronizationManager</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">bindResource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">MyResource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, resource);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 在事务范围内访问和使用自定义资源</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">finally</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 解绑自定义资源</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        TransactionSynchronizationManager</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">unbindResource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">MyResource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[t];function h(r,k){return s(),a("div",null,l)}const d=i(e,[["render",h],["__file","TransactionSynchronizationManager.html.vue"]]),o=JSON.parse('{"path":"/Programming/SpringBoot/Data/JPA/%E4%BA%8B%E5%8A%A1/TransactionSynchronizationManager.html","title":"TransactionSynchronizationManager","lang":"zh-CN","frontmatter":{"title":"TransactionSynchronizationManager","comment":false,"editLink":false,"prev":false,"next":false,"order":1,"description":"简介 TransactionSynchronizationManager 是Spring框架中用于管理当前线程事务状态和资源绑定的核心类,它协调事务传播行为并提供事务同步回调机制. 绑定资源 在事务开始时,将数据库连接或其他资源绑定到当前线程,以便在事务范围内共享和重用资源.这样可以避免在事务内多次获取和释放资源,提高性能并确保事务的一致性. 在一些特...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/SpringBoot/Data/JPA/%E4%BA%8B%E5%8A%A1/TransactionSynchronizationManager.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"TransactionSynchronizationManager"}],["meta",{"property":"og:description","content":"简介 TransactionSynchronizationManager 是Spring框架中用于管理当前线程事务状态和资源绑定的核心类,它协调事务传播行为并提供事务同步回调机制. 绑定资源 在事务开始时,将数据库连接或其他资源绑定到当前线程,以便在事务范围内共享和重用资源.这样可以避免在事务内多次获取和释放资源,提高性能并确保事务的一致性. 在一些特..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TransactionSynchronizationManager\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"绑定资源","slug":"绑定资源","link":"#绑定资源","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":1.07,"words":322},"filePathRelative":"Programming/SpringBoot/Data/JPA/事务/TransactionSynchronizationManager.md","localizedDate":"2024年7月3日","autoDesc":true}');export{d as comp,o as data};
