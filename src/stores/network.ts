import { defineStore } from 'pinia'
import { Network } from '@capacitor/network'

export const useNetworkStore = defineStore('network', () => {
  const getStatus = async () => {
    return await Network.getStatus()
  }

  return { getStatus }
})
