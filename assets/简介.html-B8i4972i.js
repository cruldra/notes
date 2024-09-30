import{_ as h,r,o as k,c as p,d,w as a,e as l,b as s,a as i}from"./app-Bmelea3n.js";const o={},c=l('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><a href="https://docs.spring.io/spring-framework/reference/core/aop.html" target="_blank" rel="noopener noreferrer"><code>面向切面编程(Aspect-Oriented Programming,AOP)</code></a> 是一种编程范式.它是对<a href="https://en.wikipedia.org/wiki/Object-oriented_programming" target="_blank" rel="noopener noreferrer"><code>面向对象编程(Object-Oriented Programming,OOP)</code></a> 的补充,<code>面向对象编程</code>的核心概念是<code>类</code>,而<code>面向切面编程</code>的核心概念是<code>切面(aspect)</code>.</p><p><code>AOP</code>把<a href="https://en.wikipedia.org/wiki/Cross-cutting_concern" target="_blank" rel="noopener noreferrer"><code>横切关注点(cross-cutting concerns)</code></a> 从业务逻辑中分离出来.<code>横切关注点</code>是指那些影响多个模块的问题,例如日志记录、事务管理、安全性、缓存等.</p><p>通过将这些功能模块化,<code>AOP</code>使得<code>关注点</code>与<code>业务逻辑</code>分离,从而提高了程序的可重用性,也有利于代码的阅读和维护.</p><h2 id="底层实现" tabindex="-1"><a class="header-anchor" href="#底层实现"><span>底层实现</span></a></h2><p><code>AOP</code>的底层实现是基于<a href="https://www.baeldung.com/java-dynamic-proxies" target="_blank" rel="noopener noreferrer"><code>动态代理(dynamic proxy)</code></a>的,它有两种实现方式:</p><ol><li><strong>基于接口的动态代理</strong> - 基于<a href="https://docs.oracle.com/javase/8/docs/technotes/guides/reflection/proxy.html" target="_blank" rel="noopener noreferrer"><code>JDK动态代理</code></a>实现,它要求目标类必须实现一个接口.</li><li><strong>基于子类的动态代理</strong> - 主流的包括<a href="https://www.baeldung.com/aspectj" target="_blank" rel="noopener noreferrer"><code>AspectJ</code></a> 和<a href="https://www.baeldung.com/cglib" target="_blank" rel="noopener noreferrer"><code>CGLIB</code></a>实现,它不要求目标类实现接口.</li></ol><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><p><code>AOP</code>的应用场景很多,例如:</p><ol><li><strong>日志记录</strong> - 跟踪方法的调用,记录方法的执行时间等.</li><li><strong>性能统计</strong> - 统计方法的执行时间.</li><li><strong>安全性</strong> - 在方法执行之前执行权限检查.</li><li><strong>事务管理</strong> - 事务的自动化管理.</li><li><strong>异常处理</strong> - 在方法执行过程中捕获异常,并记录到日志中.</li><li><strong>缓存</strong> - 通过缓存提高方法的执行效率.</li><li><strong>数据校验</strong> - 在方法执行之前对数据进行校验,例如校验数据的完整性、有效性等.</li></ol><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>要使用<code>Spring AOP</code>,首先需要引入<code>spring-boot-starter-aop</code>依赖:</p>',12),g=i("div",{class:"language-gradle line-numbers-mode","data-highlighter":"shiki","data-ext":"gradle","data-title":"gradle",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",null,'implementation("org.springframework.boot:spring-boot-starter-aop:3.2.1")')])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"})])],-1),u=i("div",{class:"language-xml line-numbers-mode","data-highlighter":"shiki","data-ext":"xml","data-title":"xml",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"dependency"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"groupId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">org.springframework.boot</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"groupId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"artifactId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">spring-boot-starter-aop</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"artifactId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">3.2.1</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"dependency"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),v=l(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>在<code>Spring Boot</code>中使用<code>AOP</code> 非常简单,首先需要定义要做的就是定义<a href="https://www.javadoc.io/doc/org.aspectj/aspectjrt/latest/org/aspectj/lang/annotation/Pointcut.html" target="_blank" rel="noopener noreferrer"><code>关注点(Pointcut)</code></a> ,多个<code>关注点</code> 可以组成一个<a href="https://www.javadoc.io/doc/org.aspectj/aspectjrt/latest/org/aspectj/lang/annotation/Aspect.html" target="_blank" rel="noopener noreferrer"><code>切面(Aspect)</code></a>:</p><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Aspect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Configuration</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@ConditionalOnEnableResilience</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RateLimitAutoConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Pointcut</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;@annotation(cn.dongjak.extension.resilience.ratelimit.RateLimiter)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> lockPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就是定义<a href="https://www.javadoc.io/doc/org.aspectj/aspectjrt/latest/org/aspectj/lang/annotation/Around.html" target="_blank" rel="noopener noreferrer"><code>通知(Advice)</code></a>,<code>通知</code> 围绕在<code>关注点</code>的不同阶段执行具体的逻辑,比如记录日志、抛出异常等等:</p><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Aspect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Configuration</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@ConditionalOnEnableResilience</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> RateLimitAutoConfiguration</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Pointcut</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;@annotation(cn.dongjak.extension.resilience.ratelimit.RateLimiter)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> lockPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Around</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;lockPoint()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> around</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(joinPoint: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ProceedingJoinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Any</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="切入点-pointcut-表达式" tabindex="-1"><a class="header-anchor" href="#切入点-pointcut-表达式"><span>切入点(Pointcut)表达式</span></a></h2><p><code>切入点(Pointcut)</code>表达式用来匹配<code>连接点(JoinPoint)</code>,从而确定在何处应用<code>通知(Advice)</code>.</p><h3 id="匹配所有包含指定参数的方法" tabindex="-1"><a class="header-anchor" href="#匹配所有包含指定参数的方法"><span>匹配所有包含指定参数的方法</span></a></h3><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;"> org.aspectj.lang.annotation.Aspect</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;"> org.aspectj.lang.annotation.Pointcut</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;"> org.aspectj.lang.annotation.Before</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;"> org.aspectj.lang.JoinPoint</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF;"> org.springframework.stereotype.Component</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Aspect</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> OpenAIClientAspect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 匹配任何包含OpenAIClient类型参数的方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Pointcut</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;execution(* *(.., com.yourpackage.OpenAIClient, ..))&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> withOpenAIClientParameter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 在调用方法之前执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Before</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;withOpenAIClientParameter()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> beforeMethodWithOpenAIClient</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(joinPoint: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">JoinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        // 你可以在这里实现你的逻辑</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">        println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Method </span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">\${</span><span style="--shiki-light:#032F62;--shiki-dark:#ABB2BF;">joinPoint.signature.name</span><span style="--shiki-light:#032F62;--shiki-dark:#C678DD;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> is called with OpenAIClient parameter.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的切入点表达式<code>execution(* *(.., com.yourpackage.OpenAIClient, ..))</code></p><p>其中:</p><ul><li><code>execution</code> - 匹配方法执行</li><li><code>*</code> - 匹配任何返回类型的方法</li><li><code>*</code> - 匹配任何类的任何方法</li><li><code>(.., com.yourpackage.OpenAIClient, ..)</code> - 匹配<strong>方法参数列表中任意位置包含OpenAIClient类型参数</strong>的方法.这里假设<code>OpenAIClient</code>类位于<code>com.yourpackage</code>包中.</li></ul><h2 id="通知-advice-类型" tabindex="-1"><a class="header-anchor" href="#通知-advice-类型"><span>通知(Advice)类型</span></a></h2><p>在SpringAOP中,主要包括以下几种类型的通知:</p><ol><li><ul><li></li></ul><em><a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/aop/BeforeAdvice.html" target="_blank" rel="noopener noreferrer">Before</a>( 前置通知)</em>* - 在连接点方法执行之前执行的通知,不影响连接点的执行,除非抛出异常.</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Before</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;somePointcut()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> beforeAdvice</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">JoinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> joinPoint) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><ul><li></li></ul><em><a href="https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/aop/AfterReturningAdvice.html" target="_blank" rel="noopener noreferrer">AfterReturning</a>( 返回后通知)</em>* - 在连接点方法成功执行之后执行的通知</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">AfterReturning</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    pointcut</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;somePointcut()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    returning</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;result&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> afterReturningAdvice</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">JoinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> joinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> result) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>AfterThrowing</strong>(异常通知) - 如果连接点方法通过抛出异常退出,则执行这个通知.</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">AfterThrowing</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    pointcut</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;somePointcut()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    throwing</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;error&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> afterThrowingAdvice</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">JoinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> joinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Throwable</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> error) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>After</strong>(最终通知) - 当连接点方法退出时执行的通知,无论是正常返回还是抛出异常.</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">After</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;somePointcut()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> afterAdvice</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">JoinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> joinPoint) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><strong>Around</strong>(环绕通知) - 环绕通知可以在方法调用前后执行,并决定是否继续执行连接点(即目标方法),或者自定义返回值或异常.</li></ol><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Around</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;somePointcut()&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> Object</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> aroundAdvice</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ProceedingJoinPoint</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> joinPoint) throws Throwable {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><h3 id="在kotlin中针对service的aop不生效" tabindex="-1"><a class="header-anchor" href="#在kotlin中针对service的aop不生效"><span>在<code>kotlin</code>中针对<code>Service</code>的<code>AOP</code>不生效</span></a></h3><p>确保<code>Service</code>类和方法都是<code>open</code>的:</p><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Service</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">open</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> HiChatService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> userService: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">HiUserService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">   @CountUsage</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;body.model&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">   open</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> chat</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(user: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">IUser</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, body: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ChatRequestBody</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ChatResponse</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">   }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以用<code>kotlin</code>的<a href="https://kotlinlang.org/docs/all-open-plugin.html#gradle" target="_blank" rel="noopener noreferrer"><code>allopen</code></a>插件把所有<code>@Service</code>类全部默认设置为<code>open</code>:</p><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">configure</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">AllOpenExtension</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">     annotation</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;org.springframework.stereotype.Service&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function y(B,m){const t=r("CodeTabs");return k(),p("div",null,[c,d(t,{id:"79",data:[{id:"Gradle KTS"},{id:"Maven"}],active:0,"tab-id":"dynamicProps"},{title0:a(({value:n,isActive:e})=>[s("Gradle KTS")]),title1:a(({value:n,isActive:e})=>[s("Maven")]),tab0:a(({value:n,isActive:e})=>[g]),tab1:a(({value:n,isActive:e})=>[u]),_:1}),v])}const A=h(o,[["render",y],["__file","简介.html.vue"]]),E=JSON.parse('{"path":"/Programming/SpringBoot/Aop/%E7%AE%80%E4%BB%8B.html","title":"简介","lang":"zh-CN","frontmatter":{"title":"简介","comment":false,"editLink":false,"prev":false,"next":false,"order":1,"description":"简介 面向切面编程(Aspect-Oriented Programming,AOP) 是一种编程范式.它是对面向对象编程(Object-Oriented Programming,OOP) 的补充,面向对象编程的核心概念是类,而面向切面编程的核心概念是切面(aspect). AOP把横切关注点(cross-cutting concerns) 从业务逻辑中...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/SpringBoot/Aop/%E7%AE%80%E4%BB%8B.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"简介 面向切面编程(Aspect-Oriented Programming,AOP) 是一种编程范式.它是对面向对象编程(Object-Oriented Programming,OOP) 的补充,面向对象编程的核心概念是类,而面向切面编程的核心概念是切面(aspect). AOP把横切关注点(cross-cutting concerns) 从业务逻辑中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"底层实现","slug":"底层实现","link":"#底层实现","children":[]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"切入点(Pointcut)表达式","slug":"切入点-pointcut-表达式","link":"#切入点-pointcut-表达式","children":[{"level":3,"title":"匹配所有包含指定参数的方法","slug":"匹配所有包含指定参数的方法","link":"#匹配所有包含指定参数的方法","children":[]}]},{"level":2,"title":"通知(Advice)类型","slug":"通知-advice-类型","link":"#通知-advice-类型","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[{"level":3,"title":"在kotlin中针对Service的AOP不生效","slug":"在kotlin中针对service的aop不生效","link":"#在kotlin中针对service的aop不生效","children":[]}]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":3.92,"words":1175},"filePathRelative":"Programming/SpringBoot/Aop/简介.md","localizedDate":"2024年7月3日","autoDesc":true}');export{A as comp,E as data};
