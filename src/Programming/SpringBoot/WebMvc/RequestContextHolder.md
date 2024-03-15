---
title: RequestContextHolder
comment: false
editLink: false
prev: false
next: false
---

## 简介

[RequestContextHolder](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/context/request/RequestContextHolder.html)
用于**在请求的生命周期内共享和传递数据**

1. 向请求上下文中设置属性

```java
@Controller
public class MyController {
    @GetMapping("/test")
    public String test() {
        // 获取当前请求的属性
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        
        // 设置请求范围内的属性
        requestAttributes.setAttribute("key", "value", RequestAttributes.SCOPE_REQUEST);
        
        return "test";
    }
}
```

2. 从请求上下文中获取属性

```java
@Service
public class MyService {
    public void doSomething() {
        // 获取当前请求的属性
        RequestAttributes requestAttributes = RequestContextHolder.getRequestAttributes();
        
        // 获取请求范围内的属性
        Object value = requestAttributes.getAttribute("key", RequestAttributes.SCOPE_REQUEST);
        
        // ...
    }
}
```
