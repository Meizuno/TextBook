import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'

export const useSettingsStore = defineStore('settings', () => {
  const storeUrl = ref<string>(LocalStorage.getItem('storeUrl') || '')

  const setStoreUrl = (url: string) => {
    LocalStorage.setItem('storeUrl', url)
    storeUrl.value = url
  }

  return {
    storeUrl,
    setStoreUrl,
  }
})
