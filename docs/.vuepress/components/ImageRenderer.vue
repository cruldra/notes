<script setup lang="ts">
// import {component as viewer} from 'v-viewer'
// import {IImageRenderer} from "@dongjak-public-types/table";
// import {api as viewerApi} from "v-viewer"
import * as Viewer from 'v-viewer'
import {computed, onMounted} from "vue";

const viewer = Viewer.component
const viewerApi = Viewer.api

onMounted(() => {
  // alert(viewer)
  // alert(viewerApi)
})

interface Props {
  // renderer?: IImageRenderer<any>,
  width: number,
  height: number,
  value: any,
  srcField: string,
  altField: string,
  throttleMode: boolean
}

const props = withDefaults(defineProps<Props>(), {
  // renderer: () => ({
  //   srcField: 'src',
  //   altField: 'alt',
  //   width: 100,
  //   height: 100,
  //   throttleMode: false
  // }),

  width: 100,
  height: 100,
  srcField: 'src',
  altField: 'alt',
  throttleMode: false,
})
const images = computed(() => {
  return (props.value as { [key: string]: string }[])?.map(
      (item) => {
        return {
          src: item[props.srcField!],
          alt: item[props.altField!],
        };
      }
  ) ?? []
})
const isValidate = computed(() => {
  return images.value.length > 0
})
const width = computed(() => {
  return props.width ?? 50
})
const height = computed(() => {
  return props.height ?? 50
})

let api: Viewer;
const showImages = (index: number) => {
  return
  if (!api)
    api = viewerApi({
      images: images.value,
      options: {
        toolbar: {
          flipHorizontal: 1,
          flipVertical: 1,
          next: 1,
          oneToOne: 1,
          play: 1,
          prev: 1,
          reset: 1,
          rotateLeft: 1,
          rotateRight: 1,
          zoomIn: 1,
          zoomOut: 1,
          // test: {
          //   show: true,
          //   click() {
          //     alert(11)
          //   }
          // }
        }
      }
    })
  api.view(index)
}

</script>

<template>
  <img
      @click="showImages(0)"
      v-if="isValidate&& props.throttleMode"
      :width="width"
      :height="height"
      :src="images[0].src"
      :alt="images[0].alt"
  />


  <div class="flex" v-else>
    <!--    <viewer class="flex col-gap-1px" :images="images" >-->

    <!--    </viewer>-->
    <img
        class="m-r-10px"
        @click="showImages(index)"
        :width="width"
        :height="height"
        v-for="(image,index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
    />
  </div>
</template>

<style>
@import "//unpkg.com/viewerjs/dist/viewer.css";

.viewer-test::before {
  display: flex;
  content: "C";
  font-size: 12px;
  font-weight: bold;
  color: white;
  height: 20px;
  line-height: 0;
  width: 20px;
  align-content: space-around;
  justify-content: center;
  align-items: center;
}
</style>
