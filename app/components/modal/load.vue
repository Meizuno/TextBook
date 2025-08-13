<template>
  <UModal
    v-model:open="loading"
    fullscreen
    title="Loading"
    description="Loading event"
    :dismissible="false"
    :close="false"
    :ui="{
      overlay: 'bg-elevated/50',
      content: 'bg-default/0',
      header: 'hidden',
      body: 'h-full w-full flex items-center justify-around'
    }"
  >
    <template #body>
      <UIcon name="i-line-md-loading-loop" class="size-10" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const { loading } = useAppState()
</script>
