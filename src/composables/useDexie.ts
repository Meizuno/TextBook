import { db, type TreeNode } from 'src/db';
import { liveQuery } from "dexie";


export function useDexie() {
  const getAllNodes = () => {
    try {
      return liveQuery(() => db.treeNode.toArray())
    } catch (err) {
      console.error(err)
    }
  }

  const addNode = async (node: TreeNode) => {
    return await db.treeNode.add(node)
  }

  const deleteNode = async (id: number) => {
    try {
      await db.treeNode.delete(id)
    } catch (err) {
      console.error(err)
    }
  }

  const getNodeById = async (id: number): Promise<TreeNode | undefined> => {
    try {
      return await db.treeNode.get(id)
    } catch (err) {
      console.error(err)
    }
  }

  return {
    getAllNodes,
    addNode,
    deleteNode,
    getNodeById,
  }
}
