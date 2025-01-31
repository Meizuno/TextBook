import Dexie, { type EntityTable } from 'dexie';

interface TreeNode {
  id?: number
  label: string
  path: string
  content: string
  type: string
}

interface QTreeNode extends TreeNode {
  children: QTreeNode[]
  header: string
}


const db = new Dexie('TreeNodeDatabase') as Dexie & {
  treeNode: EntityTable<
  TreeNode,
    'id'
  >;
};

db.version(1).stores({
  treeNode: '++id, label, path, content, type',
});

export type { TreeNode, QTreeNode };
export { db };
