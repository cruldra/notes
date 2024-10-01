---
title: Javalin
comment: false
editLink: false
prev: false
next: false
---

## 简介

[Javalin](https://javalin.io/)是一个轻量级的`Java Web`框架.


##  安装

```xml
<dependency>
    <groupId>io.javalin</groupId>
    <artifactId>javalin</artifactId>
    <version>6.3.0</version>
</dependency>
```

## 使用

1. 首先创建一个`Javalin`实例

```kotlin
val app = Javalin.create().start(appIni["APP", "Port"]?.toInt() ?: 7001)
```

2. 注册路由

```kotlin
app.post("/videos") { ctx ->
}
```
## 配置

### 自定义`ObjectMapper`

```kotlin
val app = Javalin.create { config ->
    config.jsonMapper(JavalinJackson(objectMapper))
}.start(port)
```

## 插件

### AuthenticationPlugin

这个插件用来验证`Authorization`请求头

```kotlin
class AuthenticationPlugin(userConfig: Consumer<Config>? = null) :
    Plugin<AuthenticationPlugin.Config>(userConfig, Config()) {

    data class Config(
        var excludedPaths: Set<String> = setOf(),
        var validateToken: (String) -> Boolean = { false }
    )

    override fun onStart(config: JavalinConfig) {
        config.router.mount {
            it.before(authenticationHandler)
        }
    }

    private val authenticationHandler = Handler { ctx ->
        if (shouldAuthenticate(ctx)) {
            val token = ctx.header("Authorization")
            if (token == null || !pluginConfig.validateToken(token.removePrefix("Bearer "))) {
                ctx.status(401).json(mapOf("error" to "Unauthorized"))
                ctx.skipRemainingHandlers()
            }
        }
    }

    private fun shouldAuthenticate(ctx: Context): Boolean {
        return !pluginConfig.excludedPaths.contains(ctx.path())
    }

    override fun name() = "AuthenticationPlugin"
}
```

示例:

```kotlin
// 使用示例
fun main() {
    val app = Javalin.create { config ->
        config.registerPlugin(AuthenticationPlugin { pluginConfig ->
            pluginConfig.excludedPaths = setOf("/public", "/login")
            pluginConfig.validateToken = { token ->
                // 这里实现你的token验证逻辑
                token == "valid_token"
            }
        })
    }.start(7000)

    app.get("/") { ctx -> ctx.result("Protected route") }
    app.get("/public") { ctx -> ctx.result("Public route") }
}
```
