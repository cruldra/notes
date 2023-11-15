---
title: 插槽(slots)
comment: false
editLink: false
prev: false
next: false
order: 1
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
