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

<CommandBuilder :editors='[
{
"label": "本地端口",
"placeholder": "对这个端口的访问会被转发给下面这个远程端口👇",
"field": "localPort",
"type": "number"
},
{
"label": "远程服务端口",
"placeholder": "对本地端口的访问会被转发给这个端口",
"field": "remoteServicePort",
"type": "number"
},
{
"label": "远程服务主机",
"placeholder": "远程服务端口所在的主机,通常是localhost",
"field": "remoteServiceHost",
"type": "text",
"defaultValue": "localhost"
},
{
"label": "ssh用户",
"placeholder": "通常是root",
"field": "sshUser",
"type": "text",
"defaultValue": "root"
},
{
"label": "ssh主机",
"placeholder": "通常和远程服务主机一样",
"field": "sshHost",
"type": "text"
},
{
"label": "ssh端口",
"placeholder": "通常是22",
"field": "sshPort",
"type": "number",
"defaultValue": 22
},
]' cmdTemplate="ssh -L {localPort}:{remoteServiceHost}:{remoteServicePort} {sshUser}@{sshHost} -p {sshPort} -N"
:templates='[
{
"name": "mysql",
"description":"访问远程内网中的mysql服务",
"value":{
"localPort":3306,
"remoteServicePort":3306
}
}
]'/>


## 允许root登录

```bash
# 先设置root密码
sudo passwd root

# 编辑配置文件
sudo vim /etc/ssh/sshd_config

# 找到PermitRootLogin,将其值改为yes

# 重启ssh服务
sudo service ssh restart
```
