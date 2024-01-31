---
title: nvm
comment: false
editLink: false
prev: false
next: false
---


## 简介

nvm 是 node.js 的版本管理工具，可以在同一台机器上安装多个版本的 node.js，并且可以在不同的版本之间切换。


## 安装

### Linux

```bash

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

```

### Mac

```bash

brew install nvm

```

### Windows

```bash

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

```

## 常用命令

```bash
# 安装最新lts版本
nvm install --lts

# 安装最新版本
nvm install node

# 安装指定版本
nvm install 8.11.3

# 查看已安装版本
nvm ls

# 切换版本
nvm use 8.11.3

# 查看当前版本
nvm current
```

