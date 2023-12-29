---
title: valibot
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
pnpm add valibot
```

@tab npm

```bash
npm install valibot
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

和`zod`一样,首先需要定义一个`schema`

```ts
import {object, Output, regex, safeParse, string} from 'valibot'; // 1.2 kB
// 定义一个用户模式
const LoginParamsSchema = object({
    phoneNumber: string([regex(RegexUtil.CHINA_MAINLAND_PHONE_NUMBER, "这不是一个有效的手机号")]),
    code: string([regex(RegexUtil.CODE_SIX, '验证码必须是6位数字')]),
});

// 这将自动推导出User类型
type LoginParams = Output<typeof LoginParamsSchema>; // { email: string; password: string }
```

然后在获得用户输入后进行验证

```ts
const res1=    safeParse(LoginParamsSchema, loginParams, {abortEarly: true});
```

## 错误收集策略

`valibot`默认情况下会收集所有错误,也可以通过`abortEarly`参数设置成只收集第一个错误,这一点比`zod`先进

```ts
  const res1=    safeParse(LoginParamsSchema, loginParams, {abortEarly: true});
```

## React Validation Hook

`React`中使用可以先封装成一个`hook`用于表单验证

::::: details useValibot.ts
```ts
import {object, ObjectEntries, safeParse} from "valibot";
import React, {Dispatch, SetStateAction, useState} from "react";
type ErrorType<T> = {
  errorPath?: keyof T
  msg?: string
}
const useValibot = <T extends Record<string, any>>(entries: ObjectEntries, initialState: T): [T, Dispatch<SetStateAction<T>>,
  handleChange: (key: keyof T) => (e: React.ChangeEvent<HTMLInputElement>) => void,
  (callback: (data: T) => void) => void ,ErrorType<T>
] => {

  const Schema = object(entries);
  //type Type = Output<typeof Schema>; // { email: string; password: string }
  const [state, setState] = useState<T>(initialState);



  const [errors, setErrors] = useState<ErrorType<T>>({});
  const handleChange = (key: keyof T) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      // 使用展开运算符来更新状态
      setState({...state, [key]: e.target.value});
      // 假设 loginParams 是当前的状态对象
    };
  };
  const isValidated = (callback: (data: T) => void) => {
    const result = safeParse(Schema, state, {abortEarly: true});
    // console.log(res1)
    // alert(JSON.stringify(res1))
    // callback(res1.data as T)
    if (result.success)
    {
      setErrors({})
      callback(result.data as T)
    }
    else {
      const errorPath = result.error.issues.at(0)?.path?.at(0)?.key as string
      const msg = result.error.issues.at(0)?.message
      console.log(errorPath, msg)
      setErrors({errorPath, msg})
      // useEffect(() => {
      //   // 这里的代码会在 `errors` 更新后执行
      //   console.log(errors);
      // }, [errors]); // 把 `errors` 作为依赖项
      //
      // result.errors.forEach((item) => {
      //   errorObj[item.key] = item.message
      // })
      // setErrors(errorObj)
    }
  };
  return [
    state,
    setState,
    handleChange,
    isValidated,
    errors
  ]
}

export default useValibot

```
:::::

这个`hook`返回一个包含5个元素的数组

* `state` - 表单数据
* `setState` - 更新表单数据的函数
* `handleChange` - 表单ui元素的`onChange`事件
* `isValidated` - 表单验证函数
* `errors` - 错误信息

### 完整示例

```tsx
interface LoginParams {
    phoneNumber: string
    code: string
}
const LoginForm = memo(() => {
    const [loginParams, setLoginParams, handleChange, isValidated, errors] = useValibot({
        phoneNumber: string([regex(RegexUtil.CHINA_MAINLAND_PHONE_NUMBER, "这不是一个有效的手机号")]),
        code: string([regex(RegexUtil.CODE_SIX, '验证码必须是6位数字')]),
    }, {phoneNumber: '', code: ''} as LoginParams)
    const handleSend = () => {
        isValidated(data => {

        })
    }
    return <>
        <Input onChange={handleChange('phoneNumber')} value={loginParams.phoneNumber}
               status={errors.errorPath === 'phoneNumber' ? 'error' : ''} placeholder="请输入手机号" size="large"/>
        {errors.errorPath === 'phoneNumber' &&
            <div className="font-size-14px color-#e3567c">{errors.msg}</div>}
        <Space.Compact size="large" style={{width: '100%'}}>
            <Input onChange={handleChange('code')} status={errors.errorPath === 'code' ? 'error' : ''}
                   value={loginParams.code} placeholder="请输入验证码"/>
            <Button className={"m-l-5px"}>发送验证码</Button>
        </Space.Compact>
        {errors.errorPath === 'code' &&
            <div className="font-size-14px color-#e3567c">{errors.msg}</div>}
    </>
})


```
