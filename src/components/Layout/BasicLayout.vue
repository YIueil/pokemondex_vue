<script setup lang="ts">
import { useSettingStore } from '@/stores/setting'

const { layout } = toRefs(useSettingStore())
</script>

<template>
  <component :is="layout" />
</template>
