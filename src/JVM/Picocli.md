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

## 位置参数

位置参数使用`@CommandLine.Parameters`注解,例如:

```kotlin
@CommandLine.Command(name = "stt", description = ["语音转文字"])
class SpeechToText : Runnable {
    @CommandLine.Parameters(index = "0", description = ["音频文件路径"])
    lateinit var audioFile: String

    @CommandLine.Option(names = ["-m", "--model"], description = ["模型名称"], required = false)
    var model: String = "default"

    override fun run() {
        println("Processing audio file: $audioFile")
        println("Using model: $model")
    }
}
```

如果要接收任意数量的位置参数,可以像这样:

```kotlin
class MyCalcParameters {
    @Parameters(description = "Any number of input numbers")
    private val files: List<BigDecimal> = ArrayList()

    @Option(names = ["-h", "--help"], usageHelp = true, description = "Display this help and exit")
    private val help = false
}
```
