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

  const editNode = async (oldNode: TreeNode, newNode: TreeNode) => {
    const reducedOldNode = {
      label: oldNode.label,
      path: oldNode.path,
      content: oldNode.content,
      type: oldNode.type,
      children: [],
    }
    const reducedNewNode = {
      label: newNode.label,
      path: newNode.path,
      content: newNode.content,
      type: newNode.type,
      children: [],
    }
    await api.put('/item', {
      old_item: reducedOldNode,
      new_item: reducedNewNode,
    })

    await setTree()
  }

  const getFolders = (path: string, name: string) => {
    const result: string[] = []
    const traverse = (nodes: TreeNode[]) => {
      for (const node of nodes) {
        if (node.path === path) {
          if (node.type === 'directory' && node.label !== name)
            result.push(node.label)
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

  return { createNode, editNode, getFolders }
}
