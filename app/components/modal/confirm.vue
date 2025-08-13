<template>
  <UModal v-model:open="open" :close="false" :ui="{ footer: 'justify-end' }">
    <template #title>
      <div>Delete File</div>
    </template>
    <template #description>
      <p>Are you sure you want to delete this file?</p>
    </template>
    <template #footer>
      <UButton
        label="Cancel"
        color="neutral"
        variant="outline"
        @click="open = false"
      />
      <UButton label="Delete" color="error" @click="confirm" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const open = defineModel<boolean>("open", { default: false });

const { setLoading } = useAppState();
const storage = localStorage.getItem("storage") || "local";
const { deleteFile } = useGitHub();
const { createTree } = useTree();
const { activeFile } = useFile();

const confirm = async () => {
  setLoading(true);
  if (storage === "github") {
    await deleteFile(activeFile.value!);
  }
  await db.treeNode.delete(activeFile.value!.id);
  await createTree();
  setLoading(false);
  navigateTo("/");
  open.value = false;
};
</script>
