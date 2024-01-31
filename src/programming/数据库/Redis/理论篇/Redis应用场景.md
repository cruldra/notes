---
title: Redis应用场景
comment: false
editLink: false
prev: false
next: false
order: 1
date: 2023-12-14
category:
  - Redis
tag:
  - 分布式锁
---

## 分布式锁

**分布式锁**用于==在分布式系统中对共享资源进行互斥访问==.传统的单机锁无法满足分布式环境下的需求,而Redis的单线程特性和原子性操作使其成为实现分布式锁的理想选择

下面这几张图片展示了从单机无锁到需要分布式锁的演变过程:
<script setup lang="ts">
const images = [{src:'https://zmesc.oss-cn-hangzhou.aliyuncs.com/notes/单机(无并发).png',alt:'单机(无并发)'},
{src:'https://zmesc.oss-cn-hangzhou.aliyuncs.com/notes/单机(低并发).png',alt:'单机(低并发)'},{src:'https://zmesc.oss-cn-hangzhou.aliyuncs.com/notes/分布式(高并发).png',alt:'分布式(高并发)'}]

</script>


<ImageRenderer :value="images" />

### 使用Redis作为解决方案
#### 第一步:尝试获取锁

使用Redis的SET命令尝试设置一个锁,同时设置NX和EX参数.

其中`NX`表示仅在键不存在时设置值,`EX`表示设置键的过期时间.如果成功设置锁,则返回OK.

#### 第二步:执行任务

如果成功获取锁,执行需要互斥访问的任务.

#### 第三步:释放锁

任务执行完成后,使用DEL命令删除锁,释放资源.

### 其他解决方案

* 基于数据库的锁:相比于使用Redis,基于数据库的锁可能会有更高的IO开销和更低的性能.
* 基于ZooKeeper的锁:ZooKeeper也可以实现分布式锁,但相较于Redis,ZooKeeper的性能较低,且使用起来相对复杂.


## 参考

* [面试官:Redis 的常见使用场景有哪些？-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1867518)
* [java - 分布式锁的使用场景与方式 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000022935064)
