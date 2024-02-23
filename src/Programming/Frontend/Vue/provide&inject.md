---
title: provide&inject
comment: false
editLink: false
prev: false
next: false
---

## 简介

## 案例

假设我们自己实现一个表单组件如下:

``form.vue``

```vue
<template>
  <slot></slot>
</template>
```

``form-item.vue``

```vue
<template>
  <slot></slot>
</template>
```

``input.vue``

```vue

<template>
  <view>......</view>
</template>
<script lang="ts" setup>
  const legal = ref(true);
  const onBlur = () => {
    console.log(`${props.label}输入框失去焦点`)
    if (props.required) {
      legal.value = internalValue.value !== undefined && internalValue.value !== null && internalValue.value !== '';
      console.log(`${props.label}输入框合法性校验结果:${legal.value}`)
    }
  }
  defineExpose({legal, validate})
</script>
```

``index.vue``

```vue

<template>
  <form>
    <form-item label="用户名" required>
      <input v-model="username"/>
    </form-item>
    <form-item label="密码" required>
      <input v-model="password"/>
    </form-item>
    <button @click="submit">提交</button>
  </form>
</template>
```


现在我想要``form.vue``提供一个函数``validate``用于对该表单下所有的``input``进行校验

``form.vue``

```vue
<template>
  <slot></slot>
</template>
<script setup lang="ts">

function validate() {
}
defineExpose({validate})
</script>
```

然后在``index.vue``中调用``form.vue``提供的``validate``函数

``index.vue``

```vue

<template>
  <form>
    <form-item ref="formRef" label="用户名" required>
      <input v-model="username"/>
    </form-item>
    <form-item label="密码" required>
      <input v-model="password"/>
    </form-item>
    <button @click="submit">提交</button>
  </form>
</template>
<script setup lang="ts">
  const formRef = ref(null)
  const submit = () => {
    formRef?.value?.validate()
  }
</script>
```

==关键点在于要能够在form.vue中获取到所有的input组件==

解决办法是用[依赖注入](https://cn.vuejs.org/guide/components/provide-inject.html#provide-inject)来实现


首先,在``form.vue``中,使用``provide``函数提供一个用于注册和注销``input``组件实例的方法:

``form.vue``

```vue
<script setup lang="ts">
import { ref, provide } from 'vue'

const inputInstances = ref([])

const registerInput = (instance) => {
  inputInstances.value.push(instance)
}

const unregisterInput = (instance) => {
  inputInstances.value = inputInstances.value.filter(i => i !== instance)
}

provide('registerInput', registerInput)
provide('unregisterInput', unregisterInput)

const validate = () => {
  inputInstances.value.forEach(instance => {
    instance.validate()
  })
}
</script>

<template>
  <slot></slot>
</template>
```

然后在``input.vue``中,使用``inject``函数获取``registerInput``和``unregisterInput``方法,并在组件挂载和卸载时分别调用它们:

``input.vue``

```vue
<script lang="ts" setup>
  // ...其他代码

  const registerInput = inject('registerInput')
  const unregisterInput = inject('unregisterInput')

  onMounted(() => {
    registerInput && registerInput({ validate })
  })

  onUnmounted(() => {
    unregisterInput && unregisterInput({ validate })
  })
</script>
 
```

**下面是完整的例子**

<iframe src="https://stackblitz.com/edit/node-nhldjy?embed=1&file=src%2FApp.vue&hideNavigation=1&theme=dark"
style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
></iframe>
