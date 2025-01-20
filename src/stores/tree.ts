import { defineStore, acceptHMRUpdate } from 'pinia';
import { ref } from 'vue';
import { api } from 'src/boot/axios';
import { type TreeNode } from 'src/interface';


export const useTreeStore = defineStore('tree', () => {
  const tree = ref<TreeNode[]>([]);

  const setTree = async () => {
    const { data } = await api.get('/')
    tree.value = await Promise.all(data.map(extendNode));
  }

  const extendNode = async (node: TreeNode): Promise<TreeNode> => {
    const isDir = node.type === 'directory';
    return {
      key: node.path + node.label,
      path: node.path,
      content: node.content,
      children: node.children ? await Promise.all(node.children.map(extendNode)) : [],
      label: node.label,
      type: node.type,
      header: isDir ? 'folder' : 'file',
      icon: isDir ? 'room_service' : 'restaurant_menu'
    };
  };

  return {
    tree,
    setTree,
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTreeStore, import.meta.hot));
}
