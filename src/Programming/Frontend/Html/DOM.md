---
title: DOM
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[DOM](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model)是`Document Object Model`
的缩写,即文档对象模型,它是`HTML`和`XML`文档的编程接口.

## 事件(Event)

[`DOM Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)用于和`DOM`
元素进行交互的消息,它可以是用户操作触发的,也可以是 `API` 代码触发的.

### 鼠标事件(MouseEvent)

[`MouseEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)是用户与指针设备(如鼠标)
交互时发生的事件.使用此接口的常见事件包括:

* 鼠标单击-[`click`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/click_event)
* 鼠标双击-[`dblclick`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/dblclick_event)
* 鼠标按下-[`mousedown`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousedown_event)
* 鼠标抬起-[`mouseup`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseup_event)
* 鼠标移动-[`mousemove`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mousemove_event)
* 鼠标进入-[`mouseenter`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseenter_event)
* 鼠标离开-[`mouseleave`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseleave_event)
* 鼠标移出-[`mouseout`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseout_event)
* 鼠标移入-[`mouseover`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/mouseover_event)
* 鼠标右键-[`contextmenu`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/contextmenu_event).

## 一些常用的事件属性

### clientY

`clientY`属性是一个只读属性,表示事件发生时,鼠标指针(或触摸点)在浏览器窗口(或客户区,不包括工具条和滚动条)
垂直方向上的位置.其值以像素计,相对于左上角为原点(0,0).

:::tip
需要注意的是,`clientY`
的值可能会受到用户的滚动操作的影响,因为它是相对于浏览器窗口的,而不是相对于页面的.如果你需要的是相对于页面的位置,可以使用`pageY`
属性.
:::

许多事件都包含这个属性,例如:

* 鼠标单击-[`click`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/click_event)
* 开始触摸屏幕-[`touchstart`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/touchstart_event)
* 触摸屏幕上移动-[`touchmove`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/touchmove_event)

## 拖放

:::tip
`DOM`的拖放事件提供了一种机制,可以让用户通过鼠标来拖动页面上的元素并在页面的其他部分释放它们.
:::

这些事件可以让开发者构建出直观的界面,让用户能够直接通过拖放来进行操作,比如文件上传、重新排序列表等.

以下是一些主要的拖放事件:

### 拖动

:::normal-demo

```html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dragstart Event Example</title>
    <style>
        #draggable {
            width: 100px;
            height: 100px;
            background-color: teal;
            color: white;
            line-height: 100px;
            text-align: center;
            cursor: move;
        }
    </style>
</head>
<body>

<div id="draggable" draggable="true">拖动我</div>

</body>
</html>
```

```js
document.addEventListener('DOMContentLoaded', (event) => {
    const draggable = document.getElementById('draggable');

    draggable.addEventListener('dragstart', (event) => {
        // 设置拖动数据
        event.dataTransfer.setData("text/plain", event.target.id);

        // 可以设置拖动效果
        event.dataTransfer.effectAllowed = "move";

        // 可以添加一些视觉反馈，比如改变拖动元素的样式
        event.target.style.opacity = '0.4';
    });

    draggable.addEventListener('dragend', (event) => {
        // 拖动结束后，恢复元素的透明度
        event.target.style.opacity = '';
    });
});
```

:::

### 放置

:::normal-demo

```html

<div id="drop-zone" style="width: 200px; height: 200px; border: 1px solid black;">
    拖动一些内容到这里
</div>
```

```js
document.addEventListener('DOMContentLoaded', (event) => {
    const dropZone = document.getElementById('drop-zone');

    // 当拖动的元素进入放置目标时
    dropZone.addEventListener('dragenter', (event) => {
        // 通常需要阻止默认行为
        event.preventDefault();
        // 可以添加一些视觉反馈
        dropZone.style.backgroundColor = 'lightblue';
    });

    // 当拖动的元素在放置目标上方移动时
    dropZone.addEventListener('dragover', (event) => {
        alert(11)
        // 阻止默认行为是允许放置的必要条件
        event.preventDefault();
    });

    // 当拖动的元素离开放置目标时
    dropZone.addEventListener('dragleave', (event) => {
        // 移除视觉反馈
        dropZone.style.backgroundColor = '';
    });

    // 当拖动的元素被放置在放置目标上时
    dropZone.addEventListener('drop', (event) => {
        // 阻止默认行为，比如浏览器可能会默认下载文件
        event.preventDefault();
        // 处理被拖动的数据
        const data = event.dataTransfer.getData("text");
        dropZone.textContent = `Dropped content: ${data}`;
        // 恢复视觉状态
        dropZone.style.backgroundColor = '';
    });
});
```

:::
