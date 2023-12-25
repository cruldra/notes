---
title: DOM
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

`DOM`是`Document Object Model`的缩写,即文档对象模型,它是`HTML`和`XML`文档的编程接口.


## 事件(Event)

[`DOM Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event)用于和`DOM`元素进行交互的消息,它可以是用户操作触发的,也可以是 `API` 代码触发的.


### 鼠标事件(MouseEvent)

[`MouseEvent`](https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent)是用户与指针设备(如鼠标)交互时发生的事件.使用此接口的常见事件包括:

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

`clientY`属性是一个只读属性,表示事件发生时,鼠标指针(或触摸点)在浏览器窗口(或客户区,不包括工具条和滚动条)垂直方向上的位置.其值以像素计,相对于左上角为原点(0,0).

:::tip
需要注意的是,`clientY`的值可能会受到用户的滚动操作的影响,因为它是相对于浏览器窗口的,而不是相对于页面的.如果你需要的是相对于页面的位置,可以使用`pageY`属性.
:::

许多事件都包含这个属性,例如:

* 鼠标单击-[`click`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/click_event)
* 开始触摸屏幕-[`touchstart`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/touchstart_event)
* 触摸屏幕上移动-[`touchmove`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/touchmove_event)
