---
title: Picocli
comment: false
editLink: false
prev: false
next: false
---

## 简介

[Picocli](https://picocli.info/)用于在`java`中实现命令行程序.


## 使用

### `@CommandLine.Command`

声明一个命令行程序

```kotlin

@CommandLine.Command(name = "hello", description = "Say hello
class HelloCommand :Runnable {
}
```

### `@CommandLine.Option`

创建一个命令行选项参数

```kotlin

@CommandLine.Command(name = "hello", description = "Say hello
class HelloCommand :Runnable{
    @CommandLine.Option(names = ["-n", "--name"], description = "Your name")
    var name: String? = null
    
    
    fun run() {
    println("Hello, $name!")
 }
}



```
