const activeFile = ref<TreeNode | undefined>();
const isPreview = ref(true);

export const useFile = () => {
  const setActiveFile = async (id: number) => {
    activeFile.value = await db.treeNode.get(id);
  };

  const resetActiveFile = () => {
    activeFile.value = undefined;
  };

  const togglePreview = () => {
    isPreview.value = !isPreview.value;
  };

  return {
    activeFile,
    isPreview,

    setActiveFile,
    resetActiveFile,
    togglePreview,
  };
};
