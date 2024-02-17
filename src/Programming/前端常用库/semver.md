---
title: semver
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[semver](https://www.npmjs.com/package/semver)
用于在`Node.js`和`浏览器`
环境中管理软件版本号,它遵循[语义化版本控制规范](../../Terminology/语义化版本控制(Semantic%20Versioning).md)

## 示例

```js

const semver = require('semver');

// 比较版本号
semver.gt('1.2.3', '9.8.7');  // false
semver.lt('1.2.3', '9.8.7');  // true

// 检查版本号是否满足某个范围
semver.satisfies('1.2.3', '^1.0.0');  // true

// 获取满足范围的最新版本
semver.maxSatisfying(['1.2.3', '1.2.4', '1.3.0'], '^1.2.0');  // '1.3.0'

// 递增版本号
semver.inc('1.2.3', 'patch');  // '1.2.4'
semver.inc('1.2.3', 'minor');  // '1.3.0'
semver.inc('1.2.3', 'major');  // '2.0.0'
```
