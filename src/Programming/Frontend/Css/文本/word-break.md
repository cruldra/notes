---
title: word-break
comment: false
editLink: false
prev: false
next: false
---

## 简介

[word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)属性用来指定如何对单词进行换行处理

## normal

`normal`是默认值,表示换行行为遵循默认的规则:

::: code-tabs#normal
@tab:active css

```css
.name{
    word-break: normal;
}
```

@tab unocss
```css
.break-normal {
    overflow-wrap: normal;
    word-break: normal;
}
``` 
:::

1. **空格和连字符**:单词会在空格或连字符[^连字符]处断行.
2. **单词边界**:在英文等使用空格分隔单词的语言中,单词不会在内部断开,只会在单词之间的空格处换行.
3. **CJK文字**:`中文`、`日文`和`韩文`(统称CJK文字)通常不使用空格分隔单词,所以会在字符之间断行.
4. **其他标点符号**:某些标点符号(如`逗号`、`句号`)可能也被视为断行点.

::: normal-demo 遇到空格换行
```html

<div style="width: 200px ;height: 200px;border: 1px solid rebeccapurple;">
   aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
</div>
```
:::

::: normal-demo 遇到连字符换行
```html

<div style="width: 200px ;height: 200px;border: 1px solid rebeccapurple;">
    https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
</div>
```
:::

::: normal-demo CJK文字
```html

<div style="width: 200px ;height: 200px;border: 1px solid rebeccapurple;">
   对于CJK文字通常不使用空格分隔单词所以会在字符之间断行
</div>
```
:::


## all

无视换行规则限制,允许在任何字符间断行

::: code-tabs#all
@tab:active css

```css
.name{
    word-break: break-all;
}
```

@tab unocss
```css
.break-all {
    word-break: break-all;
}
``` 
:::

::: normal-demo 到达容器边界时就换行
```html

<div style="width: 200px ;height: 200px;border: 1px solid rebeccapurple;word-break: break-all">
    https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
</div>
```
:::

[^连字符]: 什么是连字符

    `连字符(hyphen)`是一个标点符号,通常用于连接两个相关的词以形成一个复合词,或者在单词的音节之间分割以适应文本的断行
    
    比如`https://developer.mozilla.org/en-US/docs/Web/CSS/word-break`这个链接中的`-`就是连字符
