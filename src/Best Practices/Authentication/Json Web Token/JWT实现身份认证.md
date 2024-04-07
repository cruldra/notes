---
title: JWT实现身份认证
comment: false
editLink: false
prev: false
next: false
---

![JWT实现身份认证](https://github.com/cruldra/picx-images-hosting/raw/master/image.3nredctxi0.webp)

## 步骤概述

使用 JSON Web Token (JWT) 进行身份验证通常涉及以下步骤：

1. **用户登录**
2. **验证用户凭证**
3. **生成 JWT**
4. **发送 JWT 给用户**
5. **客户端存储 JWT**
6. **客户端发送 JWT**
7. **服务器验证 JWT**
8. **返回响应**
9. **刷新 Token（可选）**

## 详细流程

### 1. 用户登录
用户向认证服务器提供登录凭证，如用户名和密码。

### 2. 验证用户凭证
认证服务器校验登录凭证的有效性。

### 3. 生成 JWT
凭证通过验证后，服务器将创建包含用户信息和其他声明的 JWT。JWT 通常包括一个过期时间。

#### JWT 结构
- **Header**: 包含 token 类型和哈希算法。
- **Payload**: 包含一系列 claims，可以是用户信息或其他数据。
- **Signature**: 确保 header 和 payload 在传输中未被篡改的签名。

### 4. 发送 JWT 给用户
认证服务器将生成的 JWT 发送给用户客户端。

### 5. 客户端存储 JWT
客户端接收 JWT 并将其存储在本地，如在 localStorage 或会话存储中。

### 6. 客户端发送 JWT
用户请求访问受保护资源时，客户端在 HTTP 请求的 `Authorization` 头部使用 `Bearer` 模式附带 JWT。

`Authorization: Bearer <token>`

### 7. 服务器验证 JWT
服务器验证接收到的 JWT 的签名，并提取用户信息。如果验证通过，服务器将处理请求。

### 8. 返回响应
如果 JWT 有效，服务器执行请求的操作并返回数据。如果 JWT 无效或过期，返回错误信息。

### 9. 刷新 Token（可选）
当 JWT 接近过期时，系统可能允许使用刷新 token 换取新的 JWT。

## 注意事项

- **安全性**: JWT 应通过 HTTPS 传输，以防止中间人攻击。
- **存储**: 避免将 JWT 存储在客户端的 localStorage 中，以免受 XSS 攻击。使用 HttpOnly 的 cookie 是更安全的选择。
- **敏感数据**: JWT 可以被解码，因此不要包含敏感数据。
- **过期时间**: 为 JWT 设置合理的过期时间，以降低泄露风险。
- **刷新机制**: 如果实现刷新机制，确保安全地存储和使用刷新 token。
