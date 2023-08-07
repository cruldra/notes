---
title: PyV8
comment: false
editLink: false
prev: false
next: false
order: 1
---




## 简介

## 安装

## 一个简单的示例

```python
import PyV8

# 创建一个JSContext对象
with PyV8.JSContext() as ctxt:
    # 执行JavaScript代码
    ctxt.eval("var x = 2 + 2;")
    # 从JavaScript环境中获取x变量的值并打印
    print(ctxt.locals.x)  # 输出：4
```