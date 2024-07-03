---
title: utility-types
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

`TypeScript`内置了许多工具类型,如`Partial<T>`,`Readonly<T>`,`Record<K,T>`,`Pick<T,K>`,`Omit<T,K>`等,它们可以帮助开发者在**不改变原始类型的前提下创建新的类型**.

对于日常开发通常来说,`TypeScript`内置的工具类型已经足够使用,但有些情况下可能需要更复杂的类型转换或操作,这时候就需要用到[utility-types](https://www.npmjs.com/package/utility-types)


## DeepPartial

将传入的类型的所有属性以及嵌套属性递归地设置为可选的

```ts
import { DeepPartial } from 'utility-types';

// 假设我们有以下接口
interface MyConfig {
  db: {
    host: string;
    port: number;
    credentials: {
      username: string;
      password: string;
    };
  };
  server: {
    hostname: string;
    port: number;
  };
}

// 使用DeepPartial，所有的属性将递归地变为可选的
let partialConfig: DeepPartial<MyConfig> = {
  db: {
    credentials: {
      // 我们可以只提供部分凭据信息
      username: 'admin',
      // password属性是可选的，可以不提供
    },
  },
  // server对象是可选的，可以整个不提供
};

// 这是有效的，因为DeepPartial使所有属性都变成了可选的
```
