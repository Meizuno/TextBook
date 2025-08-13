<template>
  <FileForm @submit="onSubmit" />
</template>

<script setup lang="ts">
const { resetActiveFile } = useFile();
resetActiveFile();

const storage = localStorage.getItem("storage") || "local";
const { createFile } = useGitHub();
const { createTree } = useTree();
const { setLoading } = useAppState();

const onSubmit = async (data: TreeNode) => {
  setLoading(true);
  let file = {
    sha: "",
    name: data.name,
    path: data.path,
    content: data.content,
    encoding: data.encoding,
  };
  if (storage === "github") {
    file = await createFile(data);
  }
  await db.treeNode.add({
    sha: file.sha,
    name: file.name,
    path: file.path,
    content: file.content,
    encoding: file.encoding,
  });
  await createTree();
  setLoading(false);
  navigateTo("/");
};
</script>
