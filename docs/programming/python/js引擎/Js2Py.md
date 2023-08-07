---
title: Js2Py
comment: false
editLink: false
prev: false
next: false
order: 1
---




## 简介

## 安装

```bash
pip install js2py
```

## 一个简单的示例

```python
import js2py

add = js2py.eval_js("""
...     function add(x, y) {
...         return x + y;
...     }
... """)
print(add(2, 3))  # 输出：5

```