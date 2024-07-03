---
title: useWatch
comment: false
editLink: false
prev: false
next: false
---

## 简介

[useWatch](https://react-hook-form.com/docs/usewatch)
钩子用于监听表单中一个或多个字段的变化.当指定的字段值发生变化时,`useWatch`将返回这些字段的当前值

::: sandpack#react-ts 示例 [  theme=dark]

@file /App.tsx

```tsx 
import { useForm, useWatch } from 'react-hook-form';

function Form() {
  const { control } = useForm();
  const watchedValue = useWatch({
    control,
    name: 'example', // 监听的字段名称
  });

  return (
    <form>
      <input {...control.register('example')} />
      <p>当前值：{watchedValue}</p>
    </form>
  );
}

export default () => {
    return (
        <>
          <Form />
        </>
    );
}
``` 

@setup

```js
{
    dependencies: {
        "react-hook-form"
    :
        "^7.43.9",
    }
}
```

:::

上面的例子中,任何对`example`字段的修改都会立即反映在下面的段落中

## 监听多个字段

`useWatch`还可以同时监听多个字段的变化,只需要传入一个字段名称数组即可:

```tsx
const watchedValues = useWatch({
  control,
  name: ['example1', 'example2'], // 监听的字段名称数组
});
```

## 条件监听

**由于`useWatch`始终可以拿到字段的最新值,因此可以用作条件渲染**.例如,根据一个选择框的值来显示或隐藏表单的其他部分

```tsx
const showDetails = useWatch({
  control,
  name: 'showDetails',
});

return (
  <form>
    <input {...control.register('showDetails')} type="checkbox" />
    {showDetails && <input {...control.register('details')} />}
  </form>
);
```
