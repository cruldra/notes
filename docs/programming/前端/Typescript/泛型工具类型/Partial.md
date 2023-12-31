---
title: Partial
comment: false
editLink: false
prev: false
next: false
order: 1
---


## 简介

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)将传入的类型`T`的所有属性变为可选的

## 应用场景

如果有一个类型,你想临时使它的某些或全部属性成为可选的,就可以使用`Partial<T>`来实现

`Partial<T>`本质上是通过映射类型定义的:
```ts
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

## 示例

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

function updateUser(id: number, fieldsToUpdate: Partial<User>) {
  // ...
}

// 你可以只传入需要更新的字段
updateUser(1, { name: "New Name" });
```

