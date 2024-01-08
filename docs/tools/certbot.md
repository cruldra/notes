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

## 报错

1. ![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240109/image.24wmlfwdc9og.png)

解决办法``pip install --upgrade kfp``

## 参考

* [使用Certbot为Nginx自动生成SSL证书并自动续期的指南 - ByteZoneX-探索Web开发资源和人工智能教程的代码社区](https://www.bytezonex.com/archives/70.html)
