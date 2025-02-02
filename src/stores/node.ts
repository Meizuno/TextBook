import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LocalStorage } from 'quasar'
import { db } from 'src/db'

export const useNodeStore = defineStore('node', () => {
  const storedValue = LocalStorage.getItem('activeNode') as string
  const activeNode = ref<number>(
    storedValue !== null && !isNaN(parseInt(storedValue))
      ? parseInt(storedValue, 10)
      : 0,
  )

  const setActiveNode = (id: number) => {
    LocalStorage.setItem('activeNode', id)
    activeNode.value = id
  }

  const getActiveNode = async () => {
    return (await db.treeNode.get(activeNode.value)) || null
  }

  return {
    activeNode,
    setActiveNode,
    getActiveNode,
  }
})
