---
title: atomFamily
comment: false
editLink: false
prev: false
next: false
---

## 简介

[atomFamily](https://recoiljs.org/docs/api-reference/utils/atomFamily)
用于根据参数创建多个原子状态,每个原子状态都有自己的`key`和`default`值

这在需要动态创建多个状态时非常有用,比如一个列表中的每个元素都需要一个状态

```tsx

import {atomFamily} from 'recoil';

const todoListState = atomFamily({
  key: 'todoListState',
  default: (id) => ({
    id,
    text: '',
    isComplete: false,
  }),
});

```

## 签名

```ts

function atomFamily<T, P: Parameter>({
  key: string,

  default?:
    | T
    | Promise<T>
    | Loadable<T>
    | WrappedValue<T>
    | RecoilValue<T>
    | (P => T | Promise<T> | Loadable<T> | WrappedValue<T> | RecoilValue<T>),

  effects?:
    | $ReadOnlyArray<AtomEffect<T>>
    | (P => $ReadOnlyArray<AtomEffect<T>>),

  dangerouslyAllowMutability?: boolean,
}): P => RecoilState<T>

```

## 参数

### `effects`

`effects`是一个数组,用于定义当`atom`的值发生变化时要执行的副作用函数

```tsx
effects: [
  ({ onSet, node }) => {
    onSet(async (newValue: TConversation | null) => {
      const index = Number(node.key.split('__')[1]);
      if (newValue?.assistant_id) {
        localStorage.setItem(`assistant_id__${index}`, newValue.assistant_id);
      }
    });
  }
] as const
```

- `onSet`是一个函数,用于订阅`atom`值的变化,它接收一个回调函数作为参数
- `node`是当前发生变化的`atom`的节点信息

## 业务场景-电商应用中的购物车

假设你正在开发一个电商应用,每个用户都有一个`购物车`.每个`购物车`中可以包含多个`商品`,商品类的结构如下:

```ts
type Product = {
    // 商品 ID
    id: string;
    // 商品名称
    name: string;
    // 商品价格
    price: number;
    // 商品数量
    quantity: number;
}
```

**你希望能够根据`Product.id`来动态管理购物车中的商品状态**

::: sandpack#react-ts atomFamily实现购物车
@file /index.tsx

```tsx
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import {RecoilRoot} from 'recoil';
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
   <RecoilRoot>
    <App />
    </RecoilRoot>
  </StrictMode>
);
```

@file /store.ts

```ts 
 import { atomFamily, useRecoilState } from 'recoil';
 
 export type Product = {
    // 商品 ID
    id: string;
    // 商品名称
    name: string;
    // 商品价格
    price: number;
    // 商品数量
    quantity: number;
} 

 export const cartItemState = atomFamily<Product>({
  key: 'cartItemState',
  default: (itemId) => ({
    id: itemId,
    quantity: 0,
    name: '',
    price: 0,
  }),
});
```

@file /App.tsx

```tsx 
import {useEffect, memo, useState, useRef, ChangeEvent} from "react";
import { atomFamily, useRecoilState } from 'recoil';
import {cartItemState, Product} from './store';

//渲染购物车中的某个商品
function CartItem({ itemId }) {
  const [item, setItem] = useRecoilState(cartItemState(itemId));

  const updateQuantity = (quantity) => {
    setItem((prevItem) => ({
      ...prevItem,
      quantity,
    }));
  };

  return (
    <div>
      <p>商品 ID: {item.id}</p>
      <p>数量: {item.quantity}</p>
      <input
        type="number"
        value={item.quantity}
        onChange={(e) => updateQuantity(Number(e.target.value))}
      />
    </div>
  );
}

// 购物车组件
function Cart() {
  const itemIds = ['item1', 'item2', 'item3']; // 假设这些是购物车中的商品 ID

  return (
    <div>
      {itemIds.map((itemId) => (
        <CartItem key={itemId} itemId={itemId} />
      ))}
    </div>
  );
}

export default () => {
   
    return  <Cart />;
}
```

@setup

```js
{
    dependencies: {
         "recoil": "^0.7.7",
    }
}
```

:::

**解释:**

1. **定义`atomFamily`**:`cartItemState`是一个`atomFamily`,它根据`itemId`动态生成`atom`.每个`atom`存储一个商品的状态.
2. **使用`atomFamily`**:在`CartItem`组件中,我们使用`useRecoilState`钩子来获取和更新对应商品的状态.通过传入`itemId`参数,我们可以动态获取和管理不同商品的状态.
3. **渲染购物车**:`Cart`组件中,我们遍历`itemIds`数组,为每个商品渲染一个`CartItem`组件.这样,我们就可以动态管理购物车中的商品状态.
