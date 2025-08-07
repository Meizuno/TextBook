<template>
  <div class="relative pb-[56.25%] w-full h-0 overflow-hidden">
    <iframe class="absolute top-0 left-0 w-full h-full" :src="src" />
  </div>
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
