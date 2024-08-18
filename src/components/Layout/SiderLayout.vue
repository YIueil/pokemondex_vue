<script lang="ts">
export default defineComponent({
  setup() {
    return {
      collapsed: ref(false)
    }
  }
})
</script>

<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <AppSider :collapsed="collapsed" />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <AppHeader />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">
        <RouteView />
      </n-layout-content>
      <n-layout-footer>
        <AppFooter />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(221, 201, 201, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
