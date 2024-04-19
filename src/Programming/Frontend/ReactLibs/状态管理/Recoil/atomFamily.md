---
title: atomFamily
comment: false
editLink: false
prev: false
next: false
---

## 简介

[atomFamily](https://recoiljs.org/docs/api-reference/utils/atomFamily)用于根据参数创建多个原子状态,每个原子状态都有自己的`key`和`default`值

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
