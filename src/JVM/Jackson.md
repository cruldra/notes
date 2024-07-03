---
title: Jackson
comment: false
editLink: false
prev: false
next: false
---

## 简介

## 多态反序列化(Polymorphic Deserialization)

假设有这么几个类

```kotlin
interface Tool {
    val type: String
}

class CodeInterpreterTool : Tool {
    override val type: String
        get() = "code_completion"
}

class RetrievalTool : Tool {
    override val type: String
        get() = "retrieval"
}
```

对于`json`字符串`{"type": "retrieval"}`,希望根据`type`的值来反序列化成对应的类

比如说`type=retrieval`时反序列化成`RetrievalTool`类,`type=code_completion`时反序列化成`CodeInterpreterTool`类.

此时就可以使用`Jackson`的`多态反序列化(Polymorphic Deserialization)`特性来实现这个需求

```kotlin
import com.fasterxml.jackson.annotation.JsonSubTypes
import com.fasterxml.jackson.annotation.JsonTypeInfo
import com.fasterxml.jackson.databind.ObjectMapper
import com.fasterxml.jackson.module.kotlin.KotlinModule
import com.fasterxml.jackson.module.kotlin.readValue

@JsonTypeInfo(
    use = JsonTypeInfo.Id.NAME,
    include = JsonTypeInfo.As.PROPERTY,
    property = "type"
)
@JsonSubTypes(
    JsonSubTypes.Type(value = CodeInterpreterTool::class, name = "code_completion"),
    JsonSubTypes.Type(value = RetrievalTool::class, name = "retrieval")
)
interface Tool {
    val type: String
}

class CodeInterpreterTool : Tool {
    override val type: String
        get() = "code_completion"
}

class RetrievalTool : Tool {
    override val type: String
        get() = "retrieval"
}

fun main() {
    val json = """{ "type": "retrieval" }"""

    val mapper = ObjectMapper().registerModule(KotlinModule())

    val tool: Tool = mapper.readValue(json)

    when (tool) {
        is CodeInterpreterTool -> println("This is a CodeInterpreterTool")
        is RetrievalTool -> println("This is a RetrievalTool")
    }
}

```

### 参考

* [@JsonSubTypes vs. Reflections for Polymorphic Deserialization in Jackson | Baeldung](https://www.baeldung.com/java-jackson-polymorphic-deserialization)
