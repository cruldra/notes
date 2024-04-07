---
title: pc端网站应用
comment: false
editLink: false
prev: false
next: false
---

## 简介

`pc端网站应用`是指在可以直接通过在浏览器中输入网址访问的网站应用,它和`公众号`、`小程序`
等底层技术都一样,都是基于`HTML`、`CSS`、`JavaScript`等技术构建的.不同的是`公众号`、`小程序`
是在微信中运行的,而`pc端网站应用`是在浏览器中运行的.

## 接入流程

`pc端网站应用`集成`微信支付`
的入口在[这里](https://pay.weixin.qq.com/static/applyment_guide/applyment_detail_website.shtml)

### 注册商户号

首先在[这里](https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal#none)注册一个商户号

审核通过后可以在[商户平台/产品中心/已开通](https://pay.weixin.qq.com/index.php/extend/product/lists?tid=3)中看到开通了三个支付产品

![](https://cdn.jsdelivr.net/gh/hhypygy/picx-images-hosting@master/image.3but33l44ca0.webp)

在`pc端网站应用`中集成`微信支付`
主要用到[JSAPI支付](https://pay.weixin.qq.com/index.php/public/product/detail?pid=30&productType=0&category=1)
