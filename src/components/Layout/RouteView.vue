<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps({
  keepAlive: {
    type: Boolean,
    default: false
  }
})
const route = useRoute()

// 创建一个计算属性来响应式地返回route.meta.keepAlive的值
const keepAlive = computed(() => route.meta.keepAlive || props.keepAlive)

// 创建一个计算属性来响应式地组装组件切换动画
const transition = computed(() => 'animate__animated animate__' + route.meta.transition)

// 使用watch来侦听路由的变化
watch(
  () => route.path, // 侦听route.path的变化
  (newPath) => {
    // 当路由变化时，这里可以进行一些操作，比如打印日志等
    console.log('Route changed:', newPath, keepAlive.value, route.meta)
  }
)
</script>

<template>
  <router-view v-show="keepAlive" v-slot="{ Component }">
    <transition :enter-active-class="transition">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </transition>
  </router-view>
  <router-view v-show="!keepAlive" v-slot="{ Component }">
    <transition :enter-active-class="transition">
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>

<style></style>
