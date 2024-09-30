import{_ as s,o as i,c as a,e as n}from"./app-Bmelea3n.js";const e={},l=n(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>假如有如下实体类:</p><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Id</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @GeneratedValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(strategy </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> GenerationType.IDENTITY)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Long</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> name: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">? </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @OneToMany</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(mappedBy </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, fetch </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> FetchType.LAZY)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> orders: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Order</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;? </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Service</code>如下:</p><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@Service</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> UserService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> userRepository: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserRepository</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getOrdersByUserId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(userId: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Long</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Order</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> userRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">findById</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(userId).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">orElseThrow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">RuntimeException</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;User not found&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> user.orders</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getOrdersByUserId2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(userId: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Long</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Order</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> userRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">findById</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(userId).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">orElseThrow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">RuntimeException</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;User not found&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> executor </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Executors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">newSingleThreadExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> executor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">submit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            user.orders</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中,<code>getOrdersByUserId</code>可以正常工作,但是<code>getOrdersByUserId2</code>会抛出<code>LazyInitializationException</code>异常,因为<code>user.orders</code>是延迟加载的,在异步线程中访问会导致异常.</p><h2 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法"><span>解决办法</span></a></h2><h3 id="_1-使用hibernate-initialize" tabindex="-1"><a class="header-anchor" href="#_1-使用hibernate-initialize"><span>1. 使用<code>Hibernate.initialize</code></span></a></h3><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getOrdersByUserId3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(userId: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Long</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Order</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> userRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">findById</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(userId).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">orElseThrow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">RuntimeException</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;User not found&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> executor </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Executors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">newSingleThreadExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> executor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">submit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        Hibernate.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">initialize</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(user.orders)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        user.orders</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-在独立的事务中运行user-orders" tabindex="-1"><a class="header-anchor" href="#_2-在独立的事务中运行user-orders"><span>2. 在独立的事务中运行<code>user.orders</code></span></a></h3><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> UserService</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> userRepository: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">UserRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> applicationContext: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ApplicationContext</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Transactional</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(propagation </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Propagation.REQUIRES_NEW)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getUserOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(user: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Order</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> user.orders</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> getOrdersByUserId3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(userId: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Long</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">List</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Order</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt; {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> user </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> userRepository.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">findById</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(userId).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">orElseThrow</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">RuntimeException</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;User not found&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        val</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> executor </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Executors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">newSingleThreadExecutor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> executor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">submit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            applicationContext.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getBean</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(UserService::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.java).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">getUserOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(user)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="https://medium.com/@prasimjain/fetching-lazy-loaded-entity-in-async-thread-in-spring-boot-1b532f8013c7" target="_blank" rel="noopener noreferrer">Loading Lazy loaded Entity in Async Thread in Spring Boot | by Prasim Jain | Medium</a></li><li><a href="https://www.baeldung.com/hibernate-initialize-proxy-exception" target="_blank" rel="noopener noreferrer">Hibernate could not initialize proxy – no Session | Baeldung</a></li></ul>`,13),t=[l];function h(k,p){return i(),a("div",null,t)}const d=s(e,[["render",h],["__file","在异步线程中使用延迟加载.html.vue"]]),B=JSON.parse('{"path":"/Programming/SpringBoot/Data/JPA/%E5%9C%A8%E5%BC%82%E6%AD%A5%E7%BA%BF%E7%A8%8B%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD.html","title":"在异步线程中使用延迟加载","lang":"zh-CN","frontmatter":{"title":"在异步线程中使用延迟加载","comment":false,"editLink":false,"prev":false,"next":false,"description":"简介 假如有如下实体类: Service如下: 上面的例子中,getOrdersByUserId可以正常工作,但是getOrdersByUserId2会抛出LazyInitializationException异常,因为user.orders是延迟加载的,在异步线程中访问会导致异常. 解决办法 1. 使用Hibernate.initialize 2. ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/SpringBoot/Data/JPA/%E5%9C%A8%E5%BC%82%E6%AD%A5%E7%BA%BF%E7%A8%8B%E4%B8%AD%E4%BD%BF%E7%94%A8%E5%BB%B6%E8%BF%9F%E5%8A%A0%E8%BD%BD.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"在异步线程中使用延迟加载"}],["meta",{"property":"og:description","content":"简介 假如有如下实体类: Service如下: 上面的例子中,getOrdersByUserId可以正常工作,但是getOrdersByUserId2会抛出LazyInitializationException异常,因为user.orders是延迟加载的,在异步线程中访问会导致异常. 解决办法 1. 使用Hibernate.initialize 2. ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在异步线程中使用延迟加载\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"解决办法","slug":"解决办法","link":"#解决办法","children":[{"level":3,"title":"1. 使用Hibernate.initialize","slug":"_1-使用hibernate-initialize","link":"#_1-使用hibernate-initialize","children":[]},{"level":3,"title":"2. 在独立的事务中运行user.orders","slug":"_2-在独立的事务中运行user-orders","link":"#_2-在独立的事务中运行user-orders","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":0.95,"words":284},"filePathRelative":"Programming/SpringBoot/Data/JPA/在异步线程中使用延迟加载.md","localizedDate":"2024年7月3日","autoDesc":true}');export{d as comp,B as data};
