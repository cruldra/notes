---
title: scroll-margin
comment: false
editLink: false
prev: false
next: false
---

## 简介

[scroll-margin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/scroll-margin)用于控制**可滚动区域停止滚动时视图中元素的对齐方式**


## 应用场景

帮助确保每个项目在被滚动到视图中时不会紧贴容器的边界,提升用户体验

## 语法格式

::: code-tabs#normal
@tab:active css

```css
.name{
    scroll-margin: <length> <length> <length> <length>;
    scroll-margin-top: <length>;
    scroll-margin-right: <length>;
    scroll-margin-bottom: <length>;
    scroll-margin-left: <length>;
}
```

@tab unocss

```css
scroll-m[[x|y],-[t|b|l|r]]-[length]
``` 

:::

## 示例

假设你有一个水平滚动的图片画廊,每次用户滚动结束时,你希望每张图片都能完美居中显示,并且在图片两侧保留一些空间

::: normal-demo 演示

```html
 <div class="gallery">
    <img class="photo" src="https://picsum.photos/200/300" alt="Photo 1">
    <img class="photo" src="https://picsum.photos/200/300" alt="Photo 2">
    <img class="photo" src="https://picsum.photos/200/300" alt="Photo 3">
    <img class="photo" src="https://picsum.photos/200/300" alt="Photo 3">
    <img class="photo" src="https://picsum.photos/200/300" alt="Photo 3">
    <img class="photo" src="https://picsum.photos/200/300" alt="Photo 3">
  </div>
```
 

```css
  .gallery {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
  .photo {
    scroll-snap-align: center;
    scroll-margin-left: 1.25rem;
    scroll-margin-right: 1.25rem;
    width: 300px;
    height: 200px;
    margin: 0 10px;
  }
```

:::
