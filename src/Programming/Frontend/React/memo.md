---
title: memo
comment: false
editLink: false
prev: false
next: false
---

## 简介

:::tip
`React`中的`memo`是一个高阶组件,**其目的是对组件进行性能优化**.

当你将一个组件包裹在`React.memo`中时,`React`将会对该组件的`props`进行浅比较,当组件的`props`
没有发生变化时,它会跳过渲染,从而避免不必要的更新,提高应用的性能.
:::

在[哪些情况下会导致组件重新渲染](./组件渲染.md#哪些情况下会触发组件重新渲染)中提到-*
*如果一个组件的父组件重新渲染,那即使这个子组件的`props`和`state`没有变化,子组件默认也会重新渲染.**

而导致父组件重新渲染的原因有很多种,**换句话说,如果父组件因为某些原因需要经常重新渲染,但是传递给这个子组件的`props`
又不会变化的情况下,这时就可以考虑使用`memo`包裹子组件来避免不必要的渲染**

看看这两个例子:

::: sandpack#react-ts React 示例 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";

const Sub = ({subCount}: { subCount: number }) => {
    return <>
        <h1>子组件的count值:{subCount}</h1>
        <h1>子组件被重新渲染了{new Date().getTime()}</h1>
    </>
}
export default () => {
    const [count, setCount] = useState(0)
    const [subCount, setSubCount] = useState(1)
    return <div>
        <h1>父组件的count值:{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <Sub subCount={subCount}/>
    </div>;
}
```

@setup

```js
{
    dependencies: {
    }
}
```

:::

在上面的例子中,子组件没有用`memo`包裹,所以每次父组件重新渲染(由`setCount`的调用触发)时,即使子组件的`props`值始终是`1`
,它也会重新渲染(时间戳每次都变了).

现在我们再用`memo`函数包裹一下子组件:
::: sandpack#react-ts React 示例2 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";

const Sub = memo(({subCount}: { subCount: number }) => {
    return <>
        <h1>子组件的count值:{subCount}</h1>
        <h1>子组件被重新渲染了{new Date().getTime()}</h1>
    </>
})
export default () => {
    const [count, setCount] = useState(0)
    const [subCount, setSubCount] = useState(1)
    return <div>
        <h1>父组件的count值:{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <Sub subCount={subCount}/>
    </div>;
}
```

@setup

```js
{
    dependencies: {
    }
}
```

:::

用`memo`函数包裹后,现在再点击`+`或者`-`按钮,子组件的时间戳始终是第一次渲染出来的,说明子组件没有重新渲染.

## 用法

```jsx
const MyComponent = React.memo(function MyComponent(props) {
    // ... 这里是组件的实现 ...
});
```

或者使用箭头函数:

```jsx
const MyComponent = React.memo((props) => {
    // ... 这里是组件的实现 ...
});
```

## 特点

1. `React.memo`只检查 `props`的变化.如果组件依赖于`state`或`context`,并且这些值发生变化,即便是被React.memo包裹,组件也会重新渲染.
2. 默认情况下,`React.memo`使用浅比较.如果需要进行更复杂的比较,可以传递第二个参数作为比较函数.
3. `React.memo`并不是防止组件重新渲染的银弹.在某些情况下,使用它可能不会带来性能提升,甚至可能会有性能损失(
   比如对于始终会随父组件变化而变化的`props`,增加了比较操作的开销).因此,只建议在确实需要优化的组件上使用`React.memo`.

## 使用场景

在以下几种情况下可以考虑使用`React.memo`来优化组件渲染性能:

1. 相对复杂,或者渲染开销(性能消耗)较大的组件.
2. 父组件频繁更新,但是这些更新并不影响子组件的`props`.
3. 长列表中的列表项组件,因为列表项组件的数量可能非常多,所以需要尽量减少不必要的渲染.

在以下几种情况下不建议使用`React.memo`:

1. 组件很简单,渲染开销几乎可以忽略不计.
2. 组件的`props`在几乎每次渲染时都会变化.
3. 组件有大量的`props`,这会使得`浅比较`的开销大于组件的渲染开销.
