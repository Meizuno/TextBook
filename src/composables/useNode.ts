import { api } from 'src/boot/axios'
import { type TreeNode } from 'src/interface'
import { useTreeStore } from 'src/stores/tree'

export function useNode() {
  const { setTree } = useTreeStore()

  const createNode = async (node: TreeNode) => {
    const reducedNode = {
      label: node.label,
      path: node.path,
      content: node.content,
      type: node.type,
      children: [],
    }
    await api.post('/item', reducedNode)
    await setTree()
  }

  const editNode = async (old_node: TreeNode, new_node: TreeNode) => {
    const reducedOldNode = {
      label: old_node.label,
      path: old_node.path,
      content: old_node.content,
      type: old_node.type,
      children: [],
    }
    const reducedNewNode = {
      label: new_node.label,
      path: new_node.path,
      content: new_node.content,
      type: new_node.type,
      children: [],
    }
    await api.put('/item', { old_item: reducedOldNode, new_item: reducedNewNode })
    await setTree()
  }

  const deleteNode = async (node: TreeNode) => {
    const reducedNode = {
      label: node.label,
      path: node.path,
      content: node.content,
      type: node.type,
      children: [],
    }
    await api.delete('/item', { data: reducedNode })
    await setTree()
  }

  const getFolders = (path: string, name: string) => {
    const result: string[] = []
    const traverse = (nodes: TreeNode[]) => {
      for (const node of nodes) {
        if (node.path === path) {
          if (node.type === 'directory' && node.label !== name) result.push(node.label)
        }
        if (node.children) {
          traverse(node.children)
        }
      }
    }

    const { tree } = useTreeStore()
    traverse(tree)
    return result
  }

  return { createNode, editNode, deleteNode, getFolders }
}
