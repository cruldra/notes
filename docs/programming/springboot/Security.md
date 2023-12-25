---
title: Security
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

`Spring Security`是一个强大且高度可定制的认证和访问控制框架,它为基于`Spring`的应用程序提供了全面的安全服务

## 核心概念及组件

### Authentication(认证)

认证是指对资源采取保护措施的过程,至于是否需要采取这一措施大部分情况下取决于资源的价值

:::tip

认证在日常生活中随处可见,比如去电影院看电影要买票,买票这个过程就是认证的过程

:::

## 安装

::: code-tabs#安装springboot-security

@tab:active maven

```xml
<!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
    <version>3.1.4</version>
</dependency>

```

@tab gradle-kts

```bash
// https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security
implementation("org.springframework.boot:spring-boot-starter-security:3.1.4")
```


:::

## 配置
### @EnableWebSecurity

::: info
1. [@EnableWebSecurity](https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/configuration/EnableWebSecurity.html)通常和@Configuration一起用于自定义安全配置
2. 如果不添加[@EnableWebSecurity](https://docs.spring.io/spring-security/site/docs/current/api/org/springframework/security/config/annotation/web/configuration/EnableWebSecurity.html)这个注解,`SpringSecurity`的默认配置会生效,导致所有未经认证的请求被重定向到`/login`页面
:::

### 控制器方法权限注解
::: tip
提示容器
:::

#### 参考
* [Introduction to Spring Method Security | Baeldung](https://www.baeldung.com/spring-security-method-security)
