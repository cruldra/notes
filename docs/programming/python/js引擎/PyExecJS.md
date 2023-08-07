---
title: PyExecJS
comment: false
editLink: false
prev: false
next: false
order: 1
---




## 简介

## 安装

```bash
pip install PyExecJS
```

## 一个简单的示例

```python

import execjs

# 定义JavaScript代码
js_code = """
function add(a, b) {
    return a + b;
}
"""

# 创建一个运行环境
ctx = execjs.compile(js_code)

# 调用JavaScript函数，并获取返回值
result = ctx.call("add", 2, 3)

# 打印结果
print(result)  # 输出：5

```