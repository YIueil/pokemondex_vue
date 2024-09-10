import { createDiscreteApi, darkTheme, lightTheme } from 'naive-ui'
import type {
  MessageApi,
  NotificationApi,
  DialogApi,
  LoadingBarApi,
  ModalApi,
  ConfigProviderProps
} from 'naive-ui'
import type { App } from 'vue'

// 创建一个全局插件 app.use(NaiveUiPlugin) 将调用插件对象内部的install方法
export const NaiveUiPlugin = {
  install(app: App) {
    const themeRef = ref<'light' | 'dark'>('light')
    const configProviderPropsRef = computed<ConfigProviderProps>(() => ({
      theme: themeRef.value === 'light' ? lightTheme : darkTheme
    }))

    const { message, notification, dialog, loadingBar, modal } = createDiscreteApi(
      ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
      {
        configProviderProps: configProviderPropsRef
      }
    )

    // 注册组件到全局
    app.provide<MessageApi>('$message', message)
    app.provide<NotificationApi>('$notification', notification)
    app.provide<DialogApi>('$dialog', dialog)
    app.provide<LoadingBarApi>('$loadingBar', loadingBar)
    app.provide<ModalApi>('$modal', modal)

    // 注册到 window 对象，如果你确实需要这样做
    window.$message = message
    window.$notification = notification
    window.$dialog = dialog
    window.$loadingBar = loadingBar
    window.$modal = modal
  }
}
