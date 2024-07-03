---
title: plugin-basic-ssl
comment: false
editLink: false
prev: false
next: false
---

## 简介

[@vitejs/plugin-basic-ssl](https://www.npmjs.com/package/@vitejs/plugin-basic-ssl)插件可以实现`Vite`开发服务器的`https`
支持.

## 安装

```bash
pnpm i -D @vitejs/plugin-basic-ssl
```

## 基本配置

```ts
//vite.config.ts

import {defineConfig} from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
    plugins: [
        basicSsl()
    ]
})
```

使用上面的配置会生成一个不受信任的证书的,经过警告后仍然允许使用`https`访问页面
