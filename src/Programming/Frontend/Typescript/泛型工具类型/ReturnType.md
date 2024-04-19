---
title: ReturnType
comment: false
editLink: false
prev: false
next: false
---

## 简介

[`ReturnType`](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)
的作用是将函数类型的返回值提取出来,并构造一个新的类型

## 语法

```ts
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

## 示例

```ts
function getUser() {
  return { name: 'John', age: 30 };
}

type User = ReturnType<typeof getUser>;

// User 类型将等同于：

// {
//   name: string;
//   age: number;
// }
```
