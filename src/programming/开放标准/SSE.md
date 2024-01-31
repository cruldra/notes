---
title: SSE
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

`服务器发送事件(Server-SentEvents,SSE)`是`HTML5`规范的一部分,是一种允许服务器通过`HTTP`连接向客户端推送实时消息的技术

## 主要特点

* **单向通信** - 服务器到客户端的单向连接,客户端不能通过这个连接发送信息给服务器.
* **自动重新连接** - 如果连接意外断开,浏览器会自动尝试重新连接.
* **简单易用** - `API`简单,开发者很容易实现.
* **基于文本** - 消息基于文本,可以是`纯文本`或者是`JSON`格式等.
* **HTTP协议** - 使用标准的HTTP协议,不需要额外的协议支持.

## 工作流程

<script setup lang="ts">
const images = [{src:'https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240103/sse.3zc0tpet44e0.svg',alt:''}]

</script>

<ImageRenderer :value="images" width="500" height="200"/>

1. `浏览器(Browser)`向`服务器(Server)`发起一个HTTP请求到某个事件流端点(例如/events).
2. 服务器响应这个请求,返回`HTTP`状态码`200`,并设置`Content-Type`为`text/event-stream`.同时,服务器保持HTTP连接打开.
3. 每次有新消息时,服务器通过这个保持打开的连接将`消息`按照[指定的格式](#消息格式)推送到浏览器

## 消息格式

一个标准的`SSE`消息格式如下:

```text
data: message data \n\n
```

```kotlin
emitter.send(SseEmitter.event().data("${it}\n\n"));
```

也可以自定义消息格式,比如任意`json`字符串,然后通过自定义事件发送:

```kotlin
emitter.send(SseEmitter.event().name("customEvent").data("{name:'11'}"));
```

## 与`WebSocket`的区别

`SSE`经常拿来与`WebSocket`进行比较,下面列出了它们之间主要的区别:

* `WebSocket`提供了一个[`全双工`](./全双工通信.md)的通信通道,即`客户端`和`服务器`都可以随时发送消息.而`SSE`
  是单向的,只能由服务器向客户端发送消息.
* `WebSocket`需要特殊的服务器支持,因为它不是普通的`HTTP`协议.而`SSE`可以通过任何支持`HTTP`的服务器实现,更容易与现有的Web基础设施集成.

## 应用场景

`SSE`适合那些**仅服务器需要实时向客户端推送消息**的场景,下面是几个比较经典的应用场景:

* **实时通知和更新** - 比如说,社交网络中的新消息通知,股票市场中的股价变动通知等.
* **实时数据仪表盘** - 比如说数据采集中心通过`SSE`实时更新各种指标数据
* **在线协作工具** - 在线协作工具(如文档编辑、项目管理工具等)可以利用`SSE`
  来同步各个用户的操作和更改.当一个用户在协作文档上做出更改时,这些更改可以立即被推送到所有正在查看或编辑该文档的其他用户

## 使用

### 服务端

* [在`Spring Web MVC`中使用`SSE`](../../JVM/SpringBoot/WebMvc/SSE.md)

### 客户端

#### 浏览器

在浏览器中使用`SSE`客户端需要用到[`EventSource`](https://developer.mozilla.org/en-US/docs/Web/API/EventSource)这个类

一个`EventSource`实例会对`HTTP`服务器开启一个持久化的连接,接受服务端以`text/event-stream`
格式发送过来的事件,连接会一直保持开启直到通过调用`EventSource.close()`关闭。

```js
var eventSource = new EventSource('/path/to/sse');

eventSource.onmessage = function (event) {
    console.log('Received message:', event.data);
};

eventSource.onerror = function (event) {
    console.error('Error occurred:', event);
};

// 监听自定义事件
eventSource.addEventListener('myevent', function (event) {
    console.log('Received custom event:', event.data);
});
```

#### `okHttp`

```kotlin
class DefaultOpenAIClient(
    private val openApiKey: String,
    override val endpoint: String = "https://api.openai.com/v1"

) : OpenAIClient {
    private val httpClient by lazy {

        OkHttpClient.Builder()
            .callTimeout(Duration.ofDays(1))
            .readTimeout(Duration.ofDays(1))
            .connectTimeout(Duration.ofSeconds(30))
            .addInterceptor(OpenAiApiExceptionInterceptor())
            .addInterceptor(CurlInterceptor(object : Logger {
                override fun log(message: String) {
                    log.info(message)
                }
            }))
            .build()
    }
    override fun chatCompletions(body: ChatRequestBody): ChatResponse {
        val request = Request.Builder()
            .url("${endpoint}/chat/completions")
            .post(body.toRequestBody(MediaTypes.JSON))
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer $openApiKey")
            .build()
        val resp = httpClient.newCall(request).execute()
        resp.use {
            // 获取响应体的数据源
            val source: BufferedSource = resp.body?.source() ?: throw OpenAiException.EMPTY_RESPONSE()
            // 循环直到服务器关闭流
            while (!source.exhausted()) {
                // 读取下一行数据
                val line = source.readUtf8Line()
                println(line)
            }
        }
     
     }
    
}

```

## 参考

- [MDN: Server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events)
- [Server-Sent Events 教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)
