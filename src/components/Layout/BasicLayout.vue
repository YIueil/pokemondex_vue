<script setup lang="ts">
import { useSettingStore } from '@/stores/application'
import { darkTheme, lightTheme, NThemeEditor  } from 'naive-ui'

const { layout, theme } = toRefs(useSettingStore())

</script>

<template>
  <n-theme-editor>
    <n-config-provider :theme="theme === 'light' ? lightTheme : darkTheme">
      <component :is="layout" />
    </n-config-provider>
  </n-theme-editor>
</template>
