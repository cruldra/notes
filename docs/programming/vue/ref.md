---
title: ref
comment: false
editLink: false
prev: false
next: false
order: 1
---

## 简介

`ref`允许我们直接访问dom元素或子组件实例

## 单个ref

::: tabs#singleRef

@tab:active vue3

::: vue-playground
@file App.vue

```vue

<template>
  <div ref="divDom"> div元素的内容</div>
  <button @click="getDivDomOuterHtml">getDivDomOuterHtml</button>
</template>

<script setup>
  import {onMounted, ref} from "vue";

  const divDom = ref()
  const getDivDomOuterHtml = () => {
    alert(divDom.value.outerHTML)
  }

</script>

```

@tab vue2

::: vue-playground
@file App.vue

```vue

<template>
  <div ref="divDom"> div元素的内容</div>
  <button @click="getDivDomOuterHtml">getDivDomOuterHtml</button>
</template>

<script>
  export default {
    data() {
      return {
        divDom: null
      }
    },
    mounted() {
      this.divDom = this.$refs.divDom;
    },
    methods: {
      getDivDomOuterHtml() {
        alert(this.divDom.outerHTML);
      }
    }
  }
</script>

```


:::



## 多个ref

::: tabs#multiRef

@tab:active vue3

::: vue-playground
@file App.vue

```vue

<template>
  <div v-for="(item,index) in 5" :key="index" :ref="(el) => getMyDom(el)">{{index}}</div>
  <button @click="getDivDomOuterHtml">getDivDomOuterHtml</button>
  <div>{{output}}</div>
</template>

<script lang="ts" setup>
  import {ref} from "vue";

  let divs = ref<Array<HTMLDivElement>>([])

  //遍历获取元素，然后放在一个数组里
  const getMyDom = (el: HTMLDivElement) => {
    if (el) {
      divs.value.push(el)
    }
  }
  const output= ref('')
  const getDivDomOuterHtml = () => {
    output.value= divs.value.map(item=>item.outerHTML).join('\n')
  }

</script>

```

@tab vue2

::: vue-playground
@file App.vue

```vue

<template>
  <div v-for="(item,index) in 5" :key="index"  ref="divDom">{{index}}</div>
  <button @click="getDivDomOuterHtml">getDivDomOuterHtml</button>
  <div>{{output}}</div>
</template>

<script>
  export default {
    data() {
      return {
        divDom: null,
        output:''
      }
    },
    mounted() {
      this.divDom = this.$refs.divDom;
    },
    methods: {
      getDivDomOuterHtml() {
        this.output= this.divDom.map(item=>item.outerHTML).join('\n')
      }
    }
  }
</script>

```


:::
