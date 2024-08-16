<script setup lang="ts">
import { useSettingStore } from '@/stores/application'
import type { DrawerPlacement } from 'naive-ui'

const { layout } = toRefs(useSettingStore())

const showSetting = ref(false)
const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  showSetting.value = true
  placement.value = place
}
</script>

<template>
  <n-button @click="activate('right')">
    右
  </n-button>
  <component :is="layout" />
  <n-drawer v-model:show="showSetting" :width="502" :placement="placement">
    <n-drawer-content title="全局设置">
      <ApplicationSetting />
    </n-drawer-content>
  </n-drawer>
</template>
