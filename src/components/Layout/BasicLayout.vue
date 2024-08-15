<script setup lang="ts">
import { useSettingStore } from '@/stores/setting'
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
    <n-drawer-content title="斯通纳">
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>
