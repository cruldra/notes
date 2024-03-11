---
title: PowerDesigner
comment: false
editLink: false
prev: false
next: false
---

## 简介

## 从`mysql`中导入模型

1. 从[这里](https://dev.mysql.com/downloads/connector/odbc/)下载`64`位`ODBC`驱动,版本和要连接的数据库的版本一致
2. 安装完以后检查是否安装成功

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.2a4u3rxij8.webp)

3. 在`PowerDesigner`中新建一个`Physical Data Model`,数据库类型选择`MySQL`

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.70a326qv8w.webp)


:::warning

一定要确保`ODBC`驱动和`PDM>DBMS`的类型一致,否则可能会类似下面这样的错误:

```text
 [MySQL][MyODBC   05.00.0000][MySQL]   1146   Table   'sys.sysuserperms'   doesn't   exist  
SQLSTATE   =   HY000  
```
:::


## 取消`name`和`code`自动同步

Tools->Model Options ->Name Convention-> Synchronize code勾选去掉

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.8z69sj86t0.webp)
