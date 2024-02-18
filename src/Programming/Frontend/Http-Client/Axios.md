---
title: Axios
comment: false
editLink: false
prev: false
next: false
---

## 简介

[axios](https://www.npmjs.com/package/axios)是一个基于`Promise`的`HTTP`客户端,可以在`浏览器`和`node.js`中使用.

## 安装

::: code-tabs#defineProps

@tab:active pnpm

```bash
pnpm add axios
```

@tab npm

```bash
npm install axios
```

:::

## 读取流式响应

:::tip
官方目前仍不支持直接读取流式响应,但是可以通过自定义适配器的方式来实现.相关讨论可以参考:

1. [axios issues 479](https://github.com/axios/axios/issues/479)
2. [axios issues 1474](https://github.com/axios/axios/issues/1474#issuecomment-578406887)
:::

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.npmjs.com/package/@dongjak-extensions/http-client" data-iframely-url="//cdn.iframe.ly/api/iframe?card=small&url=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40dongjak-extensions%2Fhttp-client%3FactiveTab%3Dreadme&key=5045bb5ca67efdd8988cff4f00405219"></a></div></div>
<component  :is="'script'" async src="//cdn.iframe.ly/embed.js" charset="utf-8"></component>

上面这个库中提供了一个`fetchAdapter`,允许你在`axios`中使用`fetch`来完成实际请求的发送

```ts
import {fetchAdapter} from "@dongjak-extensions/http-client";
```

现在来看下面这个例子,它使用`axios`和`fetchAdapter`来读取流式响应:

::: sandpack#react-ts 使用Axios读取流式响应 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";
import axios from "axios";
import {fetchAdapter, MixResponse} from "@dongjak-extensions/http-client";
export default () => {
    const [dataByAxios, setDataByAxios] = useState('data: ')
    const byAxios = () => {
        axios({
            method: 'get',
            url: 'http://localhost:3000/api/stream4',
            responseType: 'stream',
            adapter:fetchAdapter,
        })
            .then(response => {
                const  res =   response  as any as MixResponse
                const reader = res.body ?.getReader();
                // 读取流中的数据
                let decoder = new TextDecoder(); // 用于将流中的字节解码成字符串
                reader?.read().then(function processText({done, value}): any {
                    if (done) {
                        // 流已经结束
                        console.log('Stream complete');
                        return;
                    }

                    // 将 Uint8Array 缓冲区转换为文本
                    let str = decoder.decode(value, {stream: true});
                    console.log(str);
                    setDataByAxios((prevDataByFetch) => prevDataByFetch + str)
                    // 读取下一个数据块
                    return reader.read().then(processText);
                });

            });
    }
    return <>
        <p>
            <button onClick={byAxios}>使用Axios读取流式响应</button>

        </p>
        <p> {dataByAxios}</p>
    </>;
}
```
@setup

```js
{
    dependencies: {
        "axios":"1.6.0",
            "@dongjak-extensions/http-client": "^3.5.0",
    }
}
```
:::

::::: details 核心代码
```ts
axios({
    method: 'get',
    url: 'http://localhost:3000/api/stream4',
    responseType: 'stream',
    adapter: fetchAdapter,  // 使用fetch api来处理请求
})
    .then(response => {
        //当响应是一个流时,就不要直接读取数据了,而是使用流的方式来处理
        const res = response as any as MixResponse
        const reader = res.body?.getReader();
        // 读取流中的数据
        let decoder = new TextDecoder(); // 用于将流中的字节解码成字符串
        reader?.read().then(function processText({done, value}): any {
            if (done) {
                // 流已经结束
                console.log('Stream complete');
                return;
            }

            // 将 Uint8Array 缓冲区转换为文本
            let str = decoder.decode(value, {stream: true});
            console.log(str);
            setDataByAxios((prevDataByFetch) => prevDataByFetch + str)
            // 读取下一个数据块
            return reader.read().then(processText);
        });

    });
```
:::::

## 声明式API

要使用类似`java`中的[`retrofit`](https://github.com/square/retrofit)
类似的声明式API,可以使用[`@dongjak-extensions/http-client`](https://www.npmjs.com/package/@dongjak-extensions/http-client)
这个库

### 安装

```bash
pnpm add @dongjak-extensions/http-client @dongjak-public-types/commons
```

然后根据自己的需求创建一个`http客户端(axios)`实例:

::::: details axios.ts

````ts
import axios from "axios";
import {JsonResponse} from "@dongjak-public-types/commons";

const httpClient = axios.create({
    baseURL: "http://localhost:8084",
    timeout: 1000 * 10,
    responseType: "json",
});
httpClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

httpClient.interceptors.response.use(
    //@ts-ignore
    (response): Promise<JsonResponse<any>> => {
        const jsonResponse = new JsonResponse(
            response.data.code,
            response.data.message,
            response.data.data,
        );
        if (jsonResponse.isSuccessful()) return Promise.resolve(jsonResponse);
        else return Promise.reject(jsonResponse); // 错误继续返回给到具体页面
    },
    (error) => {
        return Promise.reject(error); // 错误继续返回给到具体页面
    },
);
export default httpClient;

````

:::::

### 配置

接下来声明`API`接口:

```ts
import {
    DefaultApiImpl,
    createApi,
    Get,
    Query,
} from "@dongjak-extensions/http-client";
import httpClient from "@/utils/axios";

class AuthenticationApi extends DefaultApiImpl {
    @Get("/authentication/sendVerificationCode")
    sendCode(
        @Query("phoneNumber") phoneNumber: string,
    ): Promise<commons.JsonResponse<any>> {
        return Promise.resolve() as any;
    }
}

export const authenticationApi = createApi(AuthenticationApi, httpClient);
```

### 使用

```ts
authenticationApi.sendCode(data.phoneNumber).then((res) => {
    if (res.isSuccessful()) {
        setTargetDate(Date.now() + 60_000);
    }
});
```

### 示例一:带有`查询参数(@Query)`的简单的`Get`请求

`Spring Web MVC`的控制器声明如下:

```kotlin
@RestController
@RequestMapping("/authentication")
class AuthenticationBySmsController{
    
    @GetMapping("/sendVerificationCode")
    @Operation(summary = "发送验证码")
    fun sendVerificationCode(@RequestParam phoneNumber: String): JsonResponse<ISmsResponse> {
        val smsResponse = smsService.sendVerificationCode(phoneNumber)
        return JsonResponse.success(smsResponse)
    }
}
```

对应的客户端api声明如下:

```ts
class AuthenticationApi extends DefaultApiImpl {
    @Get("/authentication/sendVerificationCode")
    sendCode(
        @Query("phoneNumber") phoneNumber: string,
    ): Promise<commons.JsonResponse<any>> {
        return Promise.resolve() as any;
    }
}
```

### 示例二:带有`路径参数(@Path)`和`json body(@RequestBody)`的`Post`请求

`Spring Web MVC`的控制器声明如下:

```kotlin
@RestController
@RequestMapping("/authentication")
class AuthenticationBySmsController{
    
    @PostMapping("/loginBySms/{phoneNumber}")
    @Operation(summary = "短信验证码登录")
    fun loginBySms(
        @PathVariable phoneNumber: String,
        @RequestBody requestBody: LoginBySmsRequestBody
    ): JsonResponse<LoginBySmsResponseBody> {
        val loginBySmsResponseBody = authenticationService.loginBySms(phoneNumber, requestBody)
        return JsonResponse.success(loginBySmsResponseBody)
    }
}
```

对应的客户端api声明如下:

```ts

class AuthenticationApi extends DefaultApiImpl {
    @Post("/authentication/loginBySms/:phoneNumber")
    loginBySms(
        @Path("phoneNumber") phoneNumber: string,
        @RequestBody() requestBody: LoginBySmsRequestBody,
    ): Promise<commons.JsonResponse<LoginBySmsResponseBody>> {
        return Promise.resolve() as any;
    }
}
```

## 在`Service Worker`中使用

在使用`axios`发起网络请求时,它会自动根据当前所处的环境选择合适的`适配器(adapter)`来进行请求

```js
const instance = axios.create({
    adapter: 'http',
    //....
});
```

默认情况下当处于`浏览器`环境时,`axios`
使用[`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
进行请求,在`nodejs`环境中,`axios`使用[`http`](https://nodejs.org/api/http.html)
模块进行请求

但是在`Service Worker`中,`XMLHttpRequest`和`http`
模块都不可用,这时候就需要用到[`Fetch API`](./Fetch%20API.md)

可以用`fetch api`自定义一个`axios`适配器

```ts
const fetchAdapter = (config: InternalAxiosRequestConfig) => {
    // 将 Axios 配置转换为 Fetch API 配置
    const fetchConfig = {
        method: config.method?.toUpperCase(),
        headers: config.headers,
        body: config.data,
        mode: 'cors', // 根据需要设置模式
        credentials: config.withCredentials ? 'include' : 'omit', // 处理跨域请求的凭据
    } as RequestInit;

    // 处理请求超时
    const timeoutPromise = new Promise(function (resolve, reject) {
        if (config.timeout) {
            setTimeout(() => {
                reject(new Error('Request timeout'));
            }, config.timeout);
        }
    });

    // 发送请求并返回一个 Promise

    return new Promise<AxiosResponse<any>>((resolve, reject) => {
        Promise.race([
            fetch(`${config.baseURL}${config.url}`, fetchConfig)
                .then(response => {
                    // 检查响应状态
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    // 根据 Axios 的配置解析响应数据
                    const responseDataPromise = config.responseType === 'json'
                        ? response.json()
                        : response.text();
                    responseDataPromise.then(data => {

                        resolve({
                            data,
                            status: response.status,
                            statusText: response.statusText,
                            // headers: response.headers as AxiosResponseHeaders,
                            config,
                            request: response,
                        } as AxiosResponse)
                    });
                }),
            timeoutPromise
        ])
            .catch(error => {
                // 包装错误信息
                reject({
                    message: error.message,
                    config,
                    request: error.request,
                })
            });
    })
}
const instance = axios.create({
    adapter: fetchAdapter
    //... 其它配置
});
```
