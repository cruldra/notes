---
title: Fetch API
comment: false
editLink: false
prev: false
next: false
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

## 多部分(`multipart`)表单请求

```js
// 假设你有一个要以JSON格式发送的对象
const options = {
    mimeType: {
        extension: "webm",
        mimeType: "audio/webm"
    },
    model: "whisper-1"
};

// 将对象转换为JSON字符串
const optionsJsonString = JSON.stringify(options);

// 创建一个Blob对象并设置其内容类型为application/json
const optionsBlob = new Blob([optionsJsonString], {type: "application/json"});

// 创建一个新的FormData对象
const formData = new FormData();

// 添加Blob对象作为表单数据的一部分，它将包含正确的Content-Type
formData.append("options", optionsBlob);

// 添加文件
const fileField = document.querySelector('input[type="file"]');
formData.append("speech", fileField.files[0]);

// 现在可以发送formData对象
fetch('http://localhost:8084/api/speech', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer your-token-here',
    },
    body: formData
})
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## 读取流式响应

要使用下面的例子,你需要一个流式响应的后端,下面提供了一个例子:

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/cruldra/mock-steam" data-iframely-url="//cdn.iframe.ly/api/iframe?card=small&url=https%3A%2F%2Fgithub.com%2Fcruldra%2Fmock-steam&key=5045bb5ca67efdd8988cff4f00405219"></a></div></div>
  <component  :is="'script'" async src="//cdn.iframe.ly/embed.js" charset="utf-8"></component>

然后点击下面例子中的"使用fetch读取流式响应"按钮,可以看到流式响应的效果.核心代码如下:

```ts
fetch('http://localhost:3000/api/stream4')
            .then(response => {
                // response.body 是一个 ReadableStream
                const reader = response.body!!.getReader();

                // 读取流中的数据
                let decoder = new TextDecoder(); // 用于将流中的字节解码成字符串
                reader.read().then(function processText({done, value}): any {
                    if (done) {
                        // 流已经结束
                        console.log('Stream complete');
                        return;
                    }

                    // 将 Uint8Array 缓冲区转换为文本
                    let str = decoder.decode(value, {stream: true});
                    console.log(str);
                    setDataByFetch((prevDataByFetch) => prevDataByFetch + str)
                    // 读取下一个数据块
                    return reader.read().then(processText);
                });
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
```

::: sandpack#react-ts 使用fetch读取流式响应 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";


export default () => {
    const [dataByFetch, setDataByFetch] = useState('data: ')
    const byFetch = () => {
        // 假设你的流式 API 端点是 "/api/stream"
        // fetch('https://mock-steam-git-master-cruldras-projects.vercel.app/api/stream4',{mode:"no-cors"})
        fetch('http://localhost:3000/api/stream4')
            .then(response => {
                // response.body 是一个 ReadableStream
                const reader = response.body!!.getReader();

                // 读取流中的数据
                let decoder = new TextDecoder(); // 用于将流中的字节解码成字符串
                reader.read().then(function processText({done, value}): any {
                    if (done) {
                        // 流已经结束
                        console.log('Stream complete');
                        return;
                    }

                    // 将 Uint8Array 缓冲区转换为文本
                    let str = decoder.decode(value, {stream: true});
                    console.log(str);
                    setDataByFetch((prevDataByFetch) => prevDataByFetch + str)
                    // 读取下一个数据块
                    return reader.read().then(processText);
                });
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }
    return <>
        <p>
            <button onClick={byFetch}>使用fetch读取流式响应</button>

        </p>
        <p> {dataByFetch}</p>
    </>;
}
```

:::

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
