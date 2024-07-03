---
title: 插槽(slots)
comment: false
editLink: false
prev: false
next: false
---

## 简介

自定义组件时可以通过`props`来接收用户参数,但是有时候我们需要更灵活的方式来自定义组件的模板内容,这时候就需要用到[插槽(slots)](https://cn.vuejs.org/guide/components/slots.html).

## 一个简单的插槽

::: vue-playground
@file App.vue

```vue

<script lang="ts" setup>
  import CustomComponent from './CustomComponent.vue'
</script>
<template>
  <CustomComponent>
    <h1>动态html模板</h1>
  </CustomComponent>
</template>

```

@file CustomComponent.vue

```vue

<script lang="ts" setup>
 
</script>

<template>
 <div class="custom-component"><slot></slot></div>
</template>
```

:::


## 命名插槽

::: vue-playground
@file App.vue

```vue

<script lang="ts" setup>
  import CustomComponent from './CustomComponent.vue'
</script>
<template>
  <CustomComponent>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>
    <template v-slot:default>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
    </template>
    <template v-slot:footer>
      <p>Here's some contact info</p>
    </template>
  </CustomComponent>
</template>

```

@file CustomComponent.vue

```vue

<script lang="ts" setup>
 
</script>

<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
```

:::

## 作用域插槽

:::info
如果要==在插槽中使用组件的数据==,就需要用到[`作用域插槽`](https://cn.vuejs.org/guide/components/slots.html#scoped-slots),作用域插槽的语法是`v-slot:item="slotProps"`,其中`item`是插槽的名称,`slotProps`是传递给插槽的数据.
:::

::: vue-playground
@file App.vue

```vue

<template>
  <div>
    <child-component :list="list">
      <template v-slot:item="{ item }">
        <div class="item" :class="{ active: item.active }">{{ item.name }}</div>
      </template>
    </child-component>
  </div>
</template>

<script setup>
  import ChildComponent from './CustomComponent.vue';
  import {ref} from "vue";

  const list = ref([
    {name: 'item1', active: true},
    {name: 'item2', active: false},
    {name: 'item3', active: true},
  ]);
</script>

```

@file CustomComponent.vue

```vue
<template>
  <div>
    <ul>
      <li v-for="item in list" :key="item.name">
        <slot name="item" :item="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { withDefaults, defineProps } from 'vue';
  interface Props {
    list: Array;
  }
  const props = withDefaults(defineProps<Props>(), {
    list: () => [],
  });
</script>
```
