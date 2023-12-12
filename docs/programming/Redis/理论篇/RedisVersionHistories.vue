<script setup lang="ts">
import { darkTheme } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-timeline>
      <n-timeline-item
          title="2.0"
          type="success"
          content="引入了虚拟内存、非阻塞操作、事务等功能"
          time="2010-09-01"
      />

      <n-timeline-item
          title="2.2"
          content="引入了Lua脚本、阻塞操作、集合的交、并、差操作等功能"
          time="2011-03-15"
      />

      <n-timeline-item
          title="2.4"
          content="引入了Sorted Set（有序集合）、哈希数据结构的多字段操作等功能"
          time="2011-09-05"
      />

      <n-timeline-item
          title="2.6"
          content="引入了虚拟内存改进、集群功能、自动重连等功能"
          time="2012-09-10"
      />

      <n-timeline-item
          title="2.8"
          content="引入了发布/订阅模式的改进、可配置的RDB文件压缩、更好的Lua脚本支持等功能"
          time="2014-10-01"
      />

      <n-timeline-item
          title="3.0"
          type="success"
          content="引入了集群、哨兵、新的过期策略、更好的脚本复用等功能"
          time="2015-04-01"
      />

      <n-timeline-item
          title="4.0"
          type="success"
          content="引入了模块化、快速命令、更好的集群支持、多线程I/O等功能"
          time="2017-08-28"
      />

      <n-timeline-item
          title="5.0"
          type="success"
          content="引入了流数据结构、延迟队列、更好的集群管理、更好的内存优化等功能"
          time="2018-10-10"
      />

      <n-timeline-item
          title="6.0"
          type="success"
          content="引入了多线程、ACL（访问控制列表）、更好的内存管理、更好的集群部署等功能"
          time="2020-04-30"
      />

      <n-timeline-item
          title="6.2"
          content="引入了集群管理、集群数据迁移、更好的内存优化等功能"
          time="2021-12-23"
      />
    </n-timeline>
  </n-config-provider>

</template>

<style scoped>

</style>
