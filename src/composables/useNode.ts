import { storeToRefs } from 'pinia'
import { api } from 'src/boot/axios'
import { db, type TreeNode } from 'src/db'
import { useTreeStore } from 'src/stores/tree'
import { useNetworkStore } from 'src/stores/network'
import { useSettingsStore } from 'src/stores/settings'
import { useNotify } from 'src/composables/useNotify'
import { toRaw } from 'vue'
import { SessionStorage } from 'quasar'
import { useI18n } from 'vue-i18n'
import { useNavigation } from 'src/composables/useNavigation'

export function useNode() {
  const { buildTree } = useTreeStore()

  const { getStatus } = useNetworkStore()
  const { storeUrl } = storeToRefs(useSettingsStore())

  const { navigate } = useNavigation()
  const { error } = useNotify()
  const { t } = useI18n()

  const createNode = async (
    label: string,
    path: string,
    type: string,
    content: string = '',
  ) => {
    const node = {
      label: label,
      path: path,
      content: content,
      type: type,
    }

    if (await isExists(label, path, type)) {
      error(t('notify.fileExists'))
      return
    }

    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      try {
        await api.post('/', node)
      } catch {
        error(t('notify.error'))
      }
    }

    const id = await db.treeNode.add(node)
    await buildTree()

    return id
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

  const editNode = async (
    id: number,
    label: string,
    path: string,
    type: string,
    content: string,
  ) => {
    const node = await db.treeNode.get(id)
    if (node === undefined) {
      return
    }

    const oldNode = {
      label: node.label,
      path: node.path,
      content: node.content,
      type: node.type,
    }
    const newNode = {
      label: label,
      path: path,
      content: content,
      type: type,
    }

    if (areEqual(oldNode, newNode)) {
      await navigate('home')
      return id
    }

    if (await isExists(label, path, type)) {
      error(t('notify.fileExists'))
      return
    }

    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      try {
        await api.put('/item', {
          old_item: oldNode,
          new_item: newNode,
        })
      } catch {
        error(t('server.error'))
      }
    }

    await updateNode({ ...oldNode, id: node.id }, { ...newNode, id: node.id })
    await buildTree()

    return id
  }

  const deleteNode = async (
    id: number,
    label: string,
    path: string,
    type: string,
    content: string,
  ) => {
    const network = await getStatus()
    if (network.connected && storeUrl.value) {
      try {
        await api.delete('/item', {
          data: {
            label: label,
            path: path,
            type: type,
            content: content,
          },
        })
      } catch {
        error(t('server.error'))
      }
    }
  
    const node = await db.treeNode.get(id)
    if (node === undefined) {
      return
    }

    await db.treeNode.delete(id)

    if (node.type === 'directory') {
      await db.treeNode
        .where('path')
        .startsWith(node.path + '/' + node.label)
        .delete()
    }

    await buildTree()
  }

  const isExists = async (label: string, path: string, type: string) => {
    const nodes = await db.treeNode
      .filter(
        (node) =>
          node.label === label && node.type === type && node.path === path,
      )
      .toArray()
    return nodes.length > 0
  }

  const areEqual = (
    node1: { label: string; type: string; path: string; content: string },
    node2: { label: string; type: string; path: string; content: string },
  ) => {
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

  return { createNode, editNode, deleteNode, getFolders, isExists, areEqual }
}
