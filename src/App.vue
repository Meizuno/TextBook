<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

import { useTreeStore } from 'src/stores/tree'

onMounted(async () => {
  const { setTree } = useTreeStore()
  await setTree()
})

</script>
