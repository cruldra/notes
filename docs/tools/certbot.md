---
title: certbot
comment: false
editLink: false
prev: false
next: false
---
## 安装

```bash
apt update && \
apt install certbot python3-certbot-nginx
```

## 申请证书

```bash
# 仅申请证书
certbot certonly  -d $domain --manual --preferred-challenges dns-01

# 申请证书并自动安装到nginx
certbot  -d $domain1,$domain2 --nginx

```

## 自动续订

```bash
crontab -e
## 写入自动续订证书计划任务
0 5 * * * /usr/bin/certbot renew --quiet

```
