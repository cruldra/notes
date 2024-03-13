---
title: SpringBoot项目结构
comment: false
editLink: false
prev: false
next: false
---

## `Spring Boot MVC`项目

```
└── 📁${domain.org}  // 组织机构或者公司名倒过来,比如: org.company
    └── 📁${module}  // 项目或者模块的名称
        └── 📁annotations    // 自定义注解
        └── 📁aop    // 切面
        └── 📁configs    // 配置类
        └── 📁context    // 上下文
        └── 📁const    // 常量
        └── 📁controller   // 控制器
        └── 📁cron   // 定时任务
        └── 📁dto    // 数据传输对象
        └── 📁listener   // 监听器
        └── 📁payload    // 请求载荷
        ├── 📁service  // 服务
            ├── 📁impl // 服务实现
```

## `Srping Boot Starter`项目

```
└── 📁${domain.org}  // 组织机构或者公司名倒过来,比如: org.company
    └── 📁starter  // 表示这是一个starter项目
        └── 📁${module}  // 项目或者模块的名称
            └── 📁configs    // 配置类
                └── ☕{company}{module}AutoConfiguration    // 自动配置类
            └── 📁properties    // 配置属性
```
