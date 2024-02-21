---
title: Dockerfile
comment: false
editLink: false
prev: false
next: false
order: 1
---


## 简介


## `ARG`指令

假如想在构建的时候传一个参数给`Dockerfile`,然后`Dockerfile`利用它来设置一个`ENV`给程序使用,就可以用到这个参数

`Dockerfile`内容如下:

```dockerfile

# Dockerfile
FROM node:latest

# 定义一个参数
ARG AXIOS_BASE_URL

# 设置环境变量，其值来自于 ARG
ENV NEXT_PUBLIC_AXIOS_BASE_URL ${AXIOS_BASE_URL}

```

然后在构建的时候传入参数:

```bash
docker build --build-arg AXIOS_BASE_URL=https://your-api-url.com -t your-image-name .
```
