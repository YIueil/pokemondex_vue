<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps({
  keepAlive: {
    type: Boolean,
    default: false
  }
})
const route = useRoute()
console.log(props.keepAlive, route.meta.keepAlive, route.meta)
</script>

<template>
  <router-view v-slot="{ Component }">
    <transition
      enter-active-class="animate__animated animate__slideInUp"
    >
      <keep-alive v-if="keepAlive || route.meta.keepAlive">
        <component :is="Component" :key="route.path" />
      </keep-alive>
      <component v-else :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
