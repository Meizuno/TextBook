import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type TreeNode } from 'src/db'
import { LocalStorage } from 'quasar'

export const useNodeStore = defineStore('node', () => {
  const selectedNode = ref<TreeNode>({
    label: '',
    path: '',
    content: '',
    type: '',
  })

  const activeNode = ref<TreeNode | null>(
    LocalStorage.getItem('activeNode')
      ? JSON.parse(LocalStorage.getItem('activeNode') as string)
      : null,
  )

  const setActiveNode = (node: TreeNode) => {
    LocalStorage.setItem('activeNode', JSON.stringify(node))
    activeNode.value = node
  }

  const setSelectedNode = (node: TreeNode) => {
    selectedNode.value = node
  }

  const unselectNode = () => {
    selectedNode.value = {
      label: '',
      path: '',
      content: '',
      type: '',
    }
  }

  return {
    activeNode,
    selectedNode,
    setActiveNode,
    setSelectedNode,
    unselectNode,
  }
})
