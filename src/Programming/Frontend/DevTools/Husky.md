---
title: Husky
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[Husky](https://typicode.github.io/husky/)让我们在开发`Node.js`项目时更容易管理和使用[Git钩子](/Tools/Git/钩子.md)

## 为什么要使用Husky

假设你想要在每次提交前自动运行代码格式化工具(比如[Prettier](https://prettier.io/)),不使用`Husky`的情况下你需要:

1. 导航到你的`Git`仓库的`.git/hooks/`目录.
2. 创建一个名为`pre-commit`的文件.
3. 编写脚本来运行`Prettier`并格式化你的代码.
4. 为这个文件添加可执行权限.
5. 处理跨平台兼容性

现在使用`Husky`,你只需在`package.json`文件中添加如下配置:

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "prettier --write"
    }
  }
}
```

然后由`Husky`来完成手动管理`Git`钩子所需的全部工作.


## 安装

::: code-tabs#defineProps

@tab:active pnpm

```bash
pnpm i -D husky
```

@tab npm

```bash
npm install --save-dev husky
```

:::
