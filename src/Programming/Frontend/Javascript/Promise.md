---
title: Promise
comment: false
editLink: false
prev: false
next: false
---

https://poe.com/s/uUAz4pZd6InD3hChAUAU

## race

`Promise.race`方法接收一个`Promise[]`作为参数,然后创建一个新的`Promise`,这个新的`Promise`
的结果由参数数组中最先`解决(fulfilled)`或`拒绝(rejected)`的`Promise`决定

`race`的意思是`"竞赛"`,也就是多个`Promise`同时开始执行,但只有最快的一个会决定`Promise.race`返回的`Promise`的状态

```ts
let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'one');
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // "two" - promise2 更快地解决了
});
```

上面的例子中,`promise2`跑的更快,所以`Promise.race`返回的`Promise`也会解决,并且其解决值是`two`.

另一个使用经典的例子是`fetch`请求超时处理:

```ts
let promise = fetch('https://api.example.com/data'); // 假设这是一个API请求

let timeout = new Promise((resolve, reject) => {
  setTimeout(reject, 3000, '请求超时'); // 3秒后超时
});

Promise.race([promise, timeout]).then((data) => {
  console.log(data);
}).catch((error) => {
  console.error(error); // 如果API请求超过3秒没有响应，则会打印 "请求超时"
});
```
