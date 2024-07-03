---
title: Omit
comment: false
editLink: false
prev: false
next: false
---


## 简介

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)是一个工具类型,它通过从一个给定类型中选择所有属性,然后移除在第二个类型参数中指定的键,来构造一个新类型

## 应用场景

当你想要创建一个新类型,这个类型拥有现有类型的大多数属性,但是没有某些特定属性时,就可以用到`Omit`


## 示例一

### 一般用法

```ts
interface Person {
  name: string;
  age: number;
  location: string;
}

// 创建一个新类型，该类型具有 Person 的所有属性，除了 'location'
type PersonWithoutLocation = Omit<Person, 'location'>;

// 这个类型将等同于：
// {
//   name: string;
//   age: number;
// }
```


### 第二个参数使用联合类型

```ts
type PersonWithoutAgeAndLocation = Omit<Person, 'age' | 'location'>;

// 这个类型将等同于：
// {
//   name: string;
// }
```

