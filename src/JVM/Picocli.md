---
title: Picocli
comment: false
editLink: false
prev: false
next: false
---

## 简介

[Picocli](https://picocli.info/)用于在`Java`中创建命令行工具.

## 安装

```xml
<dependency>
    <groupId>info.picocli</groupId>
    <artifactId>picocli</artifactId>
    <version>4.7.6</version>
</dependency>
```

## 基本用法

1. 首先定义命令格式

```kotlin
import picocli.CommandLine
@CommandLine.Command(
    name = "example",
    description = ["示例程序"],
    subcommands = [
        ExampleCli.Print::class,
    ]
)
class ExampleCli {

    @CommandLine.Command(name = "print", description = ["打印helloworld"])
    class Print : Runnable {
        override fun run() {
            println("Hello World!")
        }
    }
}

```

2. 在`main`函数中启动命令行

```kotlin
fun main(args: Array<String>) {
    val cli = CommandLine(SzrApiCli())
    cli.execute(*args)
}
```

3. 调用命令行

```bash
java -jar example.jar print
```
