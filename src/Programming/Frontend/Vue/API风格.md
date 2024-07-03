---
title: API风格
comment: false
editLink: false
prev: false
next: false
---

## 简介

``API风格``是指编写``Vue``组件时的代码格式,分为``选项式(Options API)``和``组合式(Composition API)``
两种风格

## 选项式(Options API)

:::info
**``选项式(Options API)``是构建Vue组件的传统方式,并且自``Vue``诞生以来一直是构建组件的主要方法.它涉及使用一组选项(
例如数据、方法和计算属性)来定义组件的行为和状态.**
:::

```vue

<script>
  export default {
    data() {
      return {
        name: '',
        age: 0,
        aboveAge: false
      }
    },
    computed: {
      displayProfile() {
        return `My name is ${this.name} and i am ${this.age}`;
      }
    },
    methods: {
      verifyUser() {
        if (this.age < 18) {
          this.aboveAge = false
        } else {
          this.aboveAge = true
        }
      },
    },
    mounted() {
      console.log('Application mounted');
    },
  }
</script>
```

## 组合式(Composition API)

:::info
**``组合式(Composition API)``是``Vue 3.0``中构建组件的一种新方法,引入它是为了解决``选项式(Options API)``
的一些限制.它允许开发人员使用函数式、反应式编程风格来构建组件,并且提供了一种更灵活、更具表现力的定义组件行为的方式.**
:::

```vue

<script setup>
  import {ref, reactive, onMounted} from 'vue'

  const profile = reactive({name: '', age: ''})
  const aboveAge = ref(false)

  const verifyUser = () => age.value < 18 ? aboveAge = false : aboveAge = true

  const displayProfile = computed(() => {
    return `My name is ${this.name} and i am ${this.age}`;
  })

  onMounted(() => console.log('Application mounted'))
</script>
```

## 优劣对比

``选项式(Options API)``的主要优点之一是它简单且易于理解,但是在复杂的项目中可能会导致一种称为``选项爆炸``
的现象,即组件变得如此庞大和笨重,以至于难以维护.

![](./assets/img.png)

``选项式(Options API)``的另一个限制是,在组件之间共享逻辑时,它可能不够灵活.如果您想跨多个组件重用一段逻辑,则需要复制并粘贴代码或将其抽象到[``混入(mixin)``](./混入.md)中.随着项目规模的增长,这可能会导致管理代码依赖性和维护代码质量变得困难.
```js
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// define a component that uses this mixin
var Component = Vue.extend({
  mixins: [myMixin]
})

var component = new Component() // => "hello from mixin!"

```



``组合式(Composition API)``通过提供一种通过可组合项定义组件行为的更灵活且更具表现力的方式来解决这些问题。它允许开发人员使用函数式、反应式编程风格来构建组件，从而更轻松地重用逻辑和管理代码依赖项。

```js
// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  // state encapsulated and managed by the composable
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // expose managed state as return value
  return { x, y }
}

```

```vue

//usage in component
<script setup>
import { useMouse } from './mouse.js'

const { x, y } = useMouse()
</script>
```

## 参考

- [API 风格](https://cn.vuejs.org/guide/introduction.html#api-styles)
- [Options API vs Composition API](https://vueschool.io/articles/vuejs-tutorials/options-api-vs-composition-api/)
- [\<script setup>](https://vuejs.org/api/sfc-script-setup.html)
- [Composition API FAQ](https://vuejs.org/guide/extras/composition-api-faq.html#more-flexible-code-organization)
