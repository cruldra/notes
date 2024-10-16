---
title: WiX Toolset
comment: false
editLink: false
prev: false
next: false
---

## 简介

[WiX Toolset](https://wixtoolset.org/)
用于生成[Windows Installer](https://learn.microsoft.com/zh-cn/windows/win32/msi/windows-installer-portal)包,也就是`.msi`
文件并交给系统底层的[Windows Installer](https://learn.microsoft.com/zh-cn/windows/win32/msi/windows-installer-portal)
引擎来安装软件.

**主要特点**

1. 使用`XML`语法定义安装包的结构和行为
2. 提供命令行工具来编译`XML`文件并生成`.msi`安装包
3. 支持创建复杂的安装逻辑,包括自定义操作、对话框等
4. 可以集成到构建过程中,实现自动化打包
5. 提供丰富的扩展性,允许开发自定义扩展

另外还提供了一个[Visual Studio 插件](https://marketplace.visualstudio.com/items?itemName=WixToolset.WixToolsetVisualStudio2022Extension)
用于在`Visual Studio`
中创建`wix`项目以获得更好的开发体验.

## 和`Windows Installer`的关系

[Windows Installer](https://learn.microsoft.com/zh-cn/windows/win32/msi/windows-installer-portal)是`Microsoft`
开发的一个安装程序和配置服务引擎,它负责解析`.msi`文件并在`Windows`上安装、维护和删除软件.它是`Windows`
操作系统的一个核心组件,随操作系统一起提供

### 关系

1. `WiX Toolset`是生产者,负责产出`.msi`文件
2. `Windows Installer`是消费者,负责解析`.msi`文件并在`Windows`上安装、维护和删除软件

### 层次

1. `Windows Installer`是底层的安装引擎
2. `WiX Toolset`是上层的工具,用于生成`Windows Installer`可以理解和执行的包

### 用户群体

1. `WiX Toolset`由开发者使用,用于创建安装包
2. `Windows Installer`由最终用户使用(通过双击`.msi`文件来安装)


## 示例

### 添加文件到安装包

[How To: Add a File to Your Installer - Windows Installer XML Documentation](https://documentation.help/WiX/add_a_file.htm)

## 参考

* [Introduction to Windows Installer XML (WiX) toolset](https://documentation.help/WiX/main.htm)
* [Windows Installer](https://learn.microsoft.com/zh-cn/windows/win32/msi/windows-installer-portal)
* [Windows Installer和wix toolset](https://poe.com/s/pt48oPOW7tgJpr64PlTp)
