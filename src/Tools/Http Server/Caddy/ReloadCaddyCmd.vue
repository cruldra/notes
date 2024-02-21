<script lang="ts" setup>
import {useMessage} from 'naive-ui';
import {reactive} from "vue";

const formValue = reactive({  containerName: ''})
// const message = useMessage();

const handleValidateButtonClick = () => {
  // message.error("sss")
  if (navigator.clipboard) {
      navigator.clipboard.writeText(`docker exec -it ${formValue.containerName} sh -c 'cd /etc/caddy && caddy reload'`).then(() => {
         // message.success('已复制到剪切板');
      }).catch(err => {
          //message.error('无法复制文本: ', err);
      });
  } else {
     // message.warning('浏览器不支持写入剪切板');
  }
}
</script>

<template>
  <NaiveUiRoot>
    <n-form inline  label-placement="left">
      <n-form-item label="容器名"  >
        <n-input v-model:value="formValue.containerName" placeholder="" />
      </n-form-item>
      <n-button round type="primary"  @click="handleValidateButtonClick"> 获取命令
      </n-button>
    </n-form>
  </NaiveUiRoot>
</template>

<style scoped>

</style>
