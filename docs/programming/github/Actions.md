---
title: Actions
comment: false
editLink: false
prev: false
next: false
order: 1
---
 
## 简介

`GitHub Actions` 是 GitHub 的持续集成服务，它允许您在 GitHub 存储库中创建自定义工作流程（workflow），以响应存储库中的事件。例如，每当有人提交新的 `pull request` 时，您可以编写一个工作流程来运行测试并通知您的团队。工作流程由一个或多个 `job` 组成，并且可以在 Linux、Windows 和 macOS 上运行。每个 `job` 都包含一系列 `step`，这些 `step` 将按顺序执行。GitHub 提供了一些内置的 `actions`，您可以在工作流程中使用这些 `actions`，也可以编写自己的 `actions`。

工作流(workflow)文件放在项目根目录下的 `.github/workflows` 目录中，文件名以 `.yml` 结尾。您可以在同一存储库中创建多个工作流程文件，每个文件都可以包含一个或多个工作流程。例如，您可以创建一个工作流程来自动测试代码，另一个工作流程来自动部署代码，等等。

## 实例一
### 准备工作

::: warning 提示
- 在gitee上创建一个空项目
- 准备好私人令牌
:::

### 项目目录结构

```bash
- project # github项目根目录
  - app # php后台代码
  - docker # docker部署文件
  - public # nginx站点根目录
  - web # nodejs前端代码
```
### 目的

在 ==每次push到github上的master分支== 时实现以下效果

- 在web目录下运行``pnpm install``及``pnpm build``
- 把由``pnpm build``生成的``/project/web/dist``目录拷贝到``/project/public``目录下
- 把``/project/web``目录删掉,因为这里面包括前端源代码,正式环境下不需要
- 把git项目的remote地址改为gitee的地址然后推送到gittee上

### 创建工作流定义文件

接下来创建一个工作流定义文件放在``$project_root/.github/workflows/``目录下,文件名随意,文件后缀用``yml``

::::: details 完整的工作流定义文件
```yaml
<!-- @include: ./assets/github-workflow-example.yml -->
```
:::::

### 测试

以上步骤完成后,在本地随便改动某个文件后push到github上,然后就可以看到github actions的运行结果了

![](./assets%2F1.gif)
