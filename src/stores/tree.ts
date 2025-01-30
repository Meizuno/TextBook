import { defineStore, acceptHMRUpdate, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { type TreeNode } from 'src/interface'
import { useNetworkStore } from './network'
import { useSettingsStore } from 'src/stores/settings'
import { LocalStorage } from 'quasar'

export const useTreeStore = defineStore('tree', () => {
  const tree = ref<TreeNode[]>([])
  const loadingTree = ref(false)
  const expandedNodes = ref<string[]>([])

  const { getStatus } = useNetworkStore()
  const { storeUrl } = storeToRefs(useSettingsStore())

  const delay = async (ms: number) =>
    await new Promise((resolve) => setTimeout(resolve, ms))

  const setTree = async (ms?: number) => {
    loadingTree.value = true
    if (ms) await delay(ms)

    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      const { data } = await api.get('/')
      tree.value = await Promise.all(data.map(extendNode))
    } else {
      tree.value = LocalStorage.getItem('tree')
        ? JSON.parse(LocalStorage.getItem('tree') as string)
        : []
    }

    loadingTree.value = false
  }

  const keepTree = async () => {
    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      await api.post('/', tree.value)
    } else {
      tree.value = LocalStorage.getItem('tree')
        ? JSON.parse(LocalStorage.getItem('tree') as string)
        : []
    }
  }

  const extendNode = async (node: TreeNode): Promise<TreeNode> => {
    const isDir = node.type === 'directory'
    return {
      key: node.path + node.label,
      path: node.path,
      content: node.content,
      children: node.children
        ? await Promise.all(node.children.map(extendNode))
        : [],
      label: node.label,
      type: node.type,
      header: isDir ? 'folder' : 'file',
    }
  }

  const setExpanded = (nodes: string[]) => {
    expandedNodes.value = nodes
  }

  return {
    tree,
    loadingTree,
    expandedNodes,
    setTree,
    keepTree,
    setExpanded,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTreeStore, import.meta.hot))
}
