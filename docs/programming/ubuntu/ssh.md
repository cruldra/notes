---
title: SSH
comment: false
editLink: false
prev: false
next: false
order: 1
---
 
## 允许root登录

```bash
＃　先设置root密码
sudo passwd root

# 编辑配置文件
sudo vim /etc/ssh/sshd_config

# 找到PermitRootLogin,将其值改为yes

# 重启ssh服务
sudo service ssh restart
```
