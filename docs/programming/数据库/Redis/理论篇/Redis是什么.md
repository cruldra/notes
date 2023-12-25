---
title: Redis是什么
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[Redis](https://redis.io/)是一个完全开源免费的[key-value内存数据库](https://www.g2.com/categories/key-value-databases)

## 主要特点

* **速度快**:因为是使用C语言这种性能优先的语言编写的,然后采用了单线程的架构[^first],避免了多线程的资源竞争问题,所以速度非常快
* **丰富的数据类型**:仅常用的就包括
  * **字符串**:[String](https://redis.io/docs/data-types/strings/)
  * **哈希**:[Hash](https://redis.io/docs/data-types/hashes/)
  * **列表**:[List](https://redis.io/docs/data-types/lists/)
  * **集合**:[Set](https://redis.io/docs/data-types/sets/)
  * **有序集合**:[Sorted Set](https://redis.io/docs/data-types/sorted-sets/)
  * **位图**:[Bitmap](https://redis.io/topics/data-types-intro#bitmaps)
  * **JSON**:[JSON](https://redis.io/topics/data-types-intro#json)
* **持久化**:支持RDB和AOF两种持久化机制
* **主从复制**:支持主从复制,可以实现读写分离
* **高可用和分布式**:支持Sentinel和Cluster两种高可用和分布式方案
* **Lua脚本**:支持Lua脚本,可以实现复杂的功能
* **LRU驱逐策略**:支持LRU驱逐策略,可以在内存不足时,自动删除最近最少使用的key
* **原子性**:Redis提供了多个命令和机制[^second]来确保操作的原子性

[^first]: 为什么redis不采用多线程
    * 简化开发和维护
    * 避免多线程的资源竞争及减少上下文切换的开销
    * 利用IO多路复用和非阻塞IO也能实现高并发
    * 主要性能瓶颈是内存和网络带宽
    
    :::tip
    然而,随着网络硬件的性能提升,Redis的性能瓶颈有时会出现在网络IO的处理上,也就是说,**单个主线程处理网络请求的速度跟不上底层网络硬件的速度**。因此,从**Redis 6.0**版本开始,引入了多线程来处理网络请求,提高网络请求处理的并行度,但对于读写操作命令Redis仍然使用单线程来处理
    .这是因为,Redis处理请求时,网络处理经常是瓶颈,通过多个IO线程并行处理网络操作,可以提升实例的整体处理性能。而继续使用单线程执行命令操作,就不用为了保证Lua脚本、事务的原子性,额外开发多线程互斥加锁机制了,这样一来,Redis线程模型实现就简单了
    :::

[^second]: [Redis中几种实现原子性的机制](https://poe.com/s/SJ41PvhwxHXIeESmecmL)

## 参考

* [【Redis】Redis单线程和多线程-CSDN博客](https://blog.csdn.net/kuangd_1992/article/details/130451679)
