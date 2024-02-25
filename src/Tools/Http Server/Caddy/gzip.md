---
title: gzip
comment: false
editLink: false
prev: false
next: false
---

## 简介

从`Caddy2`开始默认开启`gzip`压缩,如果要自定义`gzip`压缩,可以用`Caddyfile`
中的[encode](https://caddyserver.com/docs/caddyfile/directives/encode)指令来实现.比如:

```caddy
example.com {
    root * /var/www
    file_server
    encode gzip
}
```

使用上面这个配置会导致:

1. 在客户端支持自动压缩所有静态文件
2. 如果没有手动配置压缩算法则默认使用`gzip`压缩

## 预压缩

`预压缩`是指在服务器上提前生成`gzip`文件,然后在客户端请求时直接返回`gzip`文件,而不是现场压缩.这样可以减少服务器压缩压力,提高性能.

`预压缩`用[file_server](https://caddyserver.com/docs/caddyfile/directives/file_server)
的[precompressed](https://caddyserver.com/docs/caddyfile/directives/file_server#precompressed)来配置,例如:

```caddy
example.com {
    root * /var/www
    file_server {
        precompressed gzip
    }
}
```

假设用户请求`example.css`,使用上面这个配置会导致:

1. 先看是否有`example.css`文件
2. 再看是否有`example.css.gz`文件,如果有并且客户端支持`gzip`则返回`example.css.gz`文件
3. 否则返回`example.css`文件或者`404`
