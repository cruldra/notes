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

## 使用`Post`方法发送`json`数据

```ts
fetch(OPENAI_URLS.chat, {
    body: JSON.stringify(payload),
    headers: createHeaderWithOpenAI({'Content-Type': 'application/json'}),
    method: 'POST',
    signal: options?.signal,
})
```

## API

| 参数      | 类型                           | 描述                        | 是否必须 |
|---------|------------------------------|---------------------------|------|
| `input` | `Request` \| `String`        | 请求的资源路径或者一个 `Request` 对象。 | 是    |
| `init`  | `RequestInit` \| `undefined` | 一个包含自定义设置的选项对象，用于应用于请求。   | 否    |

`init` 对象的属性如下：

| 属性               | 类型                                                    | 描述                                                                                                                                                                                      | 是否必须 |
|------------------|-------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------|
| `method`         | `String`                                              | 请求使用的方法，例如 "GET", "POST"。                                                                                                                                                               | 否    |
| `headers`        | `Headers` \| `String[][]` \| `Record<string, string>` | 初始化请求的头信息。可以是 `Headers` 对象、键值对数组或对象字面量。                                                                                                                                                 | 否    |
| `body`           | `BodyInit` \| `null`                                  | 请求的正文信息，用于如 PUT, POST 方法的请求体。                                                                                                                                                           | 否    |
| `mode`           | `String`                                              | 请求的模式，例如 "cors", "no-cors", "same-origin" 或 "navigate"。                                                                                                                                 | 否    |
| `credentials`    | `String`                                              | 请求的凭据，"omit", "same-origin" 或 "include"。                                                                                                                                                | 否    |
| `cache`          | `String`                                              | 请求的缓存模式，"default", "no-cache", "reload", "force-cache" 或 "only-if-cached"。                                                                                                              | 否    |
| `redirect`       | `String`                                              | 请求的重定向模式，"follow", "error" 或 "manual"。                                                                                                                                                  | 否    |
| `referrer`       | `String`                                              | 指定请求的 referrer。可以是 "no-referrer", "client" 或一个 URL。                                                                                                                                     | 否    |
| `referrerPolicy` | `String`                                              | 请求的 referrer 策略，例如 "no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin", "same-origin", "strict-origin", "strict-origin-when-cross-origin" 或 "unsafe-url"。 | 否    |
| `integrity`      | `String`                                              | 包含子资源完整性值（SRI），用于验证资源的完整性。                                                                                                                                                              | 否    |
| `keepalive`      | `boolean`                                             | 用于在页面卸载时保持请求活跃的标志。                                                                                                                                                                      | 否    |
| `signal`         | `AbortSignal` \| `null`                               | 用于取消请求的 `AbortSignal` 对象。                                                                                                                                                               | 否    |
| `window`         | `null`                                                | 用于请求的 window 参数（通常用于服务工作者中）。                                                                                                                                                            | 否    |
