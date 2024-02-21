---
title: SSH
comment: false
editLink: false
prev: false
next: false
---

## 创建隧道

[隧道(Tunnel)](https://poe.com/s/52o5I8Mw5tXQlwL0Qqmy)也可以叫`端口转发`或者`代理`
,用于将对本地端口的访问转发给服务器上的某个端口(如`VPN`)或者将对服务器上的某个端口的访问转发给本地端口(如`内网穿透`)

## 转发本地端口

```bash
ssh -L <本地端口>:<远程服务主机>:<远程服务端口> <ssh用户>@<远程主机> -p 22 -N
```

<script lang="ts"  setup   >
import CreateSshTunnelCmd from "@source/Tools/Network/CreateSshTunnelCmd.vue";
</script>

<CreateSshTunnelCmd />
