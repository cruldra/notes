---
title: Flex布局
comment: false
editLink: false
prev: false
next: false
---

## 简介

[``Flex``](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)是``CSS``中的一个重要属性,用于设置弹性盒子的布局方式.

## 核心概念

### 主轴

[主轴(main axis)](https://developer.mozilla.org/zh-CN/docs/Glossary/Main_Axis)是沿着`Flex容器`中`Flex项目`
摆放的方向.主轴的方向由[flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)属性决定

::: sandpack#react-ts flex-direction 属性 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";

export default () => {
    const [flexDirection, setFlexDirection] = useState("row");
    const [tip, setTip] = useState("row: 主轴水平,元素沿主轴从左到右排列")
    return (
        <>
            <div style={{
                display: "flex",
                columnGap: "10px",
            }}>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                }}>
                    <button onClick={useCallback(() => {
                        setFlexDirection("row")
                        setTip("row: 主轴水平,元素沿主轴从左到右排列")
                    }, [])}>row
                    </button>
                    <button onClick={useCallback(() => {
                        setFlexDirection("row-reverse")
                        setTip("row-reverse: 主轴水平,元素沿主轴从右到左排列")
                    }, [])}>row-reverse
                    </button>
                    <button onClick={useCallback(() => {
                        setFlexDirection("column")
                        setTip("column: 主轴垂直,元素沿主轴从上到下排列")
                    }, [])}>column
                    </button>
                    <button onClick={useCallback(() => {
                        setFlexDirection("column-reverse")
                        setTip("column-reverse: 主轴垂直,元素沿主轴从下到上排列")
                    }, [])}>column-reverse
                    </button>
                </div>
                <div style={{
                    display: "flex",
                    width: "200px",
                    height: "200px",
                    flexDirection,
                    backgroundColor: "lightblue",
                }}>
                    <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "red",
                    }}>1
                    </div>
                    <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "green",
                    }}>2
                    </div>
                    <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "blue",
                    }}>3
                    </div>
                </div>
            </div>
            {tip}
        </>
    );
}
```

:::

## `justify-content`

[`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)属性定义了弹性盒子元素在主轴上的对齐方式.

::: sandpack#react-ts justify-content 属性 [  theme=dark]

@file /App.tsx

```tsx 
import {useCallback, memo, useState} from "react";

export default () => {
    const [justifyContent, setJustifyContent] = useState("flex-start");
    const [tip, setTip] = useState("flex-start: 子元素在主轴上的起始位置对齐")
    return (
        <>
            <div style={{
                display: "flex",
                columnGap: "10px",
            }}>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "10px",
                }}>
                    <button onClick={useCallback(() => {
                        setJustifyContent("flex-start")
                        setTip("flex-start: 子元素在主轴上的起始位置对齐")
                    }, [])}>flex-start
                    </button>
                    <button onClick={useCallback(() => {
                        setJustifyContent("flex-end")
                        setTip("flex-end: 子元素在主轴上的结束位置对齐")
                    }, [])}>flex-end
                    </button>
                    <button onClick={useCallback(() => {
                        setJustifyContent("center")
                        setTip("center: 子元素在主轴上居中对齐")
                    }, [])}>center
                    </button>
                    <button onClick={useCallback(() => {
                        setJustifyContent("space-between")
                        setTip("space-between: 子元素在主轴上均匀分布")
                    }, [])}>space-between
                    </button>
                    <button onClick={useCallback(() => {
                        setJustifyContent("space-around")
                        setTip("space-around: 子元素在主轴上均匀分布,两端间距是中间间距的一半")
                    }, [])}>space-around
                    </button>
                    <button onClick={useCallback(() => {
                        setJustifyContent("space-evenly")
                        setTip("space-evenly: 子元素在主轴上均匀分布,两端间距是中间间距的一样")
                    }, [])}>space-evenly
                    </button>
                </div>
                <div style={{
                    display: "flex",
                    width: "200px",
                    height: "200px",
                    justifyContent,
                    backgroundColor: "lightblue",
                }}>
                    <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "red",
                    }}>1
                    </div>
                    <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "green",
                    }}>2
                    </div>
                    <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "blue",
                    }}>3
                    </div>
                </div>
            </div>
            {tip}
        </>
    );
}
```

:::

## `flex-shrink`

[`flex-shrink`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)属性定义了当父容器的空间不足以容纳所有子元素时,子元素应该如何缩小.

`flex-shrink`属性指定了一个`“收缩因子”(shrink factor)`,当存在空间不足的问题时,它将控制flex项目相对于同一flex容器中的其他flex项的收缩量.

这个属性的值是一个无单位数(即,它是一个无单位的比例),默认值为1.值越大,该子元素在空间不足时收缩得越多.如果值为0,则表示该子元素不会收缩,即使容器中没有足够的空间.

语法格式如下:

```css
flex-item {
  flex-shrink: <number>; /* 默认值是1,最小为0,值越小越不会收缩 */
}
```
