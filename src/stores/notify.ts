import { defineStore } from "pinia";
import { useQuasar } from 'quasar'

export const useNotifyStore = defineStore('notify', () => {
  const q = useQuasar()
  
  const success = (msg: string) => {
    q.notify({
      color: 'positive',
      icon: 'check_circle',
      message: msg,
      actions: [
        { icon: 'close', color: 'white', round: true, handler: () => {} }
      ]
    })
  }

  const load = (msg: string) => {
    return q.notify({
      type: 'ongoing',
      spinner: true,
      message: msg,
      timeout: 0
    })
  }

  const error = (msg: string) => {
    q.notify({
      color: 'negative',
      icon: 'error',
      message: msg,
      actions: [
        { icon: 'close', color: 'white', round: true, handler: () => {} }
      ]
    })
  }

  return {
    success,
    load,
    error,
  }
})
