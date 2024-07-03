---
title: docker-compose
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 服务列表

```bash
#列出 docker-compose.yml 文件中定义的所有服务
docker-compose config --services

# 也可以指定docker-compose.yml文件的路径
docker-compose -f /path/to/your/docker-compose.yml config --services
```


## 启动服务

```bash
# 启动所有服务
docker-compose up -d 

# 启动指定的服务
docker-compose up -d service1 service2 

# 也可以指定docker-compose.yml文件的路径
docker-compose -f /path/to/your/docker-compose.yml up -d service1 service2
```
