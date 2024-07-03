---
title: jsoneditor
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[jsoneditor](https://www.npmjs.com/package/jsoneditor)是一个基于`Web`的工具,用于查看、编辑、格式化和验证`JSON`

![](https://cdn.jsdelivr.net/gh/hhypygy/images@master/20240126/image.s6e1pbk9gl.png)


## 安装

```bash
pnpm i jsoneditor
pnpm i -D @types/jsoneditor
```

## 在`React`中使用

::::: details JsonEditor.tsx
```tsx
import React, {useEffect, useRef} from "react";
import JSONEditor, {JSONEditorOptions} from "jsoneditor";

type JsonEditorProps = {
    value?: any
    onChange?: (value: any) => void
}
const JsonEditor = ({onChange, value = {}}: JsonEditorProps) => {
    const jsonEditorContainerRef = useRef<HTMLDivElement>(null);
    const editorRef = useRef<JSONEditor>(null);
    const options = {
        // mode: 'code',
        onChange: () => {
            onChange && editorRef.current && onChange(editorRef.current.get())
            //console.log(toJsonSchema(editor.get()))
        }
    } as JSONEditorOptions
    useEffect(() => {
        if (jsonEditorContainerRef.current) {
            //@ts-ignore
            editorRef.current = new JSONEditor(jsonEditorContainerRef.current, options)
            editorRef.current.set(value)
        }

    }, []);

    useEffect(() => {
        editorRef.current?.set(value)
    }, [value])
    return (
        <div ref={jsonEditorContainerRef} className="w-400px h-400px"></div>
    );
};


export default JsonEditor

```
:::::


::::: details App.tsx
```tsx
 <JsonEditor value={t.function?.parametersExample}
             onChange={(d) => setFunctionParameters(index, d)}/>
```
:::::
