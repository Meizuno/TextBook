<template>
  <div id="content" class="flex flex-col">
    <h1 class="text-3xl font-bold capitalize">{{ title }}</h1>
    <UBreadcrumb :items="path">
      <template #separator>
        <span class="mx-2 text-toned">/</span>
      </template>
    </UBreadcrumb>
    <MDC :value="content" class="prose dark:prose-invert mt-4" />
  </div>
</template>

<script setup lang="ts">
const { activeFile } = useFile();

if (!activeFile.value) {
  navigateTo("/");
}

const title = computed(() => {
  return activeFile.value?.name.replace(".md", "") || "";
});
const path = computed(() => {
  const items: Array<{ label: string; icon: string }> = [];
  const pathParts = activeFile.value?.path.replace(".md", "").split("/") || [];
  pathParts.pop()
  pathParts.forEach((item) => {
    items.push({
      label: item,
      icon: 'i-ic-twotone-folder',
    });
  });

  return items;
});
const content = computed(() => {
  return decodeBase64Utf8(activeFile.value?.content);
});
</script>
