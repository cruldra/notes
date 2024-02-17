---
title: Service Worker
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[`Service Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)是一种在`Web`
浏览器中运行的脚本,它是一个本地网页和服务器之间的代理服务器.

`Service Worker`被设计用于提高`Web`应用程序的离线体验,它可以拦截和处理特定的网络请求,这意味着你可以在用户离线时从缓存中提供先前已缓存的内容.基于这一特点,也可以将其用于推送通知、后台同步等功能.

## 应用场景

* **离线缓存** - 通过拦截和处理特定的网络请求,你可以在用户离线时从缓存中提供先前已缓存的内容,这次大大提高`Web`应用程序的离线体验
* **推送通知** - 即使在用户没有打开网站的情况下,`Service Worker`也可以接收服务器的推送通知,并显示给用户
* **后台同步** - `Service Worker`
  可以在后台自动同步数据,比如说在没有网络连接时,应用可以允许用户继续阅读和修改数据,一旦网络恢复,`Service Worker`
  可以将本地更改同步到服务器

## 浏览器支持

[`Service Worker`](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)是一项`Web`
标准,需要浏览器提供支持,目前主流的浏览器都支持

### 检查浏览器对`Service Worker`的支持

```js
if ('serviceWorker' in navigator) {
  // Service Worker 支持的代码
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    // 注册成功
    console.log('Service Worker 注册成功:', registration);
  }).catch(function(error) {
    // 注册失败
    console.log('Service Worker 注册失败:', error);
  });
} else {
  // 浏览器不支持 Service Worker
  console.log('此浏览器不支持 Service Worker。');
}
```

### 各浏览器对`Service Worker`的支持情况

* [ie和safari](https://poe.com/s/PyxEAdnuqlhtaaQjjWyQ)
