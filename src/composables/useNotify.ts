import { useQuasar } from 'quasar'

export function useNotify() {
  const q = useQuasar()

  const success = (msg: string) => {
    q.notify({
      color: 'positive',
      icon: 'check_circle',
      position: 'top-right',
      message: msg,
      actions: [
        { icon: 'close', color: 'white', round: true, handler: () => {} },
      ],
    })
  }

  const load = (msg: string) => {
    return q.notify({
      type: 'ongoing',
      spinner: true,
      message: msg,
      position: 'top-right',
      timeout: 0,
    })
  }

  const error = (msg: string) => {
    q.notify({
      color: 'negative',
      icon: 'error',
      message: msg,
      position: 'top-right',
      actions: [
        { icon: 'close', color: 'white', round: true, handler: () => {} },
      ],
    })
  }

  return {
    success,
    load,
    error,
  }
}
