---
title: 集成unocss
comment: false
editLink: false
prev: false
next: false
order: 2
---

## 流程

1. 安装相关依赖

```bash
pnpm i -D unocss @unocss/postcss
```

2. 创建`unocss.config.ts`文件

::::: details unocss.config.ts
```ts
import { defineConfig, presetUno } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    // ...
  ],
  rules: [
    [
      /^col-gap-(.+)$/,
      //@ts-ignore
      ([, d]) => {
        return {
          'column-gap': `${d}`,
        };
      },
    ],
    [
      /^row-gap-(.+)$/,
      ([, d]) => {
        return {
          'row-gap': `${d}`,
        };
      },
    ],
    // ['k1', { background: 'red' }], //静态规则
  ],
});
```
:::::

3. 创建`postcss.config.js`文件

```js
module.exports = {
    plugins: {
        '@unocss/postcss': {
            // Optional
            content: ['**/*.{html,js,ts,jsx,tsx}'],
        },
    },
};
```

4. 添加`global.css`文件

```css
@import '@unocss/reset/tailwind-compat.css';
@import url("//fonts.googleapis.com/css2?family=Allura:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap");
@unocss all;
```

5. 在入口处导入

```js
import '@/styles/global.css';
```

## 参考

* [unocss/examples/next/README.md 位于 main · unocss/unocss](https://github.com/unocss/unocss/blob/main/examples/next/README.md)
* [nextjs + antd 与 UnoCSS 样式冲突 | 天問-专注于大前端技术](https://tiven.cn/p/3b6e2011/)
