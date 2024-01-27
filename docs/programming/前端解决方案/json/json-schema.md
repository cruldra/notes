---
title: json schema
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[JSON Schema](https://json-schema.org/understanding-json-schema)是一种用于对`JSON`数据进行验证的语言

## json-schema-generator

[json-schema-generator](https://www.npmjs.com/package/json-schema-generator)用于从一个`JSON`对象生成`JSON Schema`

### 安装

```bash
pnpm i json-schema-generator
pnpm i -D @types/json-schema-generator
```

### 示例

```ts
import jsonToSchema from "json-schema-generator";
jsonToSchema({
            "test": "1"
        })
```

结果如下:

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "",
  "type": "object",
  "properties": {
    "test": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "test"
  ]
}
```

## json-schema-faker

[json-schema-faker](https://www.npmjs.com/package/json-schema-faker)用于根据`JSON Schema`生成`JSON`数据


## 安装

```bash
pnpm i json-schema-faker
```

## 示例

```ts
import jsf from "json-schema-faker";
jsf.generate(it.function.parameters)
```
