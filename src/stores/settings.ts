import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LocalStorage } from 'quasar'
import { useTreeStore } from 'src/stores/tree'
import { useNotify } from 'src/composables/useNotify'

export const useSettingsStore = defineStore('settings', () => {
  const storeUrl = ref<string>(LocalStorage.getItem('storeUrl') || '')

  const { success, error } = useNotify()
  const { setTree } = useTreeStore()

  const setStoreUrl = async (url: string) => {
    LocalStorage.setItem('storeUrl', url)
    storeUrl.value = url
    try {
      await setTree()
      success('Successfully read data')
    } catch {
      error('Failed to read data')
    }
  }

  return {
    storeUrl,
    setStoreUrl,
  }
})
