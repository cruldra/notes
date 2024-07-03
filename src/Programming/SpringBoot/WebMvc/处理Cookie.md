---
title: 处理Cookie
comment: false
editLink: false
prev: false
next: false
---

## 读取`Cookie`

## 设置`Cookie`

可以用`HttpServletResponse`对象的`addCookie`方法来设置`Cookie`,但是不支持`SameSite`属性

```kotlin

class AuthController {

    @GetMapping("/login")
    fun login(response: HttpServletResponse) {
        val cookie = Cookie("token", "123456")
        cookie.path = "/"
        cookie.maxAge = 60 * 60 * 24 * 7
        response.addCookie(cookie)
    }

}
```

要支持`SameSite`属性,可以使用`Spring Web`提供的[ResponseCookie](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/ResponseCookie.html)对象

```kotlin

import org.springframework.http.ResponseCookie

class AuthController {

    @GetMapping("/login")
    fun login(response: HttpServletResponse) {
        val cookie = ResponseCookie.from("token", "123456")
            .path("/")
            .maxAge(Duration.ofDays(7))
            .sameSite("Strict")
            .build()
        response.addHeader(HttpHeaders.SET_COOKIE, cookie.toString())
    }

}
```
