---
title: immer
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

在`JavaScript`
中,对象和数组是引用类型,这意味着==如果你直接修改了一个对象或数组,那么所有引用了这个对象或数组的地方都会受到影响==.下面的例子证明了这一点:

::: sandpack#react-ts React 示例 [  theme=dark]

@file /App.tsx

```tsx
import {memo, useState} from 'react';

const baseState = [
    {todo: "Learn typescript", done: true},
    {todo: "Try immer", done: false}
];
const newState = baseState
export default () => {
    const [baseStateEqNewState, setBaseStateEqNewState] = useState<boolean>()
    const updateDirectly = () => {
        newState.push({
            todo: "push by updateDirectly", done: true
        })
        setBaseStateEqNewState(baseState === newState)
    }
    return <div>
        <div>
            <button onClick={updateDirectly}>直接修改</button>
            baseState === newState :{baseStateEqNewState ? "true" : "false"}
        </div>
    </div>;
}
```

@setup

```js
{
    dependencies: {
        "immer"
    :
        "^10",
    }
}
```

:::

从上面的例子中可以看到,尽管我们试图基于`baseState`来创建一个`newState`

```ts
const newState = baseState
```

但是对`newState`的更改仍然会反映到`baseState`上.

```ts
baseState === newState //true
```

这在复杂的应用中可能会导致不可预测的结果,尤其是在状态管理时

[immer](https://www.npmjs.com/package/immer)提供了一种简单的方法来处理不可变数据更新,你可以用一种看似`可变`
的方式编写代码,immer在内部会处理这些更新,确保不会修改原始状态,而是创建一个新的状态副本来反映这些更新.

这样做的好处是代码更易读、易写,同时依然保持了数据的[不可变性(Immutability)](../../../Terminology/不可变性(Immutability).md).

现在我们使用`immer`来重写上面的例子:

::: sandpack#react-ts React 示例 [  theme=dark]

@file /App.tsx

```tsx
import {memo, useState} from 'react';
import {produce} from 'immer';

const baseState = [
    {todo: "Learn typescript", done: true},
    {todo: "Try immer", done: false}
];
let newState = baseState
export default () => {
    const [baseStateEqNewState, setBaseStateEqNewState] = useState<boolean>(baseState === newState)
    const updateByImmer = () => {
        newState = produce(baseState, draftState => {
            draftState.push({todo: "push by updateByImmer", done: false});
        });
        setBaseStateEqNewState(baseState === newState)
    }
    return <div>
        <div>
            <button onClick={updateByImmer}>使用immer的produce函数创建副本</button>
            baseState === newState :{baseStateEqNewState ? "true" : "false"}
        </div>
    </div>;
}
```

@setup

```js
{
    dependencies: {
        "immer"
    :
        "^10",
    }
}
```

:::

## 为什么要使用`不可变数据`

[这里](https://poe.com/s/fItBeZ48i4KrnanlpJTF)介绍了一个不使用`不可变数据`可能会出现的糟糕的情况

## 和`lodash`的`deepClone`的区别

`immer`的`produce`函数与简单地创建一个深度克隆对象有本质的区别.

虽然结果可能看起来类似即你最终得到了一个修改后的状态,而原始状态保持不变.但是`immer`的方法在性能和内存使用方面通常更优.

下面是`immer`和`deepClone`之间的一些关键区别:

* **不变性保证**

| deepClone                                                             | immer                                                            |
 |-----------------------------------------------------------------------|------------------------------------------------------------------|
| 创建对象的一个完全独立副本,包括所有嵌套的对象.这意味着无论原始对象的结构有多复杂,都会创建一个全新的结构,这可能涉及大量的处理和内存分配 | 只在需要时创建副本.如果你没有修改某个对象,`immer`不会复制它.这种方法称为结构共享,它可以显著减少不必要的复制,提高效率 | 

* **性能**

| deepClone                   | immer                                                     |
 |-----------------------------|-----------------------------------------------------------|
| 通常更消耗资源,因为无论是否需要,它都会复制整个对象树 | 通常提供更好的性能,因为它只在必要时创建新对象.如果你修改了对象的某个部分,只有那部分和它的父路径会被复制和更新. |

* **内部工作机制**

| deepClone     | immer                                                                                                                                      |
 |---------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| 通过递归复制所有属性来实现 | 使用`ES6`的[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)对象来监视状态的修改,只有当属性被修改时,才会复制原始对象的对应部分. |
