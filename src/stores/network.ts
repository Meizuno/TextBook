import { defineStore } from 'pinia'
// import { Network } from '@capacitor/network';
import { ref } from 'vue'

export const useNetworkStore = defineStore('network', () => {
  const network = ref({
    connected: true,
    connectedType: 'wifi',
  })

  // const setStatus = async () => {
  //   const status = await Network.getStatus();

  //   network.value = {
  //     connected: status.connected,
  //     connectedType: status.connectionType,
  //   }
  // };

  return { network }
})
