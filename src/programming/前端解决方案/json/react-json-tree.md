---
title: react-json-tree
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[react-json-tree](https://www.npmjs.com/package/react-json-tree)是一个用于在`React`中展示`JSON`的组件


## 安装

```bash
pnpm i react-json-tree
```

## 示例

```tsx
const Test = () => {
    const data = {
        array: [1, 2, 3],
        bool: true,
        object: {
            foo: 'bar'
        }
    }
    return (
        <div>
            <JSONTree data={data} />
        </div>
    );
};
```

效果如图:

![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240126/image.6thr2jiiri80.png)
