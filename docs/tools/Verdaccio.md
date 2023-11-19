---
title: Verdaccio
comment: false
editLink: false
prev: false
next: false
---


## 简介

`Verdaccio`是一个轻量级的私有npm仓库,可以用来搭建自己的npm仓库,也可以用来搭建公司内部的npm仓库,这样就不用担心公司内部的npm包被泄露了.

## 安装

```bash
pnpm install -g verdaccio
```

## 使用

### 启动`Verdaccio`

```bash
verdaccio

# Verdaccio 默认会在 http://localhost:4873 上启动。
```

### 设置 npm 使用本地 Verdaccio 镜像库

```bash
npm set registry http://localhost:4873
```

如果要针对某个项目使用本地镜像库,可以在项目目录下创建`.npmrc`文件,写入以下内容:

```bash
registry=http://localhost:4873
```

:::tip
正式上线时记得把这一行删掉
:::
