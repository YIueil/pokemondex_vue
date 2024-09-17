<template>
  <div class="app-icon">
    <AppLogo :show-label="!collapsed" :size="iconSize" :padding-left="paddingLeft" />
  </div>
  <n-menu
    v-model:value="activeKey"
    :collapsed="collapsed"
    :collapsed-width="64"
    :collapsed-icon-size="iconSize"
    :indent="paddingLeft"
    :options="menuOptions"
  />
</template>

<script lang="ts">
import type { Component } from 'vue'
import { defineComponent, h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  MenuOutlined,
  HomeOutlined,
  FolderOpenOutlined,
  ChecklistOutlined,
  EditNoteOutlined,
  DashboardCustomizeOutlined,
  PreviewOutlined,
  SettingsSuggestOutlined,
  SettingsInputComponentOutlined,
  InfoOutlined
} from '@vicons/material'
import { Organization32Regular } from '@vicons/fluent'
import { FormOutlined } from '@vicons/antd'
import { RouterLink } from 'vue-router'
// 图标大小
const iconSize = 30
// 菜单偏移
const paddingLeft = 24

function renderIcon(icon: Component) {
  return () =>
    h(
      NIcon,
      {
        size: 24
      },
      { default: () => h(icon) }
    )
}

function renderRouterLink(name: string, title: string) {
  return () =>
    h(
      RouterLink,
      {
        to: {
          name: name,
          params: {
            lang: 'zh-CN'
          }
        }
      },
      { default: () => title }
    )
}

const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(HomeOutlined),
    children: []
  },
  {
    label: '文件管理',
    key: 'file-manager',
    icon: renderIcon(FolderOpenOutlined),
    children: []
  },
  {
    label: '列表管理',
    key: 'list-manager',
    icon: renderIcon(ChecklistOutlined),
    children: []
  },
  {
    label: '组织管理',
    key: 'unit-manager',
    icon: renderIcon(Organization32Regular),
    children: []
  },
  {
    label: '表单页',
    key: 'form-page',
    icon: renderIcon(FormOutlined),
    children: [
      {
        label: '普通表单',
        key: 'form',
        icon: renderIcon(MenuOutlined)
      },
      {
        label: '分步表单',
        key: 'step-form',
        icon: renderIcon(MenuOutlined)
      }
    ]
  },
  {
    label: '文本编辑器',
    key: 'editor',
    icon: renderIcon(EditNoteOutlined),
    children: [
      {
        label: '富文本编辑器',
        key: 'rich-text-editor',
        icon: renderIcon(MenuOutlined)
      },
      {
        label: 'MarkDown',
        key: 'markdown-editor',
        icon: renderIcon(MenuOutlined)
      }
    ]
  },
  {
    label: '自定义指令',
    key: 'custom-directives',
    icon: renderIcon(DashboardCustomizeOutlined),
    children: [
      {
        label: '节流',
        key: 'debounce',
        icon: renderIcon(MenuOutlined)
      },
      {
        label: '防抖',
        key: 'throttle',
        icon: renderIcon(MenuOutlined)
      }
    ]
  },
  {
    label: '图片预览',
    key: 'file-preview',
    icon: renderIcon(PreviewOutlined),
    children: []
  },
  {
    label: '定制组件',
    key: 'custom-component',
    icon: renderIcon(SettingsInputComponentOutlined),
    children: [
      {
        label: renderRouterLink('Component1', '定制组件1'),
        key: 'custom-component1',
        icon: renderIcon(MenuOutlined),
      },
      {
        label: renderRouterLink('Component2', '定制组件2'),
        key: 'custom-component2',
        icon: renderIcon(MenuOutlined),
      }
    ]
  },
  {
    label: '个人设置',
    key: 'user-setting',
    icon: renderIcon(SettingsSuggestOutlined),
    children: []
  },
  {
    label: '关于',
    key: 'about',
    icon: renderIcon(InfoOutlined),
    children: [
      {
        label: '应用信息',
        key: 'about-application',
        icon: renderIcon(MenuOutlined)
      },
      {
        label: 'Github',
        key: 'about-github',
        icon: renderIcon(MenuOutlined)
      },
      {
        label: 'Blog',
        key: 'about-blog',
        icon: renderIcon(MenuOutlined)
      }
    ]
  }
]

export default defineComponent({
  props: {
    collapsed: {
      type: Boolean,
      default: () => true
    }
  },
  setup() {
    return {
      activeKey: ref<string | null>(null),
      menuOptions,
      iconSize,
      paddingLeft
    }
  }
})
</script>

<style lang="less" scoped></style>
