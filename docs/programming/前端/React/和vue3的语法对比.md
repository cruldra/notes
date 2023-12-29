---
title: 和vue3的语法对比
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 响应式变量(ref)

::: code-tabs#ref
@tab:active Vue3

```vue
<script lang="ts" setup>
  const username = ref('dongjak')
</script>
<template>
  <input :value="username">
</template>
```

@tab React

```tsx
const App: React.FC = () => {
    const [username, setUsername] = useState('dongjak');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    return (
        <input value={username} onChange={handleChange} />
    );
};
```


@tab React仿Vue的v-model

```tsx
// 自定义hook，用于管理input的state
const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleChange,
    };
};
const App: React.FC = () => {
    const username = useInput('dongjak');
    return (
        <input {...username} />
    );
};
```

:::



## 响应式变量(reactive)

::: code-tabs#reactive
@tab:active Vue3

```vue
<script lang="ts" setup>
  const form = reactive({
    user:'dongjak',
    age:20
  })
</script>
<template>
  <input :value="form.user">
  <input :value="form.age">
</template>
```

@tab React

```tsx
import React, { useState } from 'react';

const App = () => {
    // 创建一个状态对象，并通过setState函数更新它
    const [form, setForm] = useState({ user: 'dongjak', age: 20 });

    // 创建一个通用的onChange处理函数来更新特定的字段
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: name === 'age' ? Number(value) : value }));
    };

    return (
        <>
            <input
                name="user"
                value={form.user}
                onChange={handleChange}
            />
            <input
                name="age"
                type="number" // 使得输入框接受数字类型
                value={form.age}
                onChange={handleChange}
            />
        </>
    );
};

export default App;
```


@tab React仿Vue的v-model

```tsx
import React, { useState } from 'react';

// 定义一个自定义Hook来处理表单状态和逻辑
function useForm<T extends Record<string, any>>(initialValues: T) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'number' ? Number(value) : value,
        }));
    };

    return {
        values,
        handleChange,
    };
}

// 使用自定义Hook的组件
const App: React.FC = () => {
    const { values, handleChange } = useForm({ user: 'dongjak', age: 20 });

    return (
        <>
            <input
                name="user"
                value={values.user}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                value={values.age}
                onChange={handleChange}
            />
        </>
    );
};

export default App;
```
:::
