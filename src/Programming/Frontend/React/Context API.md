---
title: Context API
comment: false
editLink: false
prev: false
next: false
---

## 背景

复杂的`React`
应用中有一个经典的[`属性钻取(Prop Drilling)`](https://medium.com/@omkarbhavare2406/prop-drilling-in-react-8819c609c376)
问题,即:

    将数据从一个顶层组件传递到多个底层组件时必须通过中间组件传递,即使这些中间组件本身并不需要这些数据

这会导致以下几个问题:

1. **维护困难** - 随着应用的增长,如果组件层次变得更深,那么通过多个层级传递`props`可能会导致代码难以理解和维护
2. **性能问题** - 由于`props`的传递,可能会导致不必要的组件重新渲染
3. **组件耦合** - 中间组件需要知道如何传递这些`props`,但它们可能并不需要这些`props`,这违反了组件设计的`最小知识原则`
4. **重构困难** - 重构组件时需要跟踪每一个`prop`在组件树中的流动,更容易出错

## 简介

[Context API](https://react.dev/reference/react/useContext)可以解决上述问题,它是`React`
提供的一种用于**跨多个组件传递数据**的方法,而不必通过`props`一层层传递数据

### 核心概念

1. **Provider** - 用于提供数据的组件,它接收一个`value`属性,用于传递数据给它的子组件
2. **Consumer** - 用于消费数据的组件,它可以订阅`Provider`提供的数据,并在数据发生变化时重新渲染
3. **Context** - 用于创建`Provider`和`Consumer`的对象,它包含了`Provider`和`Consumer`两个属性


### 经典案例

1. **主题切换** - 多个子组件根据主题切换来渲染不同的样式
2. **用户认证** - 多个子组件根据用户的认证状态来渲染不同的内容

## 基本使用

以**主题切换**为例,演示如何使用`Context API`来实现主题切换功能

1. 定义共享的数据类型

首先定义一个类型来存储那些在子组件中共享的数据

```ts
type Theme = 'light' | 'dark';
```

2. 创建上下文对象并使用`Provider`提供数据

```tsx
import React from 'react';

// 创建一个 Context
const ThemeContext = React.createContext<Theme>('light');


// 创建一个 Provider
export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


```

3. 向子组件提供数据

被`Provider`包裹的组件可以通过`useContext`来访问`Provider`提供的数据

```tsx
import React from 'react';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};
```

4. 在子组件中使用`Consumer`消费数据

```tsx
import React from 'react';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <header style={{ backgroundColor: theme === 'light' ? '#fff' : '#333' }}>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

```
