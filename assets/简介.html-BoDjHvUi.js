import{_ as p,r as a,o as d,c as g,d as s,w as t,a as i,b as e,e as l}from"./app-Bmelea3n.js";const k={},u=l('<p><code>Spring Security</code>是一个强大且高度可定制的认证和访问控制框架,它为基于<code>Spring</code>的应用程序提供了全面的安全服务</p><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能"><span>主要功能</span></a></h2><h3 id="认证-authentication" tabindex="-1"><a class="header-anchor" href="#认证-authentication"><span>认证(Authentication)</span></a></h3><p><strong>认证是指对资源采取保护措施的过程,至于是否需要采取这一措施大部分情况下取决于资源的价值</strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>认证在日常生活中随处可见,比如去电影院看电影要买票,买票这个过程就是认证的过程</p></div><p><code>Spring Security</code>中和<code>认证</code>相关的核心接口和类如下图:</p>',6),y=i("h3",{id:"授权-authorization",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#授权-authorization"},[i("span",null,"授权(Authorization)")])],-1),m=i("p",null,[i("strong",null,"授权是指已经通过认证的用户是否有权限执行特定操作.它是认证的延伸,用于实现细粒度的访问控制")],-1),B=i("p",null,[i("code",null,"Spring Security"),e("中和"),i("code",null,"授权"),e("相关的核心接口和类如下图:")],-1),b=l('<h2 id="工作方式" tabindex="-1"><a class="header-anchor" href="#工作方式"><span>工作方式</span></a></h2><p><strong><code>Spring Security</code>通过一系列的<code>Servlet</code>过滤器来保护Web请求.</strong></p><p>这些过滤器负责不同的安全功能,例如检查用户是否已经登录、检查用户是否有权执行特定操作等.</p><p>下面这张表列出了<code>Spring Security</code>中几个主要的过滤器及其作用:</p><table><thead><tr><th>过滤器</th><th>简介</th></tr></thead><tbody><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/authentication/UsernamePasswordAuthenticationFilter.html" target="_blank" rel="noopener noreferrer">UsernamePasswordAuthenticationFilter</a></td><td>用于处理基于表单的登录请求.它会拦截/login请求并尝试进行认证</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/authentication/www/BasicAuthenticationFilter.html" target="_blank" rel="noopener noreferrer">BasicAuthenticationFilter</a></td><td>用于处理HTTP基本认证</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/authentication/rememberme/RememberMeAuthenticationFilter.html" target="_blank" rel="noopener noreferrer">RememberMeAuthenticationFilter</a></td><td>用于处理&quot;记住我&quot;认证请求</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/authentication/logout/LogoutFilter.html" target="_blank" rel="noopener noreferrer">LogoutFilter</a></td><td>用于处理用户的登出请求</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/csrf/CsrfFilter.html" target="_blank" rel="noopener noreferrer">CsrfFilter</a></td><td>用于处理跨站请求伪造</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/access/ExceptionTranslationFilter.html" target="_blank" rel="noopener noreferrer">ExceptionTranslationFilter</a></td><td>用于处理认证过程中抛出的异常</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/access/intercept/FilterSecurityInterceptor.html" target="_blank" rel="noopener noreferrer">FilterSecurityInterceptor</a></td><td>用于在过滤器链结束前检查访问资源的权限</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/authentication/AnonymousAuthenticationFilter.html" target="_blank" rel="noopener noreferrer">AnonymousAuthenticationFilter</a></td><td>为没有提供凭证的请求提供一个匿名Authentication,通常用于允许匿名用户访问某些资源</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/session/SessionManagementFilter.html" target="_blank" rel="noopener noreferrer">SessionManagementFilter</a></td><td>用于处理会话管理</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/session/ConcurrentSessionFilter.html" target="_blank" rel="noopener noreferrer">ConcurrentSessionFilter</a></td><td>用于处理并发会话控制</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/savedrequest/RequestCacheAwareFilter.html" target="_blank" rel="noopener noreferrer">RequestCacheAwareFilter</a></td><td>用于处理请求缓存</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/servletapi/SecurityContextHolderAwareRequestFilter.html" target="_blank" rel="noopener noreferrer">SecurityContextHolderAwareRequestFilter</a></td><td>用于处理SecurityContextHolder中的SecurityContext与HttpServletRequest之间的交互</td></tr><tr><td><a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/authentication/preauth/AbstractPreAuthenticatedProcessingFilter.html" target="_blank" rel="noopener noreferrer">TokenAuthenticationFilter</a></td><td>用于处理基于Token的认证请求,并将认证结果封装成Authentication对象</td></tr></tbody></table><p>上面这些过滤器组成了<code>Spring Security</code>的<a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/SecurityFilterChain.html" target="_blank" rel="noopener noreferrer">过滤器链-SecurityFilterChain</a>,它会在合适的时机依次调用过滤器链中的过滤器来实现对Web请求的保护.</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>关于<code>Spring Security架构</code>的更多信息,可能参考这里:<a href="https://docs.spring.io/spring-security/reference/servlet/architecture.html" target="_blank" rel="noopener noreferrer">Spring Security Architecture</a></p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>',8),f=i("div",{class:"language-xml line-numbers-mode","data-highlighter":"shiki","data-ext":"xml","data-title":"xml",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"}),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"dependency"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"groupId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">org.springframework.boot</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"groupId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"artifactId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">spring-boot-starter-security</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"artifactId"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"    <"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">3.1.4</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"version"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"</"),i("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"dependency"),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},">")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),F=i("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"//"),i("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security")]),e(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"implementation("),i("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},'"org.springframework.boot:spring-boot-starter-security:3.1.4"'),i("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},")")])])]),i("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[i("div",{class:"line-number"}),i("div",{class:"line-number"})])],-1),A=l(`<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>大部分情况下我们都需要自定义<code>Spring Security</code>的配置以适应我们的业务需求.</p><p><a href="#%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F">工作方式</a>这里提到了<code>Spring Security</code>使用一系列的<code>Servlet</code>过滤器来保护Web请求,这些过滤器组成了<code>Spring Security</code>的<a href="https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/web/SecurityFilterChain.html" target="_blank" rel="noopener noreferrer">过滤器链-SecurityFilterChain</a></p><p><strong>所以我们对<code>Spring Security</code>进行定制化配置实际上就是修改这个过滤器链.</strong></p><div class="language-kotlin line-numbers-mode" data-highlighter="shiki" data-ext="kotlin" data-title="kotlin" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">@EnableWebSecurity</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> SecurityConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Bean</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">    @Throws</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(Exception::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    fun</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> filterChain</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(http: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">HttpSecurity</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">): </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">SecurityFilterChain</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">authorizeHttpRequests</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            it.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">anyRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">authenticated</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">csrf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">            it.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">disable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),E={class:"hint-container tip"},v=i("p",{class:"hint-container-title"},"提示",-1),S=i("li",null,[i("a",{href:"https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/configuration/EnableWebSecurity.html",target:"_blank",rel:"noopener noreferrer"},"@EnableWebSecurity"),e(" 通常和@Configuration一起用于自定义安全配置")],-1),_=i("a",{href:"https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/configuration/EnableWebSecurity.html",target:"_blank",rel:"noopener noreferrer"},"@EnableWebSecurity",-1),C=i("code",null,"SpringSecurity",-1),w=i("code",null,"/login",-1),x=i("h2",{id:"参考",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#参考"},[i("span",null,"参考")])],-1),M=i("ul",null,[i("li",null,[i("a",{href:"https://www.baeldung.com/spring-security-method-security",target:"_blank",rel:"noopener noreferrer"},"Introduction to Spring Method Security | Baeldung")]),i("li",null,[i("a",{href:"https://poe.com/s/pFij7ngb1cSUQgk5N7TD",target:"_blank",rel:"noopener noreferrer"},"spring security中的核心概念及组件")])],-1);function T(D,L){const o=a("Mermaid"),h=a("CodeTabs"),c=a("RouteLink");return d(),g("div",null,[u,s(o,{id:"mermaid-20",code:"eJydkstKw0AUhvc+xdBVozbgZSWloC2I4A3qsptpMo0j6UyZTAsiFuoddOHChQouiiIFrV0KFvFlmjS+hbm2uYnFWc75z/n+83MkFWpaAUOFweoUsJ6MGZI4pgSs7DgfjgJsM0wkXIMqOHB+7ZfNrhGOWAVKKJcb/c4ABfFNWEVpARS51aYESrhaUzHS0sV6ec/CCKBMqYogcSSHAd5yne8iwrEEHS8TQfMMyXYPVDWLveUQworRFr/UbSplmNsWBZCnqupm0Vxl0KLKfn2/Ge4rIA5xMhVrgVWQbEmCK7sazSWPRZ5EAA2K5T+y2YAEKohNEBEMMNLhIUJkqMcMHQBtYBmxOM5L1i3bGaxjjTfD8/xyMLd/2olcRiaTGx+nI4g6FcVccmQJ4/ye6UwmyQKhHIEKZVETKb17qx91zLcns9cafLWNVm9Wvzo1Ll9LZE4c+1sCg/6j2e4MbzrGxfvw/sT8eBn0P92OEpkXQeCGY2L9vDsaXyILouPCO9eY2Hg4/r679sWLIvBuNG6h9zzsn7nC1NQPcsx7KQ=="}),y,m,B,s(o,{id:"mermaid-30",code:"eJxtjrEOwjAMRPd8hcci+glVUSkLA2LhB9zELUYhqRKXBdFvJw0SohI3np/vTluM8cA4BLwrSDIcSAt7B/tLNjIBjdaUQNIc0+2EDgcK8MzEoqo6OqHQo6a6/rpbMOnDUNFMciUnrHGJLuHc3VJLCa239lM3t971PDQigbtJaN7Aw7P5iYrTOPogsWiXRfMuEZ33ltD9hdZxa/allHoDF81PVQ=="}),b,s(h,{id:"172",data:[{id:"maven"},{id:"gradle-kts"}],active:0,"tab-id":"安装springboot-security"},{title0:t(({value:r,isActive:n})=>[e("maven")]),title1:t(({value:r,isActive:n})=>[e("gradle-kts")]),tab0:t(({value:r,isActive:n})=>[f]),tab1:t(({value:r,isActive:n})=>[F]),_:1}),A,i("div",E,[v,i("ol",null,[S,i("li",null,[e("如果不添加"),_,e("这个注解,"),C,e("的"),s(c,{to:"/Programming/SpringBoot/Security/%E9%BB%98%E8%AE%A4%E9%85%8D%E7%BD%AE.html"},{default:t(()=>[e("默认配置")]),_:1}),e("会生效,导致所有未经认证的请求被重定向到"),w,e("页面")])])]),x,M])}const I=p(k,[["render",T],["__file","简介.html.vue"]]),P=JSON.parse('{"path":"/Programming/SpringBoot/Security/%E7%AE%80%E4%BB%8B.html","title":"简介","lang":"zh-CN","frontmatter":{"title":"简介","comment":false,"editLink":false,"prev":false,"next":false,"order":1,"description":"Spring Security是一个强大且高度可定制的认证和访问控制框架,它为基于Spring的应用程序提供了全面的安全服务 主要功能 认证(Authentication) 认证是指对资源采取保护措施的过程,至于是否需要采取这一措施大部分情况下取决于资源的价值 提示 认证在日常生活中随处可见,比如去电影院看电影要买票,买票这个过程就是认证的过程 Spr...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/Programming/SpringBoot/Security/%E7%AE%80%E4%BB%8B.html"}],["meta",{"property":"og:site_name","content":"一星的臭弟弟"}],["meta",{"property":"og:title","content":"简介"}],["meta",{"property":"og:description","content":"Spring Security是一个强大且高度可定制的认证和访问控制框架,它为基于Spring的应用程序提供了全面的安全服务 主要功能 认证(Authentication) 认证是指对资源采取保护措施的过程,至于是否需要采取这一措施大部分情况下取决于资源的价值 提示 认证在日常生活中随处可见,比如去电影院看电影要买票,买票这个过程就是认证的过程 Spr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-03T23:01:39.000Z"}],["meta",{"property":"article:author","content":"Cruldra"}],["meta",{"property":"article:modified_time","content":"2024-07-03T23:01:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-03T23:01:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Cruldra\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"主要功能","slug":"主要功能","link":"#主要功能","children":[{"level":3,"title":"认证(Authentication)","slug":"认证-authentication","link":"#认证-authentication","children":[]},{"level":3,"title":"授权(Authorization)","slug":"授权-authorization","link":"#授权-authorization","children":[]}]},{"level":2,"title":"工作方式","slug":"工作方式","link":"#工作方式","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1720047699000,"updatedTime":1720047699000,"contributors":[{"name":"cruldra","email":"cruldra@gmail.com","commits":1}]},"readingTime":{"minutes":3.46,"words":1039},"filePathRelative":"Programming/SpringBoot/Security/简介.md","localizedDate":"2024年7月3日","autoDesc":true}');export{I as comp,P as data};
