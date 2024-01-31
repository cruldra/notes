---
title: memo
comment: false
editLink: false
prev: false
next: false
order: 1
date: 2023-12-14
category:
  - React
tag:
  - memo
---

## 简介

`memo`是一个高阶组件,主要用途是对组件进行性能优化.

**当你用`React.memo`包裹一个组件时,`React`会浅层比较这个组件的`props`,以决定是否需要重新渲染组件**

通常,当一个组件的父组件重新渲染时,这个组件也会随之重新渲染,无论`props`是否发生变化. 这可能会导致不必要的渲染,从而影响应用程序的性能.

`React.memo`可以帮助避免这种情况,它只会在组件的`props`发生变化时才重新渲染组件

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

## 总结

1. `React.memo`只检查 `props`的变化.如果组件依赖于`state`或`context`,并且这些值发生变化,即便是被React.memo包裹,组件也会重新渲染.
2. 默认情况下,`React.memo`使用浅比较.如果需要进行更复杂的比较,可以传递第二个参数作为比较函数.
3. `React.memo`并不是防止组件重新渲染的银弹.在某些情况下,使用它可能不会带来性能提升,甚至可能会有性能损失(比如对于始终会随父组件变化而变化的`props`,增加了比较操作的开销).因此,只建议在确实需要优化的组件上使用`React.memo`.
