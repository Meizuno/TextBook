interface Tree {
  id: number;
  label: string;
  icon: string | undefined;
  onSelect: () => void;
  children?: Tree[];
}

const tree = ref<Tree[]>([]);

export const useTree = () => {
  const { setActiveFile } = useFile();

  const createTreeNode = (
    path: string,
    node: TreeNode,
    isLeaf: boolean
  ): Tree => {
    return {
      id: node.id,
      label: path.split("/").pop()!,
      icon: isLeaf ? "i-hugeicons-file-01" : undefined,
      onSelect: () => {
        if (isLeaf) {
          setActiveFile(node.id);
          navigateTo("/file");
        }
      },
      children: isLeaf ? undefined : [],
    };
  };

  const getCurrentTreeNode = (
    path: string,
    treeMap: { [key: string]: Tree },
    node: TreeNode,
    isLeaf: boolean
  ): Tree => {
    if (!treeMap[path]) {
      treeMap[path] = createTreeNode(path, node, isLeaf);
    }
    return treeMap[path];
  };

  const sortTree = (nodes: Tree[]): Tree[] => {
    return nodes.sort((a, b) => {
      if (a.children && !b.children) return -1;
      if (!a.children && b.children) return 1;
      return a.label.localeCompare(b.label);
    });
  };

  const createTree = async () => {
    const nodes = await db.treeNode.toArray();
    const treeMap: { [key: string]: Tree } = {};

    nodes.forEach((node) => {
      const pathParts = node.path.replace(".md", "").split("/");
      let currentPath = "";

      pathParts.forEach((part: string, index: number) => {
        currentPath = currentPath ? `${currentPath}/${part}` : part;
        const isLeaf = index === pathParts.length - 1;

        const currentTree = getCurrentTreeNode(
          currentPath,
          treeMap,
          node,
          isLeaf
        );

        if (!isLeaf && currentTree && !currentTree.children) {
          currentTree.children = [];
        }
      });
    });

    const resultTree: Tree[] = [];
    for (const path in treeMap) {
      const treeNode = treeMap[path];
      const pathParts = path.split("/");
      const parentPath = pathParts.slice(0, pathParts.length - 1).join("/");

      if (parentPath) {
        const parentNode = treeMap[parentPath];
        if (parentNode) {
          parentNode.children?.push(treeNode!);
        }
      } else {
        resultTree.push(treeNode!);
      }
    }

    tree.value = sortTree(resultTree);
  };

  return {
    tree,
    createTree,
  };
};
