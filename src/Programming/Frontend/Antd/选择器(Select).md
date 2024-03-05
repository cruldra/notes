---
title: 选择器(Select)
comment: false
editLink: false
prev: false
next: false
---


## 简介

## 使用对象作为选项值

`antd`的[Select](https://ant-design.antgroup.com/components/select-cn#select-props)组件可以使用`labelInValue`属性来将选项值变成一个对象,如下:

::: sandpack#react-ts 示例-1 [theme=dark]

@file /App.tsx

```tsx 
import {FC, useState} from 'react';
import {Select} from "antd";

type TestProps = {}
export const TestIndex: FC<TestProps> = ({}) => {
    const options = [
        {
            "name": "ALIPAY",
            "title": "支付宝",
            "ordinal": 0
        },
        {
            "name": "WECHATPAY",
            "title": "微信支付",
            "ordinal": 1
        },
        {
            "name": "UNIONPAY",
            "title": "银联支付",
            "ordinal": 2
        }
    ];
    const [value, setValue] = useState({
        "name": "WECHATPAY",
        "title": "微信支付",
        "ordinal": 1
    })
    return <> <Select
        value={value}
        labelInValue
        fieldNames={{label: "title", value: "name"}}
        allowClear
        options={options}
        onChange={(value) => {
            setValue(value)
        }}
    /> {`当前选中的值:${JSON.stringify(value)}`}</>;
}

export default () => {

    return <>
        <TestIndex/>
    </>;
}
```

@setup

```js
{
    dependencies: {
        "antd": "^5.14.2",
    }
}
```

:::

但上面的例子中存在一些问题:

1. 当初始值是一个对象时,组件没有正确的显示初始值.
2. 虽然选项值现在是一个对象,但是结构被改变了


要解决这个问题,可以自定义一个`ObjectSelect`:

::: sandpack#react-ts 示例-1 [theme=dark]
@file /ObjectSelect.tsx
```tsx
import {useEffect, useState} from 'react';
import {Select, SelectProps} from "antd";

type ObjectSelectProps<RecordType extends Record<string, any>> = {
    value?: RecordType;
    options: RecordType[];
    labelField?: keyof RecordType;
    valueField?: keyof RecordType;
    onChange?: (value?: RecordType) => void;
} & Omit<SelectProps, "value" | "options" | "fieldNames" | "onChange">


export const ObjectSelect = <RecordType extends Record<string, any>>({
                                                                         options,
                                                                         value = options?.[0],
                                                                         onChange,
                                                                         labelField = "label",
                                                                         valueField = "value",
                                                                         ...rest
                                                                     }: ObjectSelectProps<RecordType>) => {


    const [selectValue, setSelectValue] = useState(
        value ? value[valueField] : undefined
    )


    // 使用useState定义selectOptions，并初始化为空数组
    const [selectOptions, setSelectOptions] = useState<SelectProps["options"]>([]);

    // 使用useEffect，每次options变化时更新selectOptions
    useEffect(() => {
        if (options) {
            setSelectOptions(options.map(option => ({
                label: option[labelField],
                value: option[valueField],
            })));
        }
    }, [options, labelField, valueField, onChange, selectValue]);

    const onSelectChange = (value: any) => {
        const v = options.find((option: RecordType) => option[valueField] === value)
        setSelectValue(v?.[valueField])
        onChange?.(v!!)
    }

    return <Select
        value={selectValue}
        allowClear
        options={selectOptions}
        onChange={onSelectChange}
        {...rest}
    />;
}


```

@file /App.tsx

```tsx 
import {FC, useState} from 'react';
import {ObjectSelect} from "./ObjectSelect";

const options = [
    {
        "name": "ALIPAY",
        "title": "支付宝",
        "ordinal": 0
    },
    {
        "name": "WECHATPAY",
        "title": "微信支付",
        "ordinal": 1
    },
    {
        "name": "UNIONPAY",
        "title": "银联支付",
        "ordinal": 2
    }
];
export default () => {
    const [value, setValue] = useState({
        "name": "WECHATPAY",
        "title": "微信支付",
        "ordinal": 1
    })

    return <>
        <ObjectSelect value={value} options={options} labelField={"title"} valueField={"name"}
                      onChange={(value) => {
                          setValue(value)
                      }}
        />
        {`当前选中的值:${JSON.stringify(value)}`}
    </>
}
```

@setup

```js
{
    dependencies: {
        "antd": "^5.14.2",
    }
}
```

:::
