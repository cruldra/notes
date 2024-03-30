---
title: Certbot
comment: false
editLink: false
prev: false
next: false
---

## 使用`Ubuntu`

### 安装

```bash
apt update && \
apt install certbot python3-certbot-nginx
```

### 申请证书

```bash
# 仅申请证书
certbot certonly  -d $domain --manual --preferred-challenges dns-01

# 泛域名证书

certbot certonly  -d *.$domain --manual --agree-tos -m cruldra@gmail.com --preferred-challenges dns

# 申请证书并自动安装到nginx
certbot  -d $domain1,$domain2 --nginx

```

### 自动续订

```bash
crontab -e
## 写入自动续订证书计划任务
0 5 * * * /usr/bin/certbot renew --quiet

```

### 报错

1. ![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240109/image.24wmlfwdc9og.png)

解决办法``pip install --upgrade kfp``

## 参考

* [使用Certbot为Nginx自动生成SSL证书并自动续期的指南 - ByteZoneX-探索Web开发资源和人工智能教程的代码社区](https://www.bytezonex.com/archives/70.html)
* [使用Certbot申请泛域名SSL证书（Let's Encrypt） - 知乎](https://zhuanlan.zhihu.com/p/354241539)


## 使用`Docker`(没搞定)

### 手动申请证书

1. 不需要把域名指向`certbot`容器所在的服务器
2. 需要按照`certbot`的提示手动完成验证过程

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.39ky9le2gb.webp)

<CommandBuilder :editors='[
{
"label": "域名",
"placeholder": "你要为哪个域名申请证书",
"field": "domain",
"type": "text"
},
{
"label": "证书目录",
"placeholder": "映射到容器中的/etc/letsencrypt目录",
"field": "certDir",
"type": "text",
defaultValue: "/app/certbot"
},
{
"label": "邮件",
"field": "email",
"type": "text",
"defaultValue": "cruldra@gmail.com"
}
]'  cmdTemplate="docker run -it --rm --name certbot -v {certDir}:/etc/letsencrypt certbot/certbot  certonly  -d {domain} --manual --agree-tos -m {email} --preferred-challenges dns-01" />
