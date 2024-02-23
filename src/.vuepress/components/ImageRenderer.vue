<script lang="ts" setup>
interface Props {
  width: number
  height: number
  imgs: string[]
}

const props = withDefaults(defineProps<Props>(), {
  width: 200,
  height: 200
})
</script>

<template>
<div style="display: flex;flex-direction: row;column-gap: 5px">
  <img
    v-for="img in props.imgs"
    :src="img"
    :width="props.width"
    :height="props.height"
   alt=""/>
</div>
</template>

<style scoped>

</style>
