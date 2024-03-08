---
title: position
comment: false
editLink: false
prev: false
next: false
---
## 简介

CSS的``position``属性用于定义元素的==定位方式==,它有以下几个值:[``static``](#static)、[``relative``](#relative)、[``absolute``](#absolute)、[``fixed``](#fixed)、[``sticky``](#sticky)


## ``static``

==默认值,表示元素处于正常的文档流中,不进行特殊的定位==

## ``relative``

==将元素相对于其正常位置进行偏移==

* 可以通过设置``top``、``right``、``bottom``和``left``属性来指定元素相对于其正常位置的偏移量.
* 其他元素仍然会按照正常文档流布局,不受相对定位元素的影响.


### 场景一:元素的位置需要相对于其正常位置进行微调

:::info
当你想要微调一个元素相对于其正常位置的偏移量时,可以使用相对定位.通过设置``top``、``right``、``bottom``和``left``属性,你可以将元素在水平和垂直方向上进行微调,而不会影响其他元素的布局.
:::

::: vue-demo 元素的位置需要相对于其正常位置进行微调

```vue

<template>
  <div class="css-gui-1iqykd7">
    <div class="css-gui-1on0tj0"></div>
    <div class="css-gui-e75a2z"></div>
    <div class="css-gui-16562a"></div>
   <div>

     <button @click="changePosition($event)">正常位置</button>
     
     <div class="console"></div>
   </div>
  </div>
</template>
<script>
export default {
    methods:{
        changePosition(e){
            const target = e.target;
            const console = document.querySelector('.console');
            const div = document.querySelector('.css-gui-e75a2z');
            const position = window.getComputedStyle(div).position;
            if(position === 'static'){
                div.style.position = 'relative';
                console.innerHTML = 'position: relative';
                target.innerHTML = '正常位置';
            }else{
                div.style.position = 'static';
                console.innerHTML = 'position: static';
                target.innerHTML = '相对位置';
            }
        }
        
    },
  mounted() {
  
  }
}
</script>
<style>
  .css-gui-1iqykd7{background-color:#4c8370;padding-bottom:128px;padding-top:128px;padding:66px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:612px;}
  .css-gui-1on0tj0{width:150px;height:150px;border:1px solid #616161;background-color:#00097e;}
  .css-gui-e75a2z{left:8vw;top:41px;position:relative;background-color:tomato;border:1px solid #edf6a3;height:150px;width:150px;}
  .css-gui-16562a{background-color:#321545;border:1px solid #675bff;height:150px;width:150px;}
</style>
```
:::

### 场景二:相对定位的父元素和绝对定位的子元素

:::info
当你需要在一个元素内部创建**绝对定位的子元素**,并且希望这些子元素相对于父元素进行定位时,可以将父元素设置为相对定位.例如,你希望一个弹出菜单相对于按钮进行定位:
:::

:::vue-demo 相对定位的父元素和绝对定位的子元素

```vue

<template>
  <div style="height: 300px">
    <button @click="randomPosition">按钮随机位置</button>
    <div class="button-container">
      <button class="button" @mouseover="showMenu">Open Menu</button>
      <div class="menu" v-show="isMenuVisible">
        <div class="menu-item">Item 1</div>
        <div class="menu-item">Item 2</div>
        <div class="menu-item">Item 3</div>
      </div>
    </div>
  </div>
  
</template>

<script>
  export default {
    data() {
      return {
        isMenuVisible: false
      };
    },
    methods: {
      randomPosition() {
        const button = document.querySelector('.button-container');
        const randomLeft = Math.floor(Math.random() * 200);
        const randomTop = Math.floor(Math.random() * 200);
        button.style.left = randomLeft + 'px';
        button.style.top = randomTop + 'px';
      },
      showMenu() {
        this.isMenuVisible = true;
      }
    }
  };
</script>

<style>
  .button-container {
    position: relative;
    display: inline-block;
    border: 1px solid #8dba47;
    //left: 20px;
    //width: 400px;
    //height: 200px;
  }

  .button {
    padding: 10px;
    background-color: rgba(118, 118, 248, 0.43);
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .menu {
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0;
    visibility: hidden;
    background-color: #655d5d;
    border: 1px solid #ccc;
    padding: 10px;
    transition: opacity 0.3s, visibility 0.3s;
  }

  .button-container:hover .menu {
    opacity: 1;
    visibility: visible;
  }

  .menu-item {
    margin: 5px 0;
  }
</style>
```
:::

### 场景三:控制元素的层叠顺序

:::info
当你希望控制元素的层叠顺序,使其位于其他元素之上或之下时,可以使用相对定位结合``z-index``属性.例如,你希望一个对话框在页面上覆盖其他内容
:::

:::vue-demo 控制元素的层叠顺序

```vue
 <template>
  <button @click="changeZIndex">改变zindex</button>
  <div class="css-gui-zctjjg">
    <div class="css-gui-15two15"></div>
    <div class="css-gui-1uif7ev"></div>
  </div>
</template>
<style>
  .css-gui-zctjjg{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0px;-webkit-box-pack:space-around;-ms-flex-pack:space-around;-webkit-justify-content:space-around;justify-content:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#809aff;height:350px;width:379px;}
  .css-gui-15two15{left:79px;position:relative;z-index:10;background-color:#0000ff;height:71px;width:154px;}
  .css-gui-1uif7ev{background-color:#eb2e2e;height:118px;width:160px;z-index:1;position:relative;}
</style>
<script>
export default {
    methods:{
        changeZIndex(){
            const div = document.querySelector('.css-gui-15two15');
            const zIndex = window.getComputedStyle(div).zIndex;
            if(zIndex === '10'){
                div.style.zIndex = '1';
            }else{
                div.style.zIndex = '10';
            }
        }
    }
}
</script>
```
:::


### 场景四:元素需要在动画或交互效果中进行位置变化
:::info
当你需要在动画或交互效果中使元素位置发生变化时,相对定位是一个常用工具.例如,你希望一个图片在鼠标悬停时有平移效果
:::


:::vue-demo 元素需要在动画或交互效果中进行位置变化

```vue
 <template>
  <div class="container">
    <div class="box" :style="{ top: yPos + 'px', left: xPos + 'px' }"></div>
    <button @click="startAnimation">Start Animation</button>
  </div>
</template>

<style>
  .container {
    //position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
  }

  .box {
    position: relative;
    width: 50px;
    height: 50px;
    background-color: blue;
    transition: top 0.5s, left 0.5s;
  }

  button {
    margin-top: 20px;
  }
</style>

<script>
  export default {
    data() {
      return {
        xPos: 0,
        yPos: 0
      };
    },
    methods: {
      startAnimation() {
        this.xPos =  Math.floor(Math.random() * 300) + 1 ;
        this.yPos = Math.floor(Math.random() * 300) + 1 ;
      }
    }
  };
</script>
```
:::


## ``absolute``

==使元素脱离正常文档流,并相对于最近的已定位祖先元素进行定位.==

* 如果没有已定位的祖先元素,则相对于初始包含块(通常是浏览器窗口)进行定位.
* 可以通过设置``top``、``right``、``bottom``和``left``属性来指定元素与其定位参考点之间的偏移量.

:::tip

一般和``relative``配合使用,可以用于实现

- ==弹出框和对话框:== 将弹出框的父元素设置为相对定位,然后将弹出框本身设置为绝对定位,可以在页面的任意位置显示弹出框,而不受文档流的限制.

- ==导航菜单:== 将菜单容器设置为相对定位,然后将菜单项设置为绝对定位,可以精确地控制菜单项的位置和布局.

- ==图片轮播:== 将轮播容器设置为相对定位,然后将每个轮播项设置为绝对定位,可以实现图片在容器内部的切换和定位.

- ==悬浮提示框:== 将提示框容器设置为相对定位,然后将提示框本身设置为绝对定位,可以在鼠标悬停在某个元素上时显示提示框,并将其定位在合适的位置.

- ==遮罩层和模态框:== 将遮罩层设置为相对定位,然后将遮罩层本身设置为绝对定位,并设置其宽度和高度为100%来覆盖整个页面,可以实现遮罩效果.
:::

:::vue-demo position:absolute实现图片轮播

```vue
<template>
  <div class="carousel">
    <transition-group name="carousel-slide" tag="div" :key="currentIndex">
      <div
          v-for="(image, index) in images"
          :key="index"
          class="carousel-item"
          :class="{ active: index === currentIndex }"
      >
        <img :src="image" alt="Carousel Image" />
      </div>
    </transition-group>
  </div>
</template>

<style>
  .carousel {
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;
  }

  .carousel-item {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.5s;
  }

  .carousel-item.active {
    opacity: 1;
  }

  .carousel-slide-enter-active,
  .carousel-slide-leave-active {
    transition: transform 0.5s;
  }

  .carousel-slide-enter {
    transform: translateX(100%);
    opacity: 0;
  }

  .carousel-slide-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  .carousel-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

<script>
  export default {
    data() {
      return {
        images: [
          'https://zmesc.oss-cn-hangzhou.aliyuncs.com/DA6DE43D-8655-440B-9210-1914A2930E70.jpg',
          'https://zmesc.oss-cn-hangzhou.aliyuncs.com/0194CDDE-82B7-428E-82BD-4EC30C97C27E.jpg',
          'https://zmesc.oss-cn-hangzhou.aliyuncs.com/FB47E230-25C7-41C1-9C75-020DF345E323.jpg'
        ],
        currentIndex: 0
      };
    },
    mounted() {
      setInterval(this.nextSlide, 3000);
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }
    }
  };
</script>
```

:::


## ``fixed``

==使元素脱离正常文档流,并相对于浏览器窗口进行定位.==

* 元素的位置在滚动页面时保持不变.
* 可以通过设置``top``、``right``、``bottom``和``left``属性来指定元素与浏览器窗口之间的偏移量.

``position:fixed``一般用于创建``导航栏``或者``返回顶部按钮``,它和``position:absolute``的区别在于:

:::warning 和fixed的区别
* ==相对于:== 绝对定位是相对于最近的已定位的祖先元素,如果没有已定位的祖先元素,则相对于初始包含块(通常是文档的根元素).而固定定位是相对于浏览器窗口(视口).
* ==文档流:== 绝对定位的元素脱离了文档流,不占据原本的空间,不对其他元素产生影响.固定定位的元素也脱离了文档流,但是它会在视口中保持固定的位置,不随页面滚动而改变位置.
* ==偏移属性:== 绝对定位使用``top``、``right``、``bottom``和``left``属性来指定距离包含块边缘的偏移量.固定定位也使用相同的偏移属性,但是它们是相对于视口边缘而言.
* ==滚动影响:== 绝对定位的元素会随着其包含块的滚动而滚动,即当包含块有滚动条时,绝对定位的元素会随着滚动条的滚动而移动.而固定定位的元素不会受到包含块的滚动影响,它会始终保持固定的位置.
:::

<CodePen
link="https://codepen.io/cruldra/pen/eYQwgQj"
title="position:fixed实现返回顶部滚动条"
:default-tab="['html','result']"
:theme="$isDarkmode? 'dark': 'light'"
/>

## ``sticky``
==相对定位和固定定位的混合.==

* 元素在滚动到特定位置时会变为固定定位,否则保持相对定位.
* 可以通过设置``top``、``right``、``bottom``和``left``属性来指定元素相对于其定位参考点的偏移量.

``position:sticky``的典型应用场景:

:::tip
* ==固定的导航栏:== 当页面滚动到导航栏的位置时,导航栏变为固定定位,否则保持相对定位.
* ==表格标题:== 当页面中有一个大型表格时,将表格的标题行固定在顶部,以便在滚动表格时仍然可以看到列标题
:::

:::vue-demo position:sticky实现固定的导航栏

```vue
<template>
  <div>
    <header class="navbar">
      <!-- 导航栏内容 -->
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>

    <div class="content">
      <!-- 页面内容 -->
    </div>
  </div>
</template>

<style>
.navbar {
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar li {
  display: inline-block;
  margin-right: 10px;
}

.navbar a {
  text-decoration: none;
  color: #333;
}

.content {
  height: 2000px; /* 示例内容高度 */
  padding-top: 60px; /* 确保内容不被导航栏遮挡 */
}
</style>

<script>
export default {
  name: 'App'
};
</script>
```
:::

## 参考

- [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
