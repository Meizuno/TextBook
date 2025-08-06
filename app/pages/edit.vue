<template>
  <FileForm @submit="onSubmit" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const { activeFile } = useFile();
if (!activeFile.value) {
  navigateTo("/");
}

const storage = localStorage.getItem("storage") || "local";
const { createFile, deleteFile } = useGitHub();
const { createTree } = useTree();

const onSubmit = async (data: TreeNode) => {
  let sha = "";
  if (storage === "github") {
    await deleteFile(activeFile.value!);
    const file = await createFile(data);
    sha = file.sha;
  }

  await db.treeNode.update(activeFile.value!.id, {
    sha: sha,
    name: data.name,
    path: data.path,
    content: data.content,
    encoding: data.encoding,
  });

  await createTree();
  navigateTo("/");
};
</script>
