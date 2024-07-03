---
title: useEffect
comment: false
editLink: false
prev: false
next: false
---

## 简介

`useEffect`是`React`中的一个钩子(hook)函数,允许你在函数组件中执行副作用操作

:::tip
副作用指的是那些与渲染无关的操作,如数据获取、手动更改DOM、设置订阅和定时器等
:::

`useEffect`接收两个参数:

1. 副作用函数:这是一个函数,在组件渲染到屏幕之后和某些值改变之后执行
2. 依赖项数组(可选):当数组中的值发生变化时,副作用函数会重新执行.如果传递一个空数组([]),副作用函数只会在组件挂载时执行一次,在组件卸载时执行清理


## 示例

```tsx

import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  // 使用 useEffect 运行副作用
  useEffect(() => {
    // 更新文档的标题
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 更改时重新运行

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

在上面的代码中,`useEffect`用于更新页面标题以反映按钮点击的次数.副作用函数在组件每次渲染后运行,并且因为我们指定了[count]作为依赖项数组,所以只有当`count`变量发生变化时,副作用才会重新执行


## 清理副作用

有时候你需要清理副作用(比如取消订阅或清除定时器).这可以通过在副作用函数内返回一个清理函数来实现.这个清理函数会在组件卸载前以及依赖项改变导致副作用重新运行前被调用

```tsx

useEffect(() => {
  const subscription = props.source.subscribe();
  
  //清理函数会在组件卸载前以及依赖项改变导致副作用重新运行前被调用
  return () => {
    // 清理订阅
    subscription.unsubscribe();
  };
}, [props.source]); // 仅在 props.source 更改时重新运行

```
在这个清理阶段的示例中,我们假设有一个需要订阅的资源`props.source`.副作用函数设置了订阅,并返回了一个函数来取消订阅.当`props.source`改变时,旧的订阅将被取消,组件将重新订阅新的资源

## 总结

1. `useEffect`是`React`中的一个钩子(hook)函数
2. 类似这样的函数还有`useMemo`、`useCallback`、`useRef`等
3. 可以把它看成是`vue`中的`onMounted`、`onMounted`和`watch`等函数的集合

## 参考

1. [poe问答-useEffect是什么](https://poe.com/s/QVmSOn05agVafhLJqhVR)
2. [轻松学会React钩子:以`useEffect()`为例-阮一峰的网络日志](https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html)
