---
title: Cacheable
comment: false
editLink: false
prev: false
next: false
---

## 简介

[Cacheable](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/cache/annotation/Cacheable.html)
用于标记在方法执行后,其返回值应该被缓存起来,如果后续有相同的参数调用方法,则直接从缓存中获取结果,以提高效率.

## 在方法上使用`@Cacheable`

```kotlin
@Cacheable(key = "#id", value = ["openai::assistant"])
override fun getAssistant(id: String): Assistant {
    println("getAssistant")
    return apiSecretService.createOpenAiClient(false).getAssistant(id)
}
```

上面的代码将方法返回值缓存到`openai::assistant`键中,并且在下次调用`getAssistant`方法时,如果参数`id`相同,则直接从缓存中获取结果.

```kotlin
@Test
fun test3(){
    assistantService.getAssistant("asst_cqAmfVRWtH7dSkpxMDwYXZmO")
    assistantService.getAssistant("asst_cqAmfVRWtH7dSkpxMDwYXZmO")
}
```

可以看到`getAssistant`只打印了一次,说明第二次是从缓存中获取的.

```text
OpenJDK 64-Bit Server VM warning: Sharing is only supported for boot loader classes because bootstrap classpath has been appended
getAssistant
2024-03-13T11:31:50.593+08:00  INFO 12452 --- [           main] c.d.e.openai.DefaultOpenAIClient         : curl -X GET -H "Content-Type:application/json" -H "Authorization:Bearer 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" -H "OpenAI-Beta:assistants=v1" "https://openaiproxy.nexcode.top/v1//assistants/asst_cqAmfVRWtH7dSkpxMDwYXZmO"
```

## 缓存管理器

可以使用`cacheManager`属性指定使用的缓存管理器,值是一个`Spring Bean`的名称

```java
import org.springframework.cache.annotation.Cacheable;

public class SomeService {

    @Cacheable(value = "cacheName", cacheManager = "myCacheManager")
    public String someCacheableMethod(String param) {
        // 方法的实现代码
    }

}
```

### 参考

* [如何定义缓存管理器](./简介.md#缓存管理器)
