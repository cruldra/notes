---
title: FormProvider
comment: false
editLink: false
prev: false
next: false
---

## 简介

[FormProvider](https://react-hook-form.com/docs/formprovider)用于在组件树中共享表单控制和数据,常用于复杂、多级嵌套的表单应用中.


    使用`FormProvider`可以避免逐层手动传递表单的`control`、`errors`、`setValue`等属性,简化大型表单的管理.

## 如何使用

1. 首先使用`useForm`钩子来创建一个表单实例
2. 然后使用`FormProvider`来包裹嵌套组件,这样这些嵌套的子组件都可以通过`useFormContext`访问到表单实例


## 示例

```tsx
import React from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

function NestedInput() {
  // 使用 useFormContext 来访问表单实例
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor="lastName">Last Name:</label>
      <input {...register('lastName')} />
    </div>
  );
}

function MyForm() {
  const methods = useForm(); // 创建表单实例

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}> {/* 将表单方法通过 context 提供给子组件 */}
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input {...methods.register('firstName')} />
        </div>
        <NestedInput /> {/* 嵌套组件可以直接访问表单上下文 */}
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}

export default MyForm;
```
