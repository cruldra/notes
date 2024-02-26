---
title: vite-plugin-compression
comment: false
editLink: false
prev: false
next: false
---

## 简介

[vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression/blob/main/README.zh_CN.md)可以对`vite build`输出的文件进行`gzip`压缩.

## 安装

::: code-tabs#dynamicProps
@tab:active pnpm

```bash
pnpm i -D vite-plugin-compression
```

@tab npm

```bash
npm i vite-plugin-compression -D
```

@tab yarn

```bash
yarn add vite-plugin-compression -D
```
:::


## 基本配置

```ts
//vite.config.ts
import viteCompression from 'vite-plugin-compression';

export default () => {
  return {
    plugins: [viteCompression()],
  };
};
```

使用上面的配置会在`vite build`时生成`.gz`文件,如图:

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.51dvtaqzqp.webp)
