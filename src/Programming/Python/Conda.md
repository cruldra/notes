---
title: Conda
comment: false
editLink: false
prev: false
next: false
---


## 简介

Conda是一个开源的包管理系统和环境管理系统,旨在简化Python环境和依赖项的管理。

## 主要功能

* 环境管理 - 创建独立的Python环境,避免依赖冲突
* 包管理 - 维护包仓库,方便安装、更新和卸载包
* 依赖解决 - 自动解析并安装所需的依赖包
* 版本控制 - 支持在不同环境中安装特定版本的包
* 跨平台支持 - 可在Windows、macOS和Linux上运行
* 多语言支持 - 除Python外还支持R、Ruby等语言包

## 核心概念

1. **环境 (Environment)**
    - 独立的Python环境,包含特定版本的Python和安装的包
    - 不同环境之间相互隔离,避免包冲突

2. **包 (Package)**
    - 预编译的二进制文件或源代码,包含库、程序或其他数据
    - Conda维护的包仓库包含数千个包

3. **通道 (Channel)**
    - 托管包的在线位置
    - 默认通道为Anaconda官方通道,也可添加第三方通道

4. **依赖 (Dependency)**
    - 包可能依赖于其他包
    - Conda会自动解析并安装所需依赖

5. **环境规范 (Environment Specification)**
    - 用于描述环境中包的名称、版本和通道的文件
    - 确保环境在不同系统中保持一致

通过合理利用这些核心概念,Conda使得Python环境和包的管理变得简单高效。

## 安装

安装教程参考[Installing conda](https://conda.io/projects/conda/en/latest/user-guide/install/index.html),一般选`Miniconda`最小化安装.

安装完成后会基于默认环境`base`创建两个命令行快捷方式:

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.45hfms1xhk.webp)

其实是用的以下命令来激活某个环境(cmd下):

```bash
%windir%\System32\cmd.exe "/K" d:\ProgramData\miniconda3\Scripts\activate.bat d:\ProgramData\miniconda3
```

## 环境管理

1. 查看所有环境

```conda info --envs```

2. 创建新环境

<CommandBuilder :editors='[
{
"label": "环境名称",
"placeholder": "一般和py项目同名",
"field": "envName",
"type": "text",
"defaultValue": ""
},
{
"label": "python版本",
"placeholder": "指定python版本",
"field": "pythonVersion",
"type": "select",
"options": [ "3.8", "3.9", "3.10","3.11","3.12" ],
"defaultValue": "3.10"
}
]' cmdTemplate="conda create --name {envName}  python={pythonVersion}" />

默认情况下会在`$user_home/.conda/envs`目录下创建新环境,可以在用户目录下新建`.condarc`文件然后写入:

```yaml
envs_dirs:
  - D:\AppData\Conda\envs
pkgs_dirs:
  - D:\AppData\Conda\pkgs
```

3. 激活环境

```conda activate {envName}```

4. 取消激活(退回到base环境)

```conda deactivate```

5. 删除环境

```conda remove --name {envName} --all```
