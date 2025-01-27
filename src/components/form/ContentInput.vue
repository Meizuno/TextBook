<template>
  <q-input
    filled
    autogrow
    type="textarea"
    v-model="content"
    label="Content"
    rows="3"
    hint=""
  />
</template>

<script setup lang="ts">
const content = defineModel({ type: String, required: true })
</script>
