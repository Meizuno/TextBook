import Dexie from "dexie";
import type { EntityTable } from "dexie";

interface TreeNode {
  id: number;
  sha: string;
  name: string;
  path: string;
  content: string;
  encoding: string
}

const db = new Dexie("TreeNodeDatabase") as Dexie & {
  treeNode: EntityTable<TreeNode, "id">;
};

db.version(1).stores({
  treeNode: "++id, sha, name, path, content, encoding",
});

export type { TreeNode };
export { db };
