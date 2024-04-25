---
title: Controller
comment: false
editLink: false
prev: false
next: false
---

## 简介

[Controller](https://react-hook-form.com/docs/usecontroller/controller)用于将[不受控组件](./不受控组件.md)纳入`react-hook-form`的数据流和验证机制中


## 示例

假设你正在使用一个第三方`UI`库中的`Select`组件,这个组件不是一个标准的`HTML <select>`元素,而是一个自定义的`React`组件

下面的代码展示了如何使用`Controller`来集成这个`Select`组件:

```tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'some-ui-library'; // 假设这是第三方库中的 Select 组件

function MyForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="mySelect"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]}
            onChange={(option) => field.onChange(option.value)}
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
```

在这个例子中:

1. `Controller`接收`control`对象(来自`useForm`)和字段名称`name`.
2. `render`属性是一个函数,这个函数返回你需要控制的组件.
3. `field`对象包含了必要的`onChange`,`onBlur`,`value`等属性和方法.
