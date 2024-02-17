---
title: JWT
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

`JWT(JSON Web Tokens)`是一种[`开放标准(RFC 7519)`](https://datatracker.ietf.org/doc/html/rfc7519),它定义了一种紧凑和自包含的方式,用于在各方之间安全地以`JSON`对象的形式传输信息

### 紧凑

指的是`JWT`的大小很小,这使得它可以在`URL`、`POST`参数或者`HTTP`头部发送,并且在`HTTP`环境中传输的开销也很小

### 自包含

指的是`JWT`本身包含了所有`用户所需要的信息`,避免了多次查询数据库.具体见[gpt4对自包含的解释](https://poe.com/s/2C52r5B3tMkdOBFBwBOQ)


## 结构

`JWT`由三部分组成,分别是`Header`,`Payload`和`Signature`

### Header(头部)

`Header`部分用于描述`JWT`的元数据,例如`签名算法`和`类型`

```json
{
  "alg": "HS256",
  "typ": "JWT"
}
```

### Payload(负载)

`Payload`部分用于存放需要传输的数据,它包含了一些`预定义的字段`,以及一些`自定义的字段`

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
}
```

### Signature(签名)

`Signature`部分用于对`Header`和`Payload`进行签名,防止数据被篡改

```js

const signature = HMACSHA256(
    base64UrlEncode(header) + "." +
    base64UrlEncode(payload),
    secret
)
// 要签名的字符串 : `base64(头部).base64(负载)`
// secret : 签名用的密钥
// 最终生成的签名(signature)类似:TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```

最后把上面三个部分用`.`连接起来,就构成了`JWT`

```js
base64UrlEncode(header) + "." + base64UrlEncode(payload) + "." + signature

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
```


## 应用场景

1. [Spring Security + JWT实现前后端分离下的认证授权](https://zhuanlan.zhihu.com/p/342755411)
2. [另外几种应用场景](https://poe.com/s/VrsibtNpk1tTGW99JfSf)
