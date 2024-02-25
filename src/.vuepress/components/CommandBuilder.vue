<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {
  Button,
  Card,
  ConfigProvider,
  Form,
  FormItem,
  Input,
  InputNumber,
  message,
  Select,
  SelectOption,
  theme
} from 'ant-design-vue'
// import 'ant-design-vue/dist/reset.css';

const [messageApi, contextHolder] = message.useMessage();
type SelectOptionModel = { label: string, value: string }
type Editor = {
  label: string
  type: "text" | "number" | "select"
  defaultValue?: string
  field: string
  placeholder: string
  options?: (string | number | SelectOptionModel)[]
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
  title?: string
}
const formValue = reactive<FromValue>({})
const initDefaults = () => {
  props.editors.forEach((item) => {
    formValue[item.field] = item.defaultValue
  })
}

const generateOptions = () => {
  props.editors.filter(it => it.type === 'select').forEach((item) => {
    item.options = item.options.map(it => {

      switch (typeof it) {
        case "number":
        case "string":
          return {label: it, value: it} as SelectOptionModel
        default:
          return it as SelectOptionModel
      }
    })
  })
}
onMounted(() => {
  initDefaults()
  generateOptions()
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
      messageApi.info('已复制到剪切板');
    }).catch(err => {
      //message.error('无法复制文本: ', err);
    });
  } else {
    // message.warning('浏览器不支持写入剪切板');
  }
}
const labelCol = {style: {width: '150px'}};
const onTemplateChange = (templateName: string) => {

  props.templates.forEach((item) => {
    if (item.name === templateName) {
      Object.assign(formValue, item.value)
    }
  })
}
</script>

<template>
  <ConfigProvider
      :theme="{
      algorithm: theme.darkAlgorithm,
    }"
  >
    <context-holder/>
    <Card :title="props.title??'命令构造器'">
      <div
          style="width: 100%;height: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <Form :label-col="labelCol" :model="formValue" style="width: 100%">
          <FormItem v-if="props.templates?.length>0" label="模板">
            <Select
                ref="select"
                v-model:value="selectedTemplate"
                @change="onTemplateChange"
            >
              <select-option v-for="(it,ix) in props.templates" :key="ix" :value="it.name">
                {{ `${it.name}-${it.description}` }}
              </select-option>
            </Select>
          </FormItem>

          <FormItem v-for="(editor,index) in props.editors" :key="index" :label="editor.label as any">
            <Input v-if="editor.type==='text'" v-model:value="formValue[editor.field]"
                   :placeholder="editor.placeholder??''"/>
            <InputNumber style="width: 100%" v-if="editor.type==='number'" :placeholder="editor.placeholder??''"
                         v-model:value="formValue[editor.field]"/>
            <Select
                v-if="editor.type==='select'"
                v-model:value="formValue[editor.field]"
            >
              <select-option v-for="(option,ix) in editor.options" :key="ix"
                             :value="(option as SelectOptionModel).value">
                {{ (option as SelectOptionModel).label }}
              </select-option>
            </Select>
          </FormItem>
        </Form>
        <Button type="primary" @click="getCmd"> 获取命令
        </Button>
      </div>
    </Card>

  </ConfigProvider>


</template>

<style scoped>

</style>
