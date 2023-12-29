---
title: AOP
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[`面向切面编程(Aspect-Oriented Programming,AOP)`](https://docs.spring.io/spring-framework/reference/core/aop.html)
是一种编程范式.它是对[`面向对象编程(Object-Oriented Programming,OOP)`](https://en.wikipedia.org/wiki/Object-oriented_programming)
的补充,`面向对象编程`的核心概念是`类`,而`面向切面编程`的核心概念是`切面(aspect)`.

`AOP`把[`横切关注点(cross-cutting concerns)`](https://en.wikipedia.org/wiki/Cross-cutting_concern)
从业务逻辑中分离出来.`横切关注点`是指那些影响多个模块的问题,例如日志记录、事务管理、安全性、缓存等.

通过将这些功能模块化,`AOP`使得`关注点`与`业务逻辑`分离,从而提高了程序的可重用性,也有利于代码的阅读和维护.

## 底层实现

`AOP`的底层实现是基于[`动态代理(dynamic proxy)`](https://www.baeldung.com/java-dynamic-proxies)的,它有两种实现方式:

1. **基于接口的动态代理** -
   基于[`JDK动态代理`](https://docs.oracle.com/javase/8/docs/technotes/guides/reflection/proxy.html)实现,它要求目标类必须实现一个接口.
2. **基于子类的动态代理** - 主流的包括[`AspectJ`](https://www.baeldung.com/aspectj)
   和[`CGLIB`](https://www.baeldung.com/cglib)实现,它不要求目标类实现接口.

## 应用场景

`AOP`的应用场景很多,例如:

1. **日志记录** - 跟踪方法的调用,记录方法的执行时间等.
2. **性能统计** - 统计方法的执行时间.
3. **安全性** - 在方法执行之前执行权限检查.
4. **事务管理** - 事务的自动化管理.
5. **异常处理** - 在方法执行过程中捕获异常,并记录到日志中.
6. **缓存** - 通过缓存提高方法的执行效率.
7. **数据校验** - 在方法执行之前对数据进行校验,例如校验数据的完整性、有效性等.

## 安装

要使用`Spring AOP`,首先需要引入`spring-boot-starter-aop`依赖:

::: code-tabs#dynamicProps
@tab:active Gradle KTS

```gradle
implementation("org.springframework.boot:spring-boot-starter-aop:3.2.1")
```

@tab Maven

```xml

<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-aop</artifactId>
    <version>3.2.1</version>
</dependency>


```

:::

## 使用

在`Spring Boot`中使用`AOP`非常简单,首先需要定义要做的就是定义[`关注点(Pointcut)`](https://www.javadoc.io/doc/org.aspectj/aspectjrt/latest/org/aspectj/lang/annotation/Pointcut.html),多个`关注点`
可以组成一个[`切面(Aspect)`](https://www.javadoc.io/doc/org.aspectj/aspectjrt/latest/org/aspectj/lang/annotation/Aspect.html):

```kotlin
@Aspect 
@Configuration
@ConditionalOnEnableResilience
class RateLimitAutoConfiguration {

    @Pointcut("@annotation(cn.dongjak.extension.resilience.ratelimit.RateLimiter)")
    fun lockPoint() {
    }
}
```

然后就是定义[`通知(Advice)`](https://www.javadoc.io/doc/org.aspectj/aspectjrt/latest/org/aspectj/lang/annotation/Around.html),`通知`围绕在`关注点`的不同阶段执行具体的逻辑,比如记录日志、抛出异常等等:

```kotlin
@Aspect 
@Configuration
@ConditionalOnEnableResilience
class RateLimitAutoConfiguration {

    @Pointcut("@annotation(cn.dongjak.extension.resilience.ratelimit.RateLimiter)")
    fun lockPoint() {
    }
    
    
    @Around("lockPoint()")
    fun around(joinPoint: ProceedingJoinPoint): Any {
        // ...
    }
}

```
