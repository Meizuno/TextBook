import { storeToRefs } from 'pinia'
import { api } from 'src/boot/axios'
import { db, type TreeNode } from 'src/db'
import { useTreeStore } from 'src/stores/tree'
import { useNetworkStore } from 'src/stores/network'
import { useSettingsStore } from 'src/stores/settings'

export function useNode() {
  const { buildTree } = useTreeStore()

  const { getStatus } = useNetworkStore()
  const { storeUrl } = storeToRefs(useSettingsStore())

  const createNode = async (node: TreeNode) => {
    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      const reducedNode = {
        label: node.label,
        path: node.path,
        content: node.content,
        type: node.type,
        children: [],
      }
      await api.post('/item', reducedNode)
    }

    await addNode(node)
    await buildTree()
  }

  const addNode = async (newNode: TreeNode) => {
    await db.treeNode.add(newNode)
  }

  const deleteNode = async (oldNode: TreeNode) => {
    await db.treeNode.delete(oldNode.id)
  }

  const editNode = async (oldNode: TreeNode, newNode: TreeNode) => {
    const network = await getStatus()
    if (network.connected && storeUrl.value) {
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
    }

    await deleteNode(oldNode)
    await addNode(newNode)
    await buildTree()
  }

  const getFolders = (path: string, name: string) => {
    const result: string[] = []
    const traverse = (nodes: TreeNode[]) => {
      for (const node of nodes) {
        if (node.path === path) {
          if (node.type === 'directory' && node.label !== name)
            result.push(node.label)
        }
      }
    }

    const { tree } = useTreeStore()
    traverse(tree)
    return result
  }

  return { createNode, editNode, getFolders }
}
