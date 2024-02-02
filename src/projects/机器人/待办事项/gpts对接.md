---
title: gpts对接
comment: false
editLink: false
prev: false
next: false
order: 1
---


## 思路

- [x] [数据库]机器人表加一个属性把普通的机器人和gpts机器人区分开
- [x] [客户端]创建会话的时候,普通机器人直接往`indexeddb`里面存,`gpts`机器人要后台发请求调用`Create thread`接口
- [ ] [客户端]调用`run`接口完成会话
