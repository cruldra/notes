---
title: useState
comment: false
editLink: false
prev: false
next: false
---

## 简介

`useState`是`React`中的一个钩子(hook)函数,允许你在函数组件中添加`状态(响应式变量)`

在类组件中,状态通常是通过`this.state`和`this.setState`来管理的,而在函数组件中,`useState`提供了类似的功能

每次调用`useState`时,它都会返回一个数组,其中第一个元素是当前状态值,第二个元素是一个允许你更新该状态的函数.

**当你调用这个函数更新状态时,组件会重新渲染,并且新的状态值会在下一次渲染中使用.**


## 示例一

```tsx
import React, { useState } from 'react';

function Counter() {
  // 初始化计数器的状态为0
  const [count, setCount] = useState(0);

  // 定义一个函数来增加计数器
  const increment = () => {
    setCount(count + 1);
  };

  // 定义一个函数来减少计数器
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={increment}>
        Click me to increment
      </button>
      <button onClick={decrement}>
        Click me to decrement
      </button>
    </div>
  );
}
```
在上面的例子中,我们使用`useState(0)`初始化`count`的状态值为`0`.`useState`返回了一个包含两个元素的数组,第一个元素`count`是当前的状态值,第二个元素`setCount`是一个函数,用于更`新count`的值.

每当你调用`setCount`函数时,`React`会安排一次组件的重新渲染,并且在组件的下一个渲染中使用新的状态值.这就是`React`中的响应式状态更新,它使得状态的变化能够自动地反映在组件的输出上.

## 示例二:惰性初始化

```tsx
const [state, setState] = useState(() => {
  // 这个函数只会在组件的初始渲染时被调用
  const initialState = performExpensiveCalculation();
  return initialState;
});
```

在上面的代码中,`performExpensiveCalculation`函数只会在组件的初始挂载时被调用,而不会在每次渲染时都调用,从而优化性能


## 总结

和`vue`中的`ref`函数一样,都是用于创建响应式变量,只是具体使用方式不同

