import SiderLayout from '@/components/Layout/SiderLayout.vue'
import NoSiderLayout from '@/components/Layout/NoSiderLayout.vue'

export const useSettingStore = defineStore('setting', () => {
  // 应用布局
  const layout = shallowRef(SiderLayout)

  function changeLayout(layoutComponents: typeof SiderLayout | typeof NoSiderLayout) {
    layout.value = layoutComponents
  }

  // 应用id
  const applicationId = ref('')

  function setApplicationId(value: string) {
    applicationId.value = value
  }

  // 是否移动端
  const isMobile = ref(false)

  function setIsMobile(value: boolean) {
    isMobile.value = value
  }

  // 日间夜间模式
  const theme = ref<'light' | 'dark'>('light')

  function setThemeMode(value: 'light' | 'dark') {
    theme.value = value
  }

  // 主题色
  const primaryColor = ref('')

  function setPrimaryColor(value: string) {
    primaryColor.value = value
  }

  // 国际化语言
  const lang = ref('en-US')

  function setLang(value: string) {
    lang.value = value
  }

  return {
    layout,
    changeLayout,
    applicationId,
    setApplicationId,
    isMobile,
    setIsMobile,
    theme,
    setThemeMode,
    primaryColor,
    setPrimaryColor,
    lang,
    setLang
  }
})
