---
title: useCallback
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

**在`React`的函数组件中,每次组件重新渲染时,内部定义的所有函数都会被重新创建**,下面这个例子证明了这一点:

::: react-demo React 演示 1

```js
const {useState, useEffect} = React;

export default () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    //监视incrementCount函数引用的变化
    useEffect(() => {
        //如果这里被打印，说明incrementCount函数的引用变了
        alert("React 演示 1: 函数被重新创建了")
    }, [incrementCount]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>
                Click me
            </button>
        </div>
    );
};
```

```css 
```

:::

在上面这个例子中,每次点击按钮都会弹出`"函数被重新创建了"`的提示,这是因为每次组件重新渲染时,`incrementCount`
函数都会被重新创建(即`incrementCount`函数的引用发生了变化),从而触发了`useEffect`的回调函数

现在我们用`useCallback`来优化一下上面的代码:

::: react-demo React 演示 2

```js
const {useState, useEffect, useCallback} = React;

export default () => {
    const [count, setCount] = useState(0);

    // 使用useCallback包裹incrementCount函数，并移除count作为依赖项
    const incrementCount = useCallback(() => {
        // 使用函数形式的setState来更新count
        setCount((prevCount) => prevCount + 1);
    }, []); // 依赖项数组为空，incrementCount不会被重新创建

    // 监视incrementCount函数引用的变化
    useEffect(() => {
        //如果这里被打印，说明incrementCount函数的引用变了
        alert("React 演示 2: 函数被重新创建了")
    }, [incrementCount]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={incrementCount}>
                Click me
            </button>
        </div>
    );
};
```

```css 
```

:::

上面的例子中使用`useCallback`包裹`incrementCount`函数,它会记住`incrementCount`
函数的引用,并且只有在依赖项数组发生变化时才会重新创建`incrementCount`
函数,这样就避免了每次组件重新渲染时都重新创建`incrementCount`函数,从而避免了不必要的渲染和计算

## 什么时候使用`useCallback`

大部分情况下,**`React`函数组件在每次重新渲染时内部定义的所有函数都会被重新创建**
这个特性都不会带来什么问题

但是如果要把函数作为依赖被传递给子组件或其他使用了依赖数组的钩子(如`useEffect`,`useMemo`,`useReducer`等),每次渲染都创建新的函数可能会导致子组件或钩子的不必要的重渲染或重新执行.

这时就可以用`useCallback`来优化,使其仅在依赖项发生变化时才重新创建函数
