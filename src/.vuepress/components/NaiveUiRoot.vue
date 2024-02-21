<script setup>
import {darkTheme} from 'naive-ui';
</script>

<template>
  <n-message-provider>
    <n-config-provider :theme="darkTheme">
      <slot></slot>
    </n-config-provider>
  </n-message-provider>
</template>

<style scoped>

</style>
