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
  <n-layout class="layout" has-sider>
    <n-layout-sider
      class="sider"
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="240"
      :collapsed="collapsed"
      show-trigger
      :native-scrollbar="false"
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <AppSider :collapsed="collapsed" />
    </n-layout-sider>
    <n-layout class="layout-content">
      <n-layout-header class="header">
        <AppHeader />
      </n-layout-header>
      <n-layout-content
        class="content"
        :native-scrollbar="false"
        content-style="position: relative; padding: 24px; overflow: auto;"
      >
        <RouteView />
      </n-layout-content>
      <n-layout-footer class="footer">
        <AppFooter />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style lang="less" scoped>
.layout {
  .layout-content {
    height: 100vh;
    .header {
      height: 50px;
      padding: 0;
    }

    .content {
      height: calc(100vh - 100px);
    }

    .footer {
      height: 50px;
      padding: 0;
    }
  }
}

.n-layout-header,
.n-layout-footer {
  //background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  //background: rgba(221, 201, 201, 0.3);
}

.n-layout-content {
  //background: rgba(128, 128, 128, 0.4);
}
</style>
