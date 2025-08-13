<template>
  <div class="h-full flex flex-col justify-between gap-8 py-2 px-4">
    <Preview v-if="isPreview" />
    <FileForm v-else @submit="onSubmit" />
    <div class="sticky w-full bottom-6 flex justify-between items-center">
      <UButton
        icon="i-iconamoon-arrow-left-2"
        size="xl"
        class="glass rounded-full p-2.5"
        :ui="{
          leadingIcon: 'size-5 text-default',
        }"
        to="/"
      />
      <UButtonGroup>
        <UButton
          :icon="
            isPreview
              ? 'i-hugeicons-task-edit-02'
              : 'i-icon-park-outline-preview-open'
          "
          size="xl"
          class="glass rounded-full py-3 px-5"
          :ui="{
            leadingIcon: 'size-5 text-default',
          }"
          @click="togglePreview"
        />
        <UButton
          icon="i-hugeicons-delete-03"
          size="xl"
          class="glass rounded-full py-3 px-5"
          :ui="{
            leadingIcon: 'size-5 text-default',
          }"
          @click="openConfirm = true"
        />
      </UButtonGroup>
    </div>

    <ModalConfirm v-model:open="openConfirm" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blank",
});

const { activeFile, isPreview, togglePreview } = useFile();
const openConfirm = ref(false);

if (!activeFile.value) {
  navigateTo("/");
}

const storage = localStorage.getItem("storage") || "local";
const { createFile, deleteFile } = useGitHub();
const { createTree } = useTree();
const { setLoading } = useAppState();

const onSubmit = async (data: TreeNode) => {
  setLoading(true);
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
  setLoading(false);
  navigateTo("/");
};
</script>
