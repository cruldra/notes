---
title: forwardRef
comment: false
editLink: false
prev: false
next: false
---

## 简介

[forwardRef](https://react.dev/reference/react/forwardRef)是一个`React`高阶组件, **允许你将一个`ref`从父组件传递到更深层的子组件中.**

最典型的应用场景是**在父组件中直接访问子组件的`DOM`节点**

:::tip
`ref`在`React`中用于获取组件的实际`DOM`节点或组件实例,但是函数组件没有实例,它只是一个接受`props`并返回`JSX`
的函数,所以直接给函数组件传递`ref`是没有意义的,因此如何想在函数组件中使用`ref`,就需要使用`forwardRef`
:::


## 示例

```tsx
import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const FancyInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

const App = () => {
  const inputRef = useRef();
  return (
    <div>
      <FancyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus the input</button>
    </div>
  );
};
```


## 参考

* ["函数组件由于没有实例，直接给它们传递 ref 是没有意义的"如何理解这句话](https://poe.com/s/noM7VJVoz7PbRJ1waxBs)
