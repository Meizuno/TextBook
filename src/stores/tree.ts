import { defineStore, acceptHMRUpdate, storeToRefs } from 'pinia'
import { ref } from 'vue'
import { api } from 'src/boot/axios'
import { db, type TreeNode, type QTreeNode } from 'src/db'
import { useNetworkStore } from './network'
import { useSettingsStore } from 'src/stores/settings'


export const useTreeStore = defineStore('tree', () => {
  const tree = ref<QTreeNode[]>([])
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
    }

    loadingTree.value = false
  }

  const buildTree = async () => {
    const result: QTreeNode[] = []
    const nodes = await db.treeNode.toArray()
    nodes.sort((a, b) => {
      if (a.path < b.path) return -1;
      if (a.path > b.path) return 1;
    
      if (a.label < b.label) return -1;
      if (a.label > b.label) return 1;
    
      return 0;
    });

    nodes.forEach((node) => {
      result.push(extendNode(node))
    })

    tree.value = result
  };

  const extendNode = (node: TreeNode) => {
    return {
      ...node,
      header: node.type === 'directory' ? 'folder' : 'file',
      children: [],
    }
  }

  const keepTree = async () => {
    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      await api.post('/', tree.value)
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
    buildTree,
    keepTree,
    setExpanded,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTreeStore, import.meta.hot))
}
