---
title: Pick
comment: false
editLink: false
prev: false
next: false
---

## 简介

:::tip
[Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)工具类型用于从一个已有的类型中选取一组属性来构造一个新的类型

:::

它的类型定义如下:

```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```

使用[Pick](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)
类型,你可以从一个大型复杂的类型中创建一个只包含你需要的属性的子集类型.

::: playground#ts Pick示例

@file index.ts

```ts
interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// 使用Pick创建一个新类型，只包含Todo类型中的title和completed属性。
type TodoPreview = Pick<Todo, 'title' | 'completed'>;

// 此时如果你尝试给TodoPreview添加description属性，将会报错。
const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
    description: 'My room is a mess',
};
```

:::
