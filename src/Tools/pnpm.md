---
title: pnpm
comment: false
editLink: false
prev: false
next: false
---


##　设置镜像
```bash

# 查看当前镜像
pnpm config get registry

# 设置淘宝镜像
pnpm config set registry https://registry.npm.taobao.org

# 设置官方镜像
pnpm config set registry https://registry.npmjs.org

```

## 设置代理

```bash
# 获取当前代理设置
pnpm config get proxy
pnpm config get https-proxy

# 设置代理
pnpm config set proxy http://localhost:7890
pnpm config set https-proxy http://localhost:7890

## 删除代理设置

pnpm config delete proxy
pnpm config delete https-proxy

```
:::tip
如果删除代理配置不起作用的话,有可能是全局配置文件中也设置了,找到删掉即可,具体位置在:[pnpm全局配置文件位置](https://poe.com/s/nPlrL2HVkwp4YexO1CRe)
:::
