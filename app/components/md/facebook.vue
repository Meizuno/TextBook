<template>
  <iframe
    :src="src"
    width="267"
    height="476"
    style="border: none; overflow: hidden"
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
  />
</template>

<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>
