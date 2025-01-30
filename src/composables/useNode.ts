import { storeToRefs } from 'pinia'
import { api } from 'src/boot/axios'
import { type TreeNode } from 'src/interface'
import { useTreeStore } from 'src/stores/tree'
import { LocalStorage } from 'quasar'
import { useNetworkStore } from 'src/stores/network'
import { useSettingsStore } from 'src/stores/settings'

export function useNode() {
  const { tree } = storeToRefs(useTreeStore())
  const { setTree } = useTreeStore()

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

    addNode(node)
    LocalStorage.setItem('tree', JSON.stringify(tree.value))

    await setTree()
  }

  const addNode = (newNode: TreeNode) => {
    const pathArray = newNode.path.split('/').slice(1)

    const traverse = (nodes: TreeNode[]) => {
      if (pathArray.length === 0) {
        nodes.push({
          ...newNode,
          key: newNode.path + newNode.label,
          header: newNode.type === 'directory' ? 'folder' : 'file',
        })

        return
      }
      for (const node of nodes) {
        if (node.label === pathArray[0]) {
          pathArray.shift()
          return traverse(node.children)
        }
      }
    }

    traverse(tree.value)
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

    deleteNode(oldNode)
    addNode(newNode)
    LocalStorage.setItem('tree', JSON.stringify(tree.value))

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

  const deleteNode = (oldNode: TreeNode) => {
    const pathArray = oldNode.path.split('/').slice(1)

    const traverse = (nodes: TreeNode[]) => {
      if (pathArray.length === 0) {
        nodes.splice(nodes.indexOf(oldNode), 1)
        return
      }
      for (const node of nodes) {
        if (node.label === pathArray[0]) {
          pathArray.shift()
          return traverse(node.children)
        }
      }
    }

    traverse(tree.value)
  }

  return { createNode, editNode, getFolders }
}
