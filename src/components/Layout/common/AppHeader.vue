<template>
  <n-space class="h-full" :wrap="false" justify="space-between" align="center">
    <n-breadcrumb class="breadcrumb">
      <n-breadcrumb-item v-for="breadcrumb in breadcrumbs" :key="breadcrumb.name">
        <router-link
          :to="{
            name: breadcrumb.name,
            params: {}
          }"
        >
          {{ breadcrumb.title }}
        </router-link>
      </n-breadcrumb-item>
    </n-breadcrumb>
    <n-flex class="right-btn">
      <n-icon :size="32" :component="AppSettingsAltRound" @click="activate('right')" />
      <n-avatar round :size="32" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
    </n-flex>
  </n-space>
  <n-drawer v-model:show="showSetting" :width="350" :placement="placement">
    <n-drawer-content title="全局设置">
      <ApplicationSetting />
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { AppSettingsAltRound } from '@vicons/material'
import type { DrawerPlacement } from 'naive-ui'
import { useRoute } from 'vue-router'

export default defineComponent({
  setup() {
    const route = useRoute()
    const showSetting = ref(false)
    const placement = ref<DrawerPlacement>('right')
    const activate = (place: DrawerPlacement) => {
      showSetting.value = true
      placement.value = place
    }
    const breadcrumbs = computed(() => {
      const matchedRoutes = route.matched.filter((r) => r.meta && r.meta.title)
      return matchedRoutes.map((r) => ({
        title: r.meta.title,
        name: r.name
      }))
    })
    return {
      activeKey: ref<string | null>(null),
      activate,
      AppSettingsAltRound,
      showSetting,
      placement,
      breadcrumbs
    }
  }
})
</script>

<style scoped>
.breadcrumb {
  padding-left: 20px;
}

.right-btn {
  padding-right: 20px;
}
</style>
