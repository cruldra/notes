---
title: instanceof
comment: false
editLink: false
prev: false
next: false
---

## 简介

[instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)
运算符用来测试一个对象是否是一个`类(构造函数)`的实例

```js
// 定义一个自定义构造函数
function CustomType() {
    // ...
}

// 创建一个新的实例
const instanceOfCustomType = new CustomType();

// 使用instanceof检查这个实例是否是CustomType的实例
console.log(instanceOfCustomType instanceof CustomType); // 输出: true
```

`es6`中:

```js
// 定义一个自定义类
class CustomClass {
    // ...
}

// 创建一个新的实例
const instanceOfCustomClass = new CustomClass();

// 使用instanceof检查这个实例是否是CustomClass的实例
console.log(instanceOfCustomClass instanceof CustomClass); // 输出: true
```

`instanceof`的原理是检测`实例对象`的[原型](./原型(prototype).md)链上是否包含目标`类(构造函数)`的`prototype`

可以这么理解:

```js

obj instanceof  Class

// 等价于

obj.prototypeChains.includes(Class.prototype)

```
因此如果对象继承自另一个对象,`instanceof`也会返回`true`


::: sandpack#react-ts 示例 [  theme=dark]
@file /utils.ts
```ts
export const getPrototypeString = (obj: any) => {
     // return Object.prototype.toString.call(obj);
     return Object.prototype.toString.call(Object.getPrototypeOf(obj));
   // return Object.getPrototypeOf(obj)?.name
   //  return obj.toString()
}
export const getPrototypeChain = (obj: any) => {
    const chain = [];
    let currentObj = obj;
    while (currentObj != null) {
        chain.push(currentObj);
        currentObj = Object.getPrototypeOf(currentObj);
    }
    return chain;
}
```

@file /App.tsx

```tsx 
import {useCallback, useEffect, useState} from "react";
import {getPrototypeString,getPrototypeChain} from './utils.ts'

// 定义一个父类
class ParentClass {}
class ChildClass extends ParentClass {}
const childInstance = new ChildClass();

export default () => {
    const [objectPrototypeChain, setObjectPrototypeChain] = useState<object>([])
    const [arrayPrototypeChain, setArrayPrototypeChain] = useState<object>([])
    const [childInstancePrototypeChain, setChildInstancePrototypeChain] = useState<object>([])
    useEffect(() => {
        setObjectPrototypeChain(getPrototypeChain({}).map(it => getPrototypeString(it)))
        setArrayPrototypeChain(getPrototypeChain([]).map(it => getPrototypeString(it)))
        setChildInstancePrototypeChain(getPrototypeChain(childInstance).map(it => getPrototypeString(it)))
    }, [])
    return <>
        <h2>构造函数(类)的prototype属性</h2>
        <table border={1}>
            <tr>
                <th>构造函数(类)</th>
                <th>prototype属性</th>
            </tr>
            <tr>
                <td>Object.prototype</td>
                <td>{Object.prototype.toString.call({})}</td>
            </tr>
            <tr>
                <td>Array.prototype</td>
                <td>{Object.prototype.toString.call([])}</td>
            </tr>
            <tr>
                <td>ChildClass.prototype</td>
                <td>{Object.prototype.toString.call(childInstance)}</td>
            </tr>
        </table>
        <h2>对象的原型链</h2>
        <table border={1}>
            <tr>
                <th>对象</th>
                <th>原型链</th>
                <th>测试</th>
            </tr>
            <tr>
                <td>let obj = {'{}'};</td>
                <td>{objectPrototypeChain}</td>
                <td>
                    <ul>
                        <li><code>obj instanceof Object = </code>{({} instanceof Object).toString()}</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>let arr = {'[]'};</td>
                <td>{arrayPrototypeChain}</td>
                <td>
                    <ul>
                        <li><code>[] instanceof Object = </code>{([] instanceof Object).toString()}</li>
                        <li><code>[] instanceof Array = </code>{([] instanceof Array).toString()}</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>const childInstance = new ChildClass();</td>
                <td>{childInstancePrototypeChain}</td>
                <td>
                    <ul>
                        <li><code>childInstance instanceof Object = </code>{(childInstance instanceof Object).toString()}</li>
                        <li><code>childInstance instanceof ParentClass = </code>{(childInstance instanceof ParentClass).toString()}</li>
                        <li><code>childInstance instanceof ChildClass = </code>{(childInstance instanceof ChildClass).toString()}</li>
                    </ul>
                </td>
            </tr>
        </table>
    </>;
}
``` 

:::


## 使用`{}`构建的对象

使用花括号`{}`构建的对象的其原型对象为`Object.prototype`

```ts
class User{

    name:string
}


const res = {a:'1'} instanceof User 
//res = false
```

所以当你尝试匹配一个自定义类型时需要注意,参考[原型](./原型(prototype).md)

::: sandpack#react-ts 示例 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, useEffect, useState} from "react";

// 定义一个父类
class User {
    name:string
}

export default () => {
    const [isEquals, setisEquals] = useState ( '')
    const [isEquals2, setisEquals2] = useState ( '')
    useEffect(() => {
        setisEquals({name:'test'} instanceof User)
        setisEquals2((new User()) instanceof User)
    }, [])
    return <>
        <pre><code>const res = {"{name:'test'}"} instanceof User  = {isEquals.toString()}</code></pre>
        <pre><code>const res = (new User()) instanceof User = {isEquals2.toString()}</code></pre>
    </>;
}
``` 

:::
