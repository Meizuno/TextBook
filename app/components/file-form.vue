<template>
  <UForm
    :validate="validate"
    :state="model"
    class="relative flex flex-col"
    @submit="onSubmit"
  >
    <UInput
      v-model="model.name"
      placeholder="Title"
      variant="ghost"
      :ui="{ base: 'placeholder:text-3xl text-3xl font-bold capitalize' }"
    />
    <UInput
      v-model="model.path"
      placeholder="Path"
      variant="ghost"
      autocapitalize="off"
    />
    <UTextarea
      v-model="model.content"
      autoresize
      placeholder="Content..."
      variant="ghost"
      class="flex-1 text-toned"
      autocapitalize="off"
      autocorrect="off"
    />

    <UButton
      type="submit"
      size="xl"
      icon="i-material-symbols-check-rounded"
      :ui="{
        base: 'p-2 absolute top-0 right-0 glass text-default text-bold rounded-full justify-center',
      }"
    />
  </UForm>
</template>

<script setup lang="ts">
import type { FormError } from "@nuxt/ui";

const { activeFile } = useFile();
const isExists = async (path: string): Promise<boolean> => {
  const items = await db.treeNode
    .where("path")
    .equals(path)
    .filter((item) => item.id !== activeFile.value?.id)
    .toArray();
  return items.length > 0;
};

const validate = async (state: TreeNode): Promise<FormError[]> => {
  const errors = [];
  if (!state.name) errors.push({ name: "name", message: "Name is required" });

  if (await isExists(fullPath())) {
    errors.push({
      name: "name",
      message: `File with name "${state.path}" already exists in folder "${state.path}"`,
    });
  }

  return errors;
};

const model = computed(() => {
  const content = decodeBase64Utf8(activeFile.value?.content);
  return {
    name: activeFile.value?.name.replace(".md", "") || "",
    path:
      activeFile.value?.path?.substring(
        0,
        activeFile.value.path.lastIndexOf("/") + 1
      ) || "",
    content: content,
  };
});
const emit = defineEmits(["submit"]);
const onSubmit = async () => {
  const data = {
    sha: "",
    name: `${model.value.name}.md`,
    path: fullPath(),
    content: encodeBase64Unicode(model.value.content),
    encoding: "base64",
  };

  emit("submit", data);
};

const fullPath = () => {
  const sanitizedName = model.value.name.startsWith("/")
    ? model.value.name.slice(1)
    : model.value.name;

  if (!model.value.path) {
    return `${sanitizedName}.md`;
  }

  const sanitizedPath = model.value.path.endsWith("/")
    ? model.value.path.slice(0, -1)
    : model.value.path;

  const sanitizedPathStart = sanitizedPath.startsWith("/")
    ? sanitizedPath.slice(1)
    : sanitizedPath;

  return `${sanitizedPathStart}/${sanitizedName}.md`;
};

const { isPreview } = useFile();
onBeforeUnmount(() => {
  isPreview.value = true;
});
</script>
