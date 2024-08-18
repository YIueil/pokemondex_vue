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

  // 主题配色
  const infoColor = ref('')

  function setInfoColor(value: string) {
    infoColor.value = value
  }

  const warnColor = ref('')

  function setWarnColor(value: string) {
    warnColor.value = value
  }

  const errorColor = ref('')

  function setErrorColor(value: string) {
    errorColor.value = value
  }

  // 国际化语言
  const lang = ref('en-US')

  function setLang(value: string) {
    lang.value = value
  }

  // 页面功能
  // 切换动画 开关
  const animateSwitch = ref(false)

  function setAnimateSwitch(value: boolean) {
    animateSwitch.value = value
  }
  
  // 切换动画 淡入淡入, 底部划入
  const animateType = ref<'fade' | 'sideInDown'>('fade')

  function setAnimateType(value: 'fade' | 'sideInDown') {
    animateType.value = value
  }

  // 面包屑 开关
  const breadcrumbSwitch = ref(false)

  function setBreadcrumbSwitch(value: boolean) {
    breadcrumbSwitch.value = value
  }

  // 标签栏 开关
  const tabSwitch = ref(false)

  function setTabSwitch(value: boolean) {
    tabSwitch.value = value
  }
  
  // 标签栏 高度
  const tabHeight = ref(64)

  function setTabHeight(value: number) {
    tabHeight.value = value
  }

  // 标签栏 最大宽度
  const tabMaxWidth = ref(-1)

  function setTabMaxWidth(value: number) {
    tabMaxWidth.value = value
  }
  
  // 边栏设置
  const hasSider = ref(true)

  function setHasSider(value: boolean) {
    hasSider.value = value
  }
  
  const siderWidth = ref(200)

  function setSiderWidth(value: number) {
    siderWidth.value = value
  }
  
  const hasHeader = ref(true)

  function setHasHeader(value: boolean) {
    hasHeader.value = value
  }
  
  const headerWidth = ref(150)

  function setHeaderWidth(value: number) {
    headerWidth.value = value
  }
  
  const hasFooter = ref(true)

  function setHasFooter(value: boolean) {
    hasFooter.value = value
  }

  const footerWidth = ref(150)

  function setFooterWidth(value: number) {
    footerWidth.value = value
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
    infoColor,
    setInfoColor,
    warnColor,
    setWarnColor,
    errorColor,
    setErrorColor,
    animateSwitch,
    setAnimateSwitch,
    animateType,
    setAnimateType,
    breadcrumbSwitch,
    setBreadcrumbSwitch,
    tabSwitch,
    setTabSwitch,
    tabHeight,
    setTabHeight,
    tabMaxWidth,
    setTabMaxWidth,
    hasSider,
    setHasSider,
    siderWidth,
    setSiderWidth,
    hasHeader,
    setHasHeader,
    headerWidth,
    setHeaderWidth,
    hasFooter,
    setHasFooter,
    footerWidth,
    setFooterWidth,
    lang,
    setLang
  }
})
