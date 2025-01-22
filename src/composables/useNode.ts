import { storeToRefs } from 'pinia';
import { api } from 'src/boot/axios'
import { type TreeNode } from 'src/interface'
import { useTreeStore } from 'src/stores/tree'

export function useNode() {
  const { tree } = storeToRefs(useTreeStore())

  const addNodeToTree = (tree: TreeNode[], newNode: TreeNode) => {
    const findAndAdd = (nodes: TreeNode[], path: string[], newNode: TreeNode): boolean => {
      const currentKey = path[0];
      const restPath = path.slice(1);
  
      for (const node of nodes) {
        if (node.path === currentKey) {
          if (restPath.length === 0) {
            if (!node.children) node.children = [];
            node.children.push(newNode);
            return true;
          } else {
            if (!node.children) node.children = [];
            return findAndAdd(node.children, restPath, newNode);
          }
        }
      }
      return false;
    };
  
    const pathSegments = newNode.path.split('/').filter(Boolean);
    findAndAdd(tree, pathSegments, newNode);
  };

  const createNode = async (node: TreeNode) => {
    const reducedNode = {
      label: node.label,
      path: node.path,
      content: node.content,
      type: node.type,
      children: [],
    }
    await api.post('/item', reducedNode)
    addNodeToTree(tree.value, node);
  }

  const updateNodeInTree = (tree: TreeNode[], path: string, updatedNode: Partial<TreeNode>): boolean => {
    const findAndUpdate = (nodes: TreeNode[], path: string[]): boolean => {
      const currentKey = path[0];
      const restPath = path.slice(1);
  
      for (const node of nodes) {
        if (node && node.path === currentKey) {
          if (restPath.length === 0) {
            Object.assign(node, updatedNode);
            return true;
          } else {
            if (node.children) {
              return findAndUpdate(node.children, restPath);
            }
          }
        }
      }
      return false;
    };
  
    const pathSegments = path.split('/').filter(Boolean);
    return findAndUpdate(tree, pathSegments);
  };
  

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
    await api.put('/item', { old_item: reducedOldNode, new_item: reducedNewNode })
    const updatedNodeData: Partial<TreeNode> = {
      label: newNode.label,
      path: newNode.path,
      content: newNode.content,
      type: newNode.type,
    };
  
    updateNodeInTree(tree.value, oldNode.path, updatedNodeData);
  }

  const removeNodeFromTree = (tree: TreeNode[], path: string, name: string) => {
    const findAndRemove = (nodes: TreeNode[], path: string[]): boolean => {
      const currentKey = path[0] || '/';
      const restPath = path.slice(1);
  
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
  
        if (node && node.path.endsWith(currentKey) && node.label === name) {
          if (restPath.length === 0) {
            nodes.splice(i, 1);
            return true;
          } else {
            if (node.children) {
              const isRemoved = findAndRemove(node.children, restPath);
              if (isRemoved && node.children.length === 0) {
                delete node.children;
              }
              return isRemoved;
            }
          }
        }
      }
      return false;
    };
  
    const pathSegments = path.split('/').filter(Boolean);
    findAndRemove(tree, pathSegments);
  };
  
  const deleteNode = async (node: TreeNode) => {
    const reducedNode = {
      label: node.label,
      path: node.path,
      content: node.content,
      type: node.type,
      children: [],
    }
    await api.delete('/item', { data: reducedNode })
    removeNodeFromTree(tree.value, node.path, node.label);
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
