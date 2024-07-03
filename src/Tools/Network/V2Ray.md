---
title: v2Ray
comment: false
editLink: false
prev: false
next: false
---

## 准备工作

1. 一台境外`vps`
2. 一个域名,并解析一个`A`记录到`vps`的`ip`

## 安装

### 使用`docker`安装

使用[这个镜像](https://github.com/anerg2046/Caddy_V2ray),命令行是:

```bash
docker run -d  -p 80:80   -p 443:443 --name=caddy_v2ray --restart=always  \
-v /app/v2ray/.v2ray:/etc/v2ray:rw   \
-v /app/v2ray/.caddy:/etc/caddy:rw   \
-v /app/v2ray/.certificates:/data/caddy/certificates:rw  \   
-e DOMAIN=v2ray.cruldra.com   \ #这里换成你自己的域名
-e EMAIL=cruldra@gmail.com     \    # 这里换成你自己的邮箱,canndy去申请证书的时候会用到
anerg/v2ray:latest
```

<CommandBuilder :editors='[
{
"label": "容器名称",
"placeholder": "docker容器的名称",
"field": "dockerContainerName",
"type": "text",
"defaultValue": "v2ray"
},
{
"label": "http端口",
"placeholder": "映射到caddy容器的80端口",
"field": "httpPort",
"type": "number",
"defaultValue": 80
},
{
"label": "https端口",
"placeholder": "映射到caddy容器的443端口",
"field": "httpsPort",
"type": "number",
"defaultValue": 443
},
{
"label": "域名",
"placeholder": "v2ray.xxx.com",
"field": "domain",
"type": "text"
},
{
"label": "邮箱",
"placeholder": "caddy去申请证书的时候会用到",
"field": "email",
"type": "text",
"defaultValue": "cruldra@gmail.com"
}
]' cmdTemplate="docker run -d  -p {httpPort}:80   -p {httpsPort}:443 --name={dockerContainerName} --restart=always  \
-v /app/v2ray/.v2ray:/etc/v2ray:rw   \
-v /app/v2ray/.caddy:/etc/caddy:rw   \
-v /app/v2ray/.certificates:/data/caddy/certificates:rw  \
-e DOMAIN={domain}  \
-e EMAIL={email}     \
anerg/v2ray:latest" />


    这种方式会占用`80`和`443`端口,适合`vps`仅用作`v2ray`的情况

如果你的`vps`上还有其他`web`服务,则可以复用上面这个镜像自带的[`cadddy`](https://caddyserver.com/)服务器

```bash
# 先停止并删除上面的容器
docker stop caddy_v2ray && docker rm caddy_v2ray 

# 然后把其它的网站文件映射到容器中
docker run -d  -p 80:80   -p 443:443 --name=caddy_v2ray --restart=always  \
-v /app/v2ray/.v2ray:/etc/v2ray:rw   \
-v /app/v2ray/.caddy:/etc/caddy:rw   \
-v /你的网站根目录:/var/www/网站名称 \
-v /app/v2ray/.certificates:/data/caddy/certificates:rw  \   
-e DOMAIN=v2ray.cruldra.com   \ #这里换成你自己的域名
-e EMAIL=cruldra@gmail.com     \    # 这里换成你自己的邮箱,canndy去申请证书的时候会用到
anerg/v2ray:latest
```

再编辑`.caddy`目录下的`Caddyfile`文件,添加你的网站配置,比如:

```bash
chat.cruldra.com {
  file_server {
		root /var/www/你的网站的名称
	}
	tls cruldra@gmail.com

	reverse_proxy /aaa/ 172.17.0.1:3210 {
		header_up X-Forwarded-For {remote_host}
	}
}

```

最后再进入容器命令行,重启`caddy`服务即可:

```bash
docker exec -it caddy_v2ray sh -c 'cd /etc/caddy && caddy reload'
```



具体步骤参考[这篇文章](https://codefuturesql.top/post/vps/)


## 核心概念

1. `客户端` - 比如[`clash`](https://github.com/lantongxue/clash_for_windows_pkg/releases/tag/0.20.39),使用[`WebSocket`](https://www.liaoxuefeng.com/wiki/1022910821149312/1103303693824096)+[`tls`](https://www.cloudflare.com/zh-cn/learning/ssl/transport-layer-security-tls/)伪装成一个普通的`https`请求,然后发送给`nginx`
2. `nginx` - 把收到的用户请求用`websocket`请求转发给本机上的`v2ray`服务
3. [**v2ray**](https://github.com/v2fly/v2ray-core) - [`VMess`](https://www.v2ray.com/chapter_02/protocols/vmess.html)协议的实现,用于流量转发

下面这张图可以帮助你理解这几个组件的关系:

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/v2ray_tls_websocket_nginx.9gwasm9udf.webp)


## 生成订阅链接

`v2ray`安装好以后还需要生成订阅链接给`clash`这类客户端使用

1. 运行`docker logs -f v2ray`命令可以看到`vmess`链接,将其复制下来

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.2kropbu8tq.webp)

2. 使用[ACL4SSR 在线订阅转换](https://acl4ssr-sub.github.io/)生成`clash`订阅链接

<VidStack   src="https://cruldra-pic.oss-cn-hangzhou.aliyuncs.com/bandicam 2024-03-29 21-19-35-915.mp4" />

