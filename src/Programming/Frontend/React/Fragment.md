---
title: Fragment
comment: false
editLink: false
prev: false
next: false
---

## 简介

`JSX`语法要求你的`render`方法或者函数组件返回**单一的根节点**,所以当你在一个组件中返回多个`JSX`元素时,你必须将它们包裹在一个父元素中.

[Fragment](https://react.dev/reference/react/Fragment)是一个组件,用于在不额外创建`DOM`元素的情况下,将多个元素组合在一起.

```jsx

const Test = () => {
    return (
        <React.Fragment>
            <ChildA/>
            <ChildB/>
            <ChildC/>
        </React.Fragment>
    )
}
```

等价于

```html

<ChildA/>
<ChildB/>
<ChildC/>
```

也可以使用`<></>`语法糖

```jsx
const Test = () => {
    return (
        <>
            <ChildA/>
            <ChildB/>
            <ChildC/>
        </>
    )
}
```

:::tip
短语法`<></>`是`<React.Fragment />`的语法糖,两者在功能上是完全相同的.但需要注意的是,由于短语法不支持`键(key)`
或属性,如果你需要设置这些值,你必须使用`<React.Fragment>`.
:::


## 示例

比如说有一个组件用于渲染用户列表:

::: sandpack#react-ts React 示例 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";

type User = {
    id: number;
    name: string;
    email: string;
    index?: number
}

const UserRender = ({id, name, email, index}: User) => {
    return    <tr>
        <td>{name}</td>
        <td>{email}</td>
    </tr>
}

export default () => {
    const users: User[] = [
        {id: 1, name: 'Robin', email: 'Robin@gmail.com'},
        {id: 2, name: 'Dennis', email: 'Dennis@gmail.com'},
        {id: 3, name: 'Frances', email: 'Frances@gmail.com'},
    ]
    return (
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => <UserRender index={index} {...user} />)}
            </tbody>
        </table>
    );
};
``` 
:::

现在我想每隔两行多渲染一个分隔行,也就是说每当`index % 2 === 0`的时候,我需要多渲染一个`<tr>`元素

但是由于`JSX`要求返回单一的根节点,所以我如果像下面这样写会报错:

```tsx
const UserRender = ({id, name, email, index}: User) => {
    return
    index % 2 === 0 ?
        (
            <tr className="divider-row">
                <td colSpan="2">Divider Row</td>
            </tr>
        <tr>
            <td>{name}</td>
            <td>{email}</td>
        </tr>
        ) //这里直接返回两个tr会报错
:
    <tr>
        <td>{name}</td>
        <td>{email}</td>
    </tr>
}
```
错误如下:

```text
Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (16:8)
翻译:相邻的 JSX 元素必须包含在封闭标签中
```

此时我们可以把这两个`<tr>`包裹在一个`<div>`中,但是这样会破坏`table`的结构

::: sandpack#react-ts React 示例 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";

type User = {
    id: number;
    name: string;
    email: string;
    index?: number
}

const UserRender = ({id, name, email, index}: User) => {
    return index % 2 === 0 ?
        <div>
            <tr className="divider-row">
                <td colSpan="2">Divider Row</td>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
            </tr>
        </div>
:  <tr>
        <td>{name}</td>
        <td>{email}</td>
    </tr>
}

export default () => {
    const users: User[] = [
        {id: 1, name: 'Robin', email: 'Robin@gmail.com'},
        {id: 2, name: 'Dennis', email: 'Dennis@gmail.com'},
        {id: 3, name: 'Frances', email: 'Frances@gmail.com'},
    ]
    return (
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => <UserRender index={index} {...user} />)}
            </tbody>
        </table>
    );
};
``` 
:::

上面可以看到,虽然不报错了,但是表格的结构也被破坏了,此时`dom`结构如图:

![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240205/image.6ljppe5iddo0.png)

现在我们用`Fragment`组件来解决这个问题:

::: sandpack#react-ts React 示例 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";

type User = {
    id: number;
    name: string;
    email: string;
    index?: number
}

const UserRender = ({id, name, email, index}: User) => {
    return index % 2 === 0 ?
        <>
            <tr className="divider-row">
                <td colSpan="2">Divider Row</td>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
            </tr>
        </>
:  <tr>
        <td>{name}</td>
        <td>{email}</td>
    </tr>
}

export default () => {
    const users: User[] = [
        {id: 1, name: 'Robin', email: 'Robin@gmail.com'},
        {id: 2, name: 'Dennis', email: 'Dennis@gmail.com'},
        {id: 3, name: 'Frances', email: 'Frances@gmail.com'},
    ]
    return (
        <table border="1">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => <UserRender index={index} {...user} />)}
            </tbody>
        </table>
    );
};
``` 
:::

此时的`dom`结构是正常的:

![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240205/image.7mfp1hsa2z4.png)
