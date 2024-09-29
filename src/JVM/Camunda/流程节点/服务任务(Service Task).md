---
title: 服务任务(Service Task)
comment: false
editLink: false
prev: false
next: false
order: 1
---


## 简介

`Service Task`是一种自动执行的任务,通常用于执行不需要人工干预的操作,如调用外部服务、处理数据或执行复杂的业务逻辑.

## 示例

1. 首先在`Camunda Modler`中创建一个`Service Task`节点,并配置`Service Task`的`Implementation`为`Java Delegate`,如图:

![](https://github.com/cruldra/picx-images-hosting/raw/master/image.39l5hlyt9v.png)

可以在[这里](https://www.alipan.com/s/Z1311iydhhj)下载这个示例的`bpmn`文件.


2. 接下来实现`Java Delegate`的代码

```kotlin
class PrintMessageDelegate : JavaDelegate {
    override fun execute(execution: DelegateExecution) {
        println("Hello from Camunda BPMN process!")
    }
}
```

3. 使用以下代码将其部署到流程引擎中

```kotlin
repositoryService.createDeployment()
    .addClasspathResource("flows/sample-process.bpmn")
    .deploy()
```

4. 启动流程

```kotlin
val processInstance = runtimeService.startProcessInstanceByKey("sample-process")
println("Process instance started: " + processInstance.id)
```

5. 查询任务状态

```kotlin
val processInstance = runtimeService.createProcessInstanceQuery().processInstanceId(processInstanceId).singleResult()
if (processInstance != null) {
    println("Running")
} else {
    println("Completed")
}
```
