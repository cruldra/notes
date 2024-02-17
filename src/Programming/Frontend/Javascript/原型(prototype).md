---
title: 原型(prototype)
comment: false
editLink: false
prev: false
next: false
---

## 简介

[对象原型](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes)是`js`中用来实现继承和共享属性或方法的机制.

每个`类(构造函数)`都有一个静态属性`prototype`,这个属性是一个对象,包含了所有实例共享的属性和方法.

```js
Object.prototype
Array.prototype
String.prototype
```

然后`类(构造函数)`在使用`new`新建一个实例的时候会将这个新实例的`__prototype__`属性指向这个静态的`prototype`对象.

```js
const obj = new Object()
//obj.__prototype__ === Object.prototype
```

最后就形成了:

1. 每个对象都有一个`__prototype__`属性,指向它的原型对象
2. 也就是**构造这个对象的那个构造函数**的静态`prototype`属性

它是唯一的,也就是说相同构造函数构造出来的实例的`__prototype__`是相同的

::: sandpack#react-ts 示例
@file /App.tsx

```tsx
import {useCallback, useEffect, useState} from "react";

export default () => {
    const [obj1, setObj1] = useState(new Object())
    const [obj2, setObj2] = useState(new Object())
    const [isEquals, setIsEquals] = useState(false)
    const [isEquals2, setIsEquals2] = useState(false)

    const checkEquals = () => {
        setIsEquals(obj1.__proto__ === Object.prototype)
        setIsEquals2(obj1.__proto__ === obj2.__proto__)
        // alert( (new Object()).__proto__ === Object.prototype  ===(new Object()).__proto__)
    }
    return <>
        <pre> <code>const obj1 = new Object() = {obj1.toString()}</code> </pre>
        <pre> <code>obj.__prototype__ === Object.prototype  = {isEquals.toString()}</code><button
            onClick={checkEquals}>判断</button></pre>
        <pre> <code>obj1.__proto__ === obj2.__proto__  = {isEquals2.toString()}</code> </pre>
    </>
}

```

:::

3. 第一条也适用于这个原型对象,所以就形成了一个原型链,直到对象的`__prototype__`为`null`为止,因为`null`没有原型对象

4. 如果尝试访问`实例对象`上不存在的属性或方法,`js`会尝试在原型链上查找,直到找到为止,如果找不到就返回`undefined`,例如:

::: sandpack#react-ts 示例
@file /App.tsx

```tsx
import {useCallback, useEffect, useState} from "react";

class Parent {
    constructor() {
        this.name = 'parent'
    }

    say() {
        return 'parent say'
    }
}

class Child extends Parent {
    constructor() {
        super()
        this.name = 'child'
    }
}

export default () => {
    const [child, setChild] = useState(new Child())
    const [sayRes, setSayRes] = useState(undefined)
    const [toStringRes, setToStringRes] = useState(undefined)

    const childSay = () => {
        setSayRes(child.say())
        setToStringRes(child.toString())
    }

    return <>
        <pre> <code>const child = new Child() = {child.toString()}</code> </pre>
        <pre> <code>child.say() = {sayRes}</code><button onClick={childSay}>child.say()</button></pre>
        <pre> <code>child.toString() = {toStringRes}</code> </pre>
    </>
}

```

:::

从上面的例子中可以看到,`Child`类没有实现`say`方法,它最终调用的是原型链上的`Parent`类的`say`方法.这就是`js`中的继承

那`Parent`类也没定义`toString`方法,为什么`child.toString()`不会报错呢?

这是因为`js`中所有对象的原型链最终都会指向`Object.prototype`,而`Object.prototype`上有`toString`
方法,所以`child.toString()`最终调用的是`Object.prototype`上的`toString`方法

`Object.prototype`也不是原型链的最后一个,它应该是倒数第二个,最后一个是`null`,也就是`Object.prototype`的`__prototype__`=`null`
