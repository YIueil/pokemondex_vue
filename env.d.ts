/// <reference types="vite/client" />
import type { DialogApi, LoadingBarApi, MessageApi, ModalApi, NotificationApi } from 'naive-ui'

declare global {
  interface Window {
    $message?: MessageApi
    $notification?: NotificationApi
    $dialog?: DialogApi
    $loadingBar?: LoadingBarApi
    $modal?: ModalApi
  }
}