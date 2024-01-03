---
title: SSE
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

在`Spring Web MVC`中使用`SSE`
需要用到[`SseEmitter`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/mvc/method/annotation/SseEmitter.html)
这个类


## 简单的示例

```kotlin
@RestController
@RequestMapping("/api/chat")
@Tag(name = "聊天")
class HiChatEndpoint(private val service: HiChatService) {

    @Operation(summary = "发起聊天")
    @PostMapping
    fun chat(@Parameter(hidden = true) user: IUser, @RequestBody body: ChatRequestBody): SseEmitter {
        val emitter = SseEmitter()
        service.chat(user, body).onStream {
            emitter.send(SseEmitter.event().data(it));
        }
        return emitter
    }

}

```

然后我们在`Postman`中请求这个接口可以看到:
<script setup lang="ts">
const images = [{src:'https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240103/image.5x38yjy58440.png',alt:''}]
const images1 = [{src:'https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240103/image.12y56vu5xu40.png',alt:''}]

</script>

<ImageRenderer :value="images" width="1000" height="500"/>

可以看到服务器响应的`Content-Type`是`text/event-stream`

<ImageRenderer :value="images1" width="1000" height="400"/>


## 比较完整的例子

上面的例子只是简单的演示了`SseEmitter`的使用,它存在一些问题:

* **没有处理异常** - `SseEmitter.send()`方法可能会抛出异常,比如`IOException`,如果不处理这些异常,**连接可能会在发送失败时意外关闭**.
* **没有处理超时** - 可以根据具体的业务场景设置超时时间,超时时间过短会导致连接意外关闭,过长则会导致连接一直处于打开状态,浪费服务器资源.
* **没有关闭连接** - 当客户端关闭连接时,服务器应该关闭`SseEmitter`以释放资源
* **可能阻塞线程** - 如果`service.chat()`方法或其`onStream`回调是阻塞的,那么它可能会占用一个宝贵的服务器线程,直到`SSE`连接关闭

现在我们针对上面这几个问题进行改进:

```kotlin
@RestController
@RequestMapping("/api/chat")
@Tag(name = "聊天")
class HiChatEndpoint(private val service: HiChatService) {

    @Operation(summary = "发起聊天")
    @PostMapping
    fun chat(@Parameter(hidden = true) user: IUser, @RequestBody body: ChatRequestBody): SseEmitter {
       val emitter = SseEmitter()//1.设置超时
        //2.在一个异常线程中执行任务
        val executor = ThreadPoolTaskExecutor()
        executor.initialize()
        DelegatingSecurityContextAsyncTaskExecutor(executor).execute {
            text.split("\n\n").forEach {
                try { //3.处理异常
                    emitter.send(SseEmitter.event().data("${it}\n\n"));
                } catch (e: Exception) {
                    e.printStackTrace()
                }
                TimeUnit.MILLISECONDS.sleep(500)
            }
            //4.使用完成后释放
            emitter.complete()
            //5.确保SseEmitter能够被正确释放
            emitter.onCompletion { }
            emitter.onTimeout {
                emitter.complete()
            }
            emitter.onError {
                emitter.completeWithError(it)
            }
        }
        return emitter
    }

}

```

## 报错记录

* [`Unable to handle the Spring Security Exception because the response is already committed`](https://github.com/spring-projects/spring-security/issues/12758)
