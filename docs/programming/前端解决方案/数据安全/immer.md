---
title: immer
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

在`JavaScript`中,对象和数组是引用类型,这意味着==如果你直接修改了一个对象或数组,那么所有引用了这个对象或数组的地方都会受到影响==.这在复杂的应用中可能会导致不可预测的结果,尤其是在状态管理时

[immer](https://www.npmjs.com/package/immer)提供了一种简单的方法来处理不可变数据更新,你可以用一种看似`可变`
的方式编写代码,immer在内部会处理这些更新,确保不会修改原始状态,而是创建一个新的状态副本来反映这些更新.这样做的好处是代码更易读、易写,同时依然保持了数据的[不可变性(Immutability)](../../../terminology/不可变性(Immutability).md).

## 为什么要使用`不可变数据`

[这里](https://poe.com/s/fItBeZ48i4KrnanlpJTF)介绍了一个不使用`不可变数据`可能会出现的糟糕的情况

## 使用

使用`immer`时,你会用到它的`produce`函数,它接受`当前的状态`和一个`制作草案函数`.在这个函数内,你可以`修改`传入的草案对象,而`produce`会根据这些修改操作生成新的状态对象

```js
import produce from 'immer';

const baseState = [
    { todo: "Learn typescript", done: true },
    { todo: "Try immer", done: false }
];

const nextState = produce(baseState, draftState => {
    draftState.push({todo: "Tweet about it"});
    draftState[1].done = true;
});

console.log(baseState)
// Output:
// [
// { todo: "Learn typescript", done: true },
//   { todo: "Try immer", done: true }
// ]

console.log(nextState);
// Output:
// [
//   { todo: "Learn typescript", done: true },
//   { todo: "Try immer", done: true },
//   { todo: "Tweet about it", done: false }
// ]
```
