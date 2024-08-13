<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { toRefs } from 'vue'
import XIcons from '@/views/XIcons.vue'
import NativeUIComponent from '@/views/NativeUIComponent.vue'

const { count, doubleCount, increment } = toRefs(useCounterStore())
</script>

<template>
  <div>hello world {{ count }} {{ doubleCount }}</div>
  <button @click="increment">增加count</button>
  <XIcons />
  <NativeUIComponent />
</template>

<style scoped></style>
