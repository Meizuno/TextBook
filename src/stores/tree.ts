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

  const buildTree = async () => {
    const result: QTreeNode[] = []
    const nodes = await db.treeNode.toArray()

    // Sort nodes
    nodes.sort((a, b) => {
      if (a.label < b.label) return -1
      if (a.label > b.label) return 1

      if (a.path < b.path) return -1
      if (a.path > b.path) return 1

      return 0
    })

    // Define root nodes
    nodes.forEach((node) => {
      if (node.path === '') {
        result.push(extendNode(node))
      }
    })

    // Define child nodes using DFS
    const dfs = async (parent: QTreeNode) => {
      const children = await db.treeNode
        .where('path')
        .equals(parent.path + '/' + parent.label)
        .toArray()

      for (const child of children) {
        const extendedChild = extendNode(child)
        parent.children.push(extendedChild)
        await dfs(extendedChild)
      }
    }

    for (const parent of result) {
      await dfs(parent)
    }

    tree.value = result
  }

  const extendNode = (node: TreeNode) => {
    return {
      ...node,
      header: node.type === 'directory' ? 'folder' : 'file',
      children: [],
    }
  }

  const downloadTree = async (ms?: number) => {
    loadingTree.value = true
    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      const { data } = await api.get('/')

      await db.treeNode.clear()

      for (const node of data) {
        await db.treeNode.add(node)
      }
    }

    if (ms) await delay(ms)
    await buildTree()
    loadingTree.value = false
  }

  const uploadTree = async () => {
    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      await buildTree()
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
    buildTree,
    downloadTree,
    uploadTree,
    setExpanded,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTreeStore, import.meta.hot))
}
