import SiderLayout from '@/components/Layout/SiderLayout.vue'
import NoSiderLayout from '@/components/Layout/NoSiderLayout.vue'

export const useSettingStore = defineStore('setting', () => {
  const layout = shallowRef(SiderLayout)

  function changeLayout(layoutComponents: typeof SiderLayout | typeof NoSiderLayout) {
    layout.value = layoutComponents
  }
  
  return { layout, changeLayout }
})
