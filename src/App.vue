<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { useTreeStore } from 'src/stores/tree'

onMounted(async () => {
  const { buildTree } = useTreeStore()
  await buildTree()
})

</script>
