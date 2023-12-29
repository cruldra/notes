---
title: Fetch API
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[`Fetch API`](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)是现代浏览器内置的一个原生API,用于执行网络请求

它的优点是:

1. 内置于所有现代浏览器中,无需额外安装.
2. 基于`Promise`,支持`async`、`await`.
3. 灵活性高,可以控制请求的各个阶段.

缺点是:

1. 不支持老旧的浏览器,如IE.
2. 默认不发送cookies.
3. 可能需要额外的配置来处理异常(例如检查response.ok).
4. 不能在node.js中使用.

## 适用场景

`Fetch API`适合比较简单的场景,大型项目可以和`axios`等第三方库配合使用.

## 简单的示例

```js
fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch Error:', error));
```
