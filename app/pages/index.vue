<template>
  <div class="h-full">
    <UTree :items="tree" size="xl" />
  </div>
</template>

<script setup lang="ts">
const { tree, createTree } = useTree();
await createTree();
</script>
