---
title: 自动部署springboot应用
comment: false
editLink: false
prev: false
next: false
---

## 环境

| 键    | 值            |
|------|--------------|
| 源码仓库 | `Github`     |
| 仓库权限 | `私有`         |
| 构建工具 | `Gradle KTS` |
|      |              |

## 依赖的插件

* [Gradle](https://plugins.jenkins.io/gradle/) - 项目编译、构建及打包
* [Publish Over SSH](https://plugins.jenkins.io/publish-over-ssh/) - 通过`SSH`协议将构建好的文件上传到远程服务器


## 全局配置

:::tip
全局配置只需要配置一次,后续的任务都可以复用这些配置.
:::

### 配置`Gradle`环境

![添加`Gradle`](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.5q766ilzeo.webp)


### 配置`SSH`服务器

![新增`ssh`服务器](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.3go5n1dlvi.webp)

![使用密码登录](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.8s327r0qqq.webp)

![最后测试下配置](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.41xt9c9ynq.webp)

### 配置`Github`凭据

![添加`Github`个人令牌](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.17553k1mxl.webp)

## 新建任务

`Dashboard` -> `新建任务` -> `自由风格项目`:

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.73tpaktkyt.webp)

也可以用`文件夹项目`将多个任务组织在一起,这个功能依赖于[Folders插件](https://plugins.jenkins.io/cloudbees-folder/):

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.2yy3ygxm4s.webp)


