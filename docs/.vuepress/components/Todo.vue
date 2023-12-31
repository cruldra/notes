<script setup lang="ts">

interface Task {
  title: string
  completed: boolean
  imgs: string[]
  desc: string
}

interface Props {
  tasks: Task[]
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
<table>
  <tr>
    <td>进度</td>
    <td>任务</td>
    <td>描述</td>
    <td>材料</td>
  </tr>
  <tr v-for="task in tasks" :key="task.title">
    <td>
      <n-checkbox :checked="task.completed"/>
    </td>
    <td>{{ task.title }}</td>
  </tr>
</table>

</template>

<style scoped>

</style>
