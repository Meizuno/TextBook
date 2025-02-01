import { storeToRefs } from 'pinia'
import { api } from 'src/boot/axios'
import { db, type TreeNode } from 'src/db'
import { useTreeStore } from 'src/stores/tree'
import { useNetworkStore } from 'src/stores/network'
import { useSettingsStore } from 'src/stores/settings'
import { toRaw } from 'vue'
import { SessionStorage } from 'quasar'

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
    await db.treeNode.add(toRaw(newNode))
  }

  const updateNode = async (oldNode: TreeNode, newNode: TreeNode) => {
    await db.treeNode.update(oldNode.id, toRaw(newNode))

    if (newNode.type === 'directory') {
      const oldPathPrefix = oldNode.path + '/' + oldNode.label
      const newPathPrefix = newNode.path + '/' + newNode.label

      await db.treeNode
        .where('path')
        .startsWith(oldPathPrefix)
        .modify((child) => {
          child.path = child.path.replace(oldPathPrefix, newPathPrefix)
        })
    }
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

    await updateNode(oldNode, newNode)
    await buildTree()
  }

  const isExists = async (selectedNode: TreeNode) => {
    const nodes = await db.treeNode
      .filter(
        (node) =>
          node.label === selectedNode.label &&
          node.type === selectedNode.type &&
          node.path === selectedNode.path &&
          node.content === selectedNode.content,
      )
      .toArray()
    return nodes.length > 0
  }

  const areEqual = (node1: TreeNode, node2: TreeNode) => {
    return (
      node1.label === node2.label &&
      node1.type === node2.type &&
      node1.path === node2.path &&
      node1.content === node2.content
    )
  }

  const getFolders = async (path: string) => {
    const selectedNode = JSON.parse(
      SessionStorage.getItem('selectedNode') ?? 'null',
    )
    const nodes = await db.treeNode
      .where('path')
      .equals(path)
      .filter(
        (node) =>
          node.type === 'directory' &&
          (selectedNode === null || node.id !== selectedNode.id),
      )
      .toArray()
    return nodes.map((node) => node.label)
  }

  return { createNode, editNode, getFolders, isExists, areEqual }
}
