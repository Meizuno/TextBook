<template>
  <q-input
    filled
    clearable
    type="text"
    v-model="label"
    label="Name"
    :rules="[(val) => val && val.length > 0]"
  />
</template>

<script setup lang="ts">

const label = defineModel({ type: String, required: true })

</script>