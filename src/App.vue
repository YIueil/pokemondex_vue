<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { toRefs } from 'vue'

const { count, doubleCount, increment } = toRefs(useCounterStore())
</script>

<template>
  <div>hello world {{ count }} {{ doubleCount }}</div>
  <button @click="increment">增加count</button>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <BasicLayout />
</template>

<style scoped></style>
