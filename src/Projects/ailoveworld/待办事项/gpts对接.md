---
title: gpts对接
comment: false
editLink: false
prev: false
next: false
---


## 第一版

- [x] [数据库]机器人表加一个属性把普通的机器人和gpts机器人区分开
- [x] [客户端]创建会话的时候,普通机器人直接往`indexeddb`里面存,`gpts`机器人要后台发请求调用`Create thread`接口
- [x] [客户端]调用`run`接口完成会话
- [x] [客户端][对接插件](#插件对接)

### 插件对接

![](../assets/插件调用流程.png)
