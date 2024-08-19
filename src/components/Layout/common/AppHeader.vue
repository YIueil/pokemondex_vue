<script lang="ts">
import type { Component } from 'vue'
import { defineComponent, h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import type { DrawerPlacement } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  AcUnitRound as BookIcon,
  AcUnitRound as PersonIcon,
  AcUnitRound as WineIcon
} from '@vicons/material'

const showSetting = ref(false)
const placement = ref<DrawerPlacement>('right')
const activate = (place: DrawerPlacement) => {
  showSetting.value = true
  placement.value = place
}

import { AppSettingsAltRound } from '@vicons/material'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer'
        },
        '且听风吟'
      ),
    key: 'hear-the-wind-sing',
    icon: renderIcon(BookIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat'
      }
    ]
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
    disabled: true
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',
    icon: renderIcon(BookIcon),
    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',
            icon: renderIcon(PersonIcon)
          },
          {
            label: '羊男',
            key: 'sheep-man',
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: '饮品',
        key: 'beverage',
        icon: renderIcon(WineIcon),
        children: [
          {
            label: '威士忌',
            key: 'whisky'
          }
        ]
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich'
          }
        ]
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]

export default defineComponent({
  setup() {
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
      activate,
      AppSettingsAltRound,
      showSetting,
      placement
    }
  }
})
</script>

<template>
  <n-space class="h-full" :wrap="false" justify="space-between" align="center">
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" responsive />
    <n-flex>
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

<style scoped></style>