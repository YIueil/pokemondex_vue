<template>
  <div ref="vditorContainer"></div>
</template>

<script>
import { onMounted, onUnmounted, watch } from 'vue'
import Vditor from 'vditor'

export default {
  name: 'VEditor',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const vditorContainer = ref(null)
    let vditorInstance = null
    const initVditor = () => {
      vditorInstance = new Vditor(vditorContainer.value, {
        height: 360,
        toolbarConfig: {
          pin: false
        },
        cache: {
          enable: false
        },
        after: () => {
          // 初始化内容
          vditorInstance.setValue('')
        }
      })
    }
    watch(() => props.modelValue, (newValue) => {
      if (vditorInstance && newValue !== vditorInstance.getValue()) {
        vditorInstance.setValue(newValue)
      }
    })
    // 生命周期钩子
    onMounted(() => {
      initVditor()
    })
    onUnmounted(() => {
      if (vditorInstance) {
        vditorInstance.destroy()
      }
    })
    return {
      vditorContainer
    }
  }
};
</script>

<style>
@import 'vditor/dist/index.css';
</style>