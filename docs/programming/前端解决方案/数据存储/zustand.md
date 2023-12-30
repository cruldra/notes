---
title: zustand
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

`Zustand`是一个非常轻量级的状态管理库,它可以用于`React`应用程序中.它的主要优点包括:

* **简单、轻量** - `Zustand`的API非常简单和直观,易于上手,无需`Redux`那样繁琐的配置和样板代码,代码体积很小并且不依赖中间件就能处理异步逻辑或副作用
* **可切片的状态** - `Zustand`的状态是可切片的,可以根据需要将状态分割成多个`store`,每个`store`都可以独立订阅和更新,这有助于防止不必要的组件重新渲染
* **无需上下文提供者** - 状态可以直接被访问和更新,无需使用`React`的`ContextAPI`.
* **可变性与不可变性** - `Zustand`允许你选择是使用可变状态还是不可变状态,这样你可以根据项目需求灵活选择.
* **中间件和插件支持** - 尽管`Zustand`本身不需要中间件,但它支持中间件和插件,这意味着你可以扩展其功能以适应更复杂的场景.
* **不限于React** - 虽然`Zustand`在`React`中很流行,但它实际上是一个独立的库,可以用在任何`JavaScript`项目中.
* **TypeScript友好** - `Zustand`支持`TypeScript`,这意味着你可以享受到类型检查和自动完成等特性.
* **DevTools集成** - `Zustand`可以与`ReduxDevTools`集成,提供了状态时间旅行等调试功能.


## 安装

```bash
pnpm add zustand
```

## 在`React`项目中使用

### 一个简单的例子

```tsx
import create from "zustand";

//定义状态的类型
type State = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

//创建存储
const useStore = create<State>((set) => ({
    count: 0,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
}));

const Counter = () => {
    //使用存储
    const {count, increment, decrement} = useStore();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};
```
