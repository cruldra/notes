---
title: zod
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 安装

::: code-tabs#defineProps

@tab:active pnpm

```bash
pnpm add zod
```

@tab npm

```bash
npm install zod
```

:::


## 基本用法

一个常见的场景是用户登录时的表单验证,假如用户使用`手机号(phoneNumber)`和`验证码(code)`登录

```ts
interface LoginParams {
  phoneNumber: string;
  code: string;
}
```

使用`zod`验证时首先需要定义一个`schema`

```ts
import { z } from 'zod';
// 定义一个用户模式
const UserSchema = z.object({
    phoneNumber: z.string().min(11).max(11),
    code: z.string().min(6).max(6),
});

// 这将自动推导出User类型
type LoginParams = z.infer<typeof UserSchema>;
```

然后在获得用户输入后进行验证

```ts

try {
    // 假设这是从某个API或用户输入中获取的数据
    const userData = {
        phoneNumber: '12345678901',
        code: '123456',
    };

    // 验证数据，如果数据不符合模式，会抛出一个错误
    const user = UserSchema.parse(userData);

    console.log(user); // 如果数据有效，就会打印出来
} catch (error) {
    if (error instanceof z.ZodError) {
        // 这里处理错误，例如可以记录或返回错误信息
        console.error(error.errors);
    }
}

```

## 自定义异常消息

```ts

const LoginParamsSchema = z.object({
  phoneNumber: z.string().regex(RegexUtil.CHINA_MAINLAND_PHONE_NUMBER,"这不是一个有效的手机号"),
  code: z.string().regex(RegexUtil.CODE_SIX,'验证码必须是6位数字')
});

```

## 错误收集策略

默认情况下,`zod`会收集所有错误,但是有时候我们可能只想收集第一个错误,`zod`官方没有提供这样的支持

[[question] is it possible to stop parsing on the first error? · Issue #1403 · colinhacks/zod](https://github.com/colinhacks/zod/issues/1403)


## `parse`和`safeParse`

使用`parse`尝试将给定的对象解析为定义的`Schema`时,如果不符合条件,会抛出`ZodError`

```ts
import { z } from 'zod';

const schema = z.object({
  username: z.string(),
});

try {
  const data = schema.parse({ username: 'johndoe' });
  // data 正确解析后的对象
} catch (error) {
  if (error instanceof z.ZodError) {
    // 处理验证错误
    console.log(error.errors);
  }
}
```

`safeParse`方法提供了一种更安全的数据验证方式,它不会抛出错误,而是返回一个对象,该对象包含验证是否成功的信息以及解析后的数据或验证错误.

```ts
import { z } from 'zod';

const schema = z.object({
  username: z.string(),
});

const result = schema.safeParse({ username: 'johndoe' });

if (result.success) {
  // result.data 包含解析后的有效数据
} else {
  // result.error 包含验证错误
  console.log(result.error.errors);
}
```
