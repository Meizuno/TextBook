import { defineStore } from "pinia";
import { ref } from "vue";
import { type TreeNode } from "src/interface";
import { LocalStorage } from "quasar";

export const useNodeStore = defineStore('node', () => {
  const selectedNode = ref<TreeNode>({
    key: '',
    label: '',
    path: '/',
    content: '',
    type: '',
    children: [],
    header: '',
    icon: ''
  })

  const activeNode = ref<TreeNode | null>(
    LocalStorage.getItem('activeNode') 
      ? JSON.parse(LocalStorage.getItem('activeNode') as string) 
      : null
  );

  const setActiveNode = (node: TreeNode) => {
    LocalStorage.setItem('activeNode', JSON.stringify(node))
    activeNode.value = node
  }

  const setSelectedNode = (node: TreeNode) => {
    selectedNode.value = node
  }

  const unselectNode = () => {
    selectedNode.value = {
      key: '',
      label: '',
      path: '',
      content: '',
      type: '',
      children: [],
      header: '',
      icon: ''
    }
  }

  return {
    activeNode, selectedNode, setActiveNode, setSelectedNode, unselectNode
  }
})