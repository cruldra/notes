---
title: useRef
comment: false
editLink: false
prev: false
next: false
---

## 简介

`useRef`是`React`中的一个钩子(hook)函数,用于获取对`DOM`元素的直接引用,或者在组件的整个生命周期内保持一个可变的引用,而不会触发组件的重新渲染


`useRef`返回一个可变的ref对象,其`.current`属性被初始化为传递给`useRef`函数的参数(初始值).**返回的对象将在组件的整个生命周期内保持不变**


## 应用场景

### 用于获取`DOM`元素的引用

```tsx
import React, { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    // 当组件装载后，input元素获得焦点
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}
```

### 用于保存任何可变值

```tsx
import React, { useRef } from 'react';

function TimerComponent() {
    
    //这个值在组件的整个生命周期内都保持不变，且不会触发组件的重新渲染。
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  // 你可以在这里添加生命周期事件来清除计时器等

  return (
    <>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}
```

## 和`vue`中的`ref`的区别

1. 响应式: `React`的`useRef`生成的对象不是响应式的,即`.current`属性的变化不会引起组件的重新渲染,而`vue`的`ref`生成的对象是响应式的,即`ref`对象的变化会引起组件的重新渲染
2. 用途: `React`的`useRef`主要用于获取`DOM`元素的引用,而`vue`的`ref`除了可以获取组件的引用外用途更广泛,比如状态存储
3. API设计: `React`的`useRef`只能在函数组件中使用,而`vue`的`ref`在[选项式API](../vue/API风格.md#选项式options-api)中是作为特殊属性用于模板,而在[组合式API](../vue/API风格.md#组合式composition-api)中则是一个函数,可以在`Vue`的`setup`函数中使用
