---
title: RedisTemplate
comment: false
editLink: false
prev: false
next: false
---

## 简介

`RedisTemplate`是`Spring Data Redis`模块中的一个高级抽象,用于简化`Redis`数据访问,提供了一系列操作`Redis`
数据类型的便捷方法,并处理了底层资源管理和异常处理.

## 通用`Json`模板

经常有这样一种需求:

    将任意对象以`string->json(obj)`的形式存储到`Redis`中.

`dongjak-extensions-json`模块中提供的`genericJsonRedisTemplate`可以实现这个功能.

```kotlin

@Autowired
private lateinit var redisTemplate2: RedisTemplate<String, Any>

@Test
fun test2() {
    redisTemplate2.opsForValue().set("test2", HiPreferenceDto(1, "namespace", "key", "value"))
    println(redisTemplate.opsForValue().get("test2"))
}
```
