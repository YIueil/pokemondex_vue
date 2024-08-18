<script setup lang="ts">
import { useSettingStore } from '@/stores/application'
import { DarkModeRound, LightModeRound, HdrAutoRound } from '@vicons/material'

const options = reactive([
  {
    label: '淡入淡出',
    value: '淡入淡出'
  },
  {
    label: '底部划入',
    value: '底部划入'
  }
])
const selectAnimate = reactive({})
const { setThemeMode } = useSettingStore()
</script>

<template>
  <span>
    <n-divider title-placement="center">主题模式</n-divider>
    <n-flex justify="center">
      <n-button-group size="medium">
        <n-button type="default">
          <template #icon>
            <n-icon>
              <LightModeRound />
            </n-icon>
          </template>
        </n-button>
        <n-button type="default">
          <template #icon>
            <n-icon>
              <DarkModeRound />
            </n-icon>
          </template>
        </n-button>
        <n-button type="default">
          <template #icon>
            <n-icon>
              <HdrAutoRound />
            </n-icon>
          </template>
        </n-button>
      </n-button-group>
    </n-flex>
    <n-divider title-placement="center">布局模式</n-divider>
    <n-flex vertical>
      <n-grid x-gap="5" y-gap="10" :cols="2">
        <n-gi class="pd2" style="margin: 0 auto">
          <LayoutButton :has-sider="true" :has-footer="true"></LayoutButton>
        </n-gi>
        <n-gi class="pd2" style="margin: 0 auto">
          <LayoutButton :has-sider="true" :has-footer="false"></LayoutButton>
        </n-gi>
        <n-gi class="pd2" style="margin: 0 auto">
          <LayoutButton :has-sider="false" :has-footer="true"></LayoutButton>
        </n-gi>
        <n-gi class="pd2" style="margin: 0 auto">
          <LayoutButton :has-sider="false" :has-footer="false"></LayoutButton>
        </n-gi>
      </n-grid>
    </n-flex>
    <n-divider title-placement="center">主题颜色</n-divider>
    <n-color-picker :modes="['hex']"> <template #label>信息颜色</template> </n-color-picker>
    <n-color-picker :modes="['hex']"> <template #label>警告颜色</template> </n-color-picker>
    <n-color-picker :modes="['hex']"> <template #label>错误颜色</template> </n-color-picker>
    <n-divider title-placement="center">页面功能</n-divider>
    <n-flex vertical align="center">
      <n-flex class="w-full" justify="space-between"> <span>切换动画</span><n-switch /> </n-flex>
      <n-flex class="w-full" justify="space-between">
        <span>动画效果</span>
        <n-select style="width: 100px" v-model="selectAnimate" :options="options" size="small" />
      </n-flex>
      <n-flex class="w-full" justify="space-between"> <span>面包屑</span><n-switch /> </n-flex>
      <n-flex class="w-full" justify="space-between"> <span>标签栏</span><n-switch /> </n-flex>
      <n-flex class="w-full" justify="space-between">
        <span>标签栏风格</span>
        <n-select style="width: 100px" v-model="selectAnimate" :options="options" size="small" />
      </n-flex>
      <n-flex class="w-full" justify="space-between">
        <span>标签栏高度</span><n-input-number style="width: 100px" size="small" />
      </n-flex>
      <n-flex class="w-full" justify="space-between">
        <span>标签栏最大宽度</span><n-input-number style="width: 100px" size="small" />
      </n-flex>
    </n-flex>
    <n-divider title-placement="center">边栏设置</n-divider>
    <n-flex vertical align="center">
      <n-flex class="w-full" justify="space-between"> <span>侧边栏</span><n-switch /> </n-flex>
      <n-flex class="w-full" justify="space-between">
        <span>侧边栏宽度</span><n-input-number style="width: 100px" size="small" />
      </n-flex>

      <n-flex class="w-full" justify="space-between"> 顶部导航栏<n-switch /> </n-flex>
      <n-flex class="w-full" justify="space-between">
        <span>顶部宽度</span><n-input-number style="width: 100px" size="small" />
      </n-flex>
      <n-flex class="w-full" justify="space-between"> <span>底部导航栏</span><n-switch /> </n-flex>
      <n-flex class="w-full" justify="space-between">
        <span>底部宽度</span><n-input-number style="width: 100px" size="small" />
      </n-flex>
    </n-flex>
  </span>
</template>

<style scoped>
.light-green {
  height: 88px;
  background-color: rgba(0, 128, 0, 0.12);
}

.green {
  height: 88px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>
