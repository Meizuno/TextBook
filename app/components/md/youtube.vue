<template>
  <iframe class="w-full" :src="src" />
</template>

<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const src = computed(() => `https://www.youtube.com/embed/${props.id}`);
</script>
