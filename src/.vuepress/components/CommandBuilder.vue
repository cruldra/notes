<script setup lang="ts">
import {onMounted, reactive, ref, h} from "vue";
import {NTag, SelectRenderTag} from "naive-ui";

type Editor = {
  label: string
  type: "text" | "number"
  defaultValue?: string
  field: string
  placeholder: string

}
type FromValue = Record<string, any>
type Template = {
  name: string
  description: string
  value: FromValue

}
type Props = {
  editors: Editor[]
  cmdTemplate: string,
  templates?: Template[]
}
const formValue = reactive<FromValue>({})
const initDefaults = () => {
  props.editors.forEach((item) => {
    formValue[item.field] = item.defaultValue
  })
}
onMounted(() => {
  initDefaults()
})
const selectedTemplate = ref(undefined)

function replaceTemplate(template: string, values: { [key: string]: string | number }): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    // If the key exists in the 'values' object, replace it with its corresponding value
    if (values.hasOwnProperty(key)) {
      return String(values[key]);
    }
    // If the key doesn't exist, leave the placeholder as is
    return match;
  });
}

const props = defineProps<Props>()

const getCmd = () => {
  // message.error("sss")
  if (navigator.clipboard) {
    navigator.clipboard.writeText(replaceTemplate(props.cmdTemplate, formValue)).then(() => {
      // message.success('已复制到剪切板');
    }).catch(err => {
      //message.error('无法复制文本: ', err);
    });
  } else {
    // message.warning('浏览器不支持写入剪切板');
  }
}

const onTemplateChange = (templateName:string) => {

  props.templates.forEach((item) => {
    if (item.name === templateName) {
      Object.assign(formValue, item.value)
    }
  })
}
</script>

<template>
  <NaiveUiRoot>
    <n-card title="命令构造器">
      <div
          style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <n-form label-width="150" style="width: 100%" label-placement="left">
          <n-form-item v-if="props.templates?.length>0" label="模板">
            <n-select
                @update:value="onTemplateChange"
                v-model:value="selectedTemplate"
                clearable
                placeholder="选择一个模板看看"
                :options="props.templates?.map(it=> ({
  label: `${it.name}-${it.description}`,
          value: it.name
                }))"
            />
          </n-form-item>

          <n-form-item v-for="(item,index) in props.editors" :key="index" :label="item.label">
            <n-input v-if="item.type==='text'" v-model:value="formValue[item.field]" clearable
                     :placeholder="item.placeholder??''"/>
            <n-input-number style="width: 100%" v-if="item.type==='number'" :placeholder="item.placeholder??''"
                            v-model:value="formValue[item.field]" clearable/>
          </n-form-item>
        </n-form>
        <n-button round type="primary" @click="getCmd"> 获取命令
        </n-button>
      </div>
    </n-card>

  </NaiveUiRoot>
</template>

<style scoped>

</style>
