---
title: box-sizing
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

[``box-sizing``](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)是``CSS``中的一个重要属性,用于设置如何计算元素的==总宽度和高度==.

在``CSS``中,一个元素的宽度和高度是由以下几个部分组成的:``内容(content)``、``内边距(padding)``、``边框(border)``
和``外边距(margin)``.

这个属性包含两个值:

## content-box

==默认值==:元素的``width``和``height``只包括``内容(content)``部分,而不包括``内边距(padding)``、``外边距(margin)``
和``边框(border)``.

## border-box

有时候这种计算方式并不方便.

例如,你给一个元素设置了固定的宽度和高度,然后又添加了内边距或边框,那么这个元素的总宽度和高度就会超出你设置的值.这在布局时可能会导致问题.

``box-sizing: border-box;`` 就是为了解决这个问题.

当一个元素的``box-sizing``设置为``border-box``时,这个元素的``width``和``height``
就会包括``内容(content)``、``内边距(padding)``和``边框(border)``.

**也就是说,即使你给元素添加了``内边距(padding)``或``边框(border)``,它的总宽度和高度仍然是你设置的值**

这个例子展示了``box-sizing: border-box;``的效果:

:::vue-demo

```vue
 <template>
  <div>
    <label>
      <input type="checkbox" v-model="useBorderBox"> 使用 box-sizing: border-box;
    </label>
    <br>
    <label>
      设定宽度: <input type="number" v-model.number="setWidth">px
    </label>
    <div :class="{ box: true, 'border-box': useBorderBox }"
         :style="{ width: setWidth + 'px' }"
         ref="box">你好，世界!</div>
    <div>实际宽度: {{ actualWidth }}px</div>
    <div>计算公式: {{ widthFormula }}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        useBorderBox: false,
        actualWidth: 0,
        setWidth: 200
      }
    },
    computed: {
      widthFormula() {
        return this.useBorderBox
            ? `总宽度 = 设定宽度`
            : `总宽度 = 设定宽度 + 内边距 * 2 + 边框 * 2`;
      }
    },
    mounted() {
      this.updateWidth();
    },
    methods: {
      updateWidth() {
        this.actualWidth = this.$refs.box.offsetWidth;
      }
    },
    watch: {
      useBorderBox() {
        this.$nextTick(this.updateWidth);
      },
      setWidth() {
        this.$nextTick(this.updateWidth);
      }
    }
  }
</script>

<style scoped>
  .box {
    padding: 30px;
    border: 10px solid black;
    margin: 20px;
    background-color: lightblue;
  }
  .border-box {
    box-sizing: border-box;
  }
</style>
```

:::
