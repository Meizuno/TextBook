import { defineBoot } from '#q-app/wrappers'
import axios, { type AxiosInstance } from 'axios'
import { useSettingsStore } from 'src/stores/settings'

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
    $api: AxiosInstance
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create()

export default defineBoot(({ app }) => {
  api.interceptors.request.use((config) => {
    const { storeUrl } = useSettingsStore()

    if (!storeUrl) {
      console.warn('storeUrl is not set. Query was skipped.')
      return Promise.resolve(config)
    }

    config.baseURL = storeUrl

    return config
  })

  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
