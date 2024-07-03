---
title: React+TS项目统一代码风格
comment: false
editLink: false
prev: false
next: false
---

## `ESLint`

[ESLint](https://eslint.org/)用于静态代码分析,类似`java`中的`checkstyle`和`findbugs`.

1. 安装`ESLint`及相关插件

```bash
pnpm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks
```

2. 在根目录下创建`.eslintrc.cjs`文件

```javascript
module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint/eslint-plugin"
  ],
  settings: {
    react: {
      "version": "detect"
    }
  },
  rules: {
    "no-console": process.env.NODE_ENV === 'production'
      ? 'error'
      : 'off',
    "no-debugger": process.env.NODE_ENV === 'production'
      ? 'error'
      : 'off',
    
   	 // 其余配置项自行添加
  }
}
```

3. 在根目录下创建`.eslintignore`文件

```text
node_modules
build
dist
```

4. 在`package.json`文件中添加`lint`脚本

```json
{
  "scripts": {
    "lint:ts": "eslint \"{src,tests}/**/*.{js,jsx,ts,tsx}\" --fix"
  }
}
```

5. 在`WebStorm`中启用`ESLint`

![](https://github.com/cruldra/picx-images-hosting/raw/master/image.8vmpemp1y7.webp)

6. 自定义代码风格

在`.eslintrc.js`文件中加一条规则,要求`强制在块语句中使用大括号`

```javascript
module.exports = {
  rules: {
    "curly": ["error", "all"],
  }
}
```

![](https://github.com/cruldra/picx-images-hosting/raw/master/image.101yha53eo.webp)

7. 测试是否生效

![](https://github.com/cruldra/picx-images-hosting/raw/master/image.1zi1ug6nh8.webp)

## Prettier

[Prettier](https://prettier.io/)是一个代码格式化工具,可以帮助我们统一代码风格.

1. 安装`Prettier`

```bash
pnpm i -D prettier eslint-plugin-prettier
```

2. 在根目录下创建`.prettierrc.cjs`文件

```javascript
module.exports = {
    // 字符串使用单引号
    singleQuote: true,
    // 大括号内的首尾需要空格
    bracketSpacing: true,
    // 末尾不需要逗号
    trailingComma: 'none',
    // 箭头函数参数括号
    arrowParens: 'avoid',
    // 在jsx中把'>' 是否单独放一行
    jsxBracketSameLine: true,
    // 使用默认的折行标准
    proseWrap: 'preserve',
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
    // 换行符使用 crlf/lf/auto
    endOfLine: 'auto'
}
```

3. 在`.eslintrc.js`文件中添加`Prettier`插件

```javascript
module.exports = {
  plugins: [
    "eslint-plugin-prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
}
```

4. 在`package.json`文件中添加`format`脚本

```json
{
  "scripts": {
    "format": "prettier --write \"{src,tests}/**/*.{js,jsx,ts,tsx}\""
  }
}
```

## Husky+Lint-Staged

[Husky](https://typicode.github.io/husky)可以在`git`提交前执行脚本,`Lint-Staged`可以只检查`git`暂存区的文件.

1. 安装`Husky`和`Lint-Staged`

```bash
pnpm i -D husky lint-staged
```

2. 在`package.json`文件添加`husky`安装脚本

```json
"scripts": {
    "prepare": "husky install"
}
```

3. 运行这个脚本然后会看到根目录下新建了一个`.husky`文件夹以及一堆默认脚本

![](https://github.com/cruldra/picx-images-hosting/raw/master/image.77dchht3g4.webp)

4. 在`.husky/pre-commit`文件夹中添加`pre-commit`脚本

```bash
pnpm run type-check
npx --no-install lint-staged
```

5. 在`package.json`文件中添加`lint-staged`配置

```json
"lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix"
    ]
  }
```

## 总结

至此,我们已经完成了`React+TS`项目的统一代码风格配置.

## 参考

* [react typescript项目配置eslint+prettier](https://blog.csdn.net/weixin_43233914/article/details/118937811)
* [husky + lint-staged](https://blog.csdn.net/xs20691718/article/details/122727980)
* [Lobe Chat](https://github.com/lobehub/lobe-chat)
