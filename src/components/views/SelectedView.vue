<template>
  <div v-if="activeNode" class="q-pa-md markdown-body">
    <div
      v-if="activeNode.label.endsWith('.md')"
      style="font-size: 18px"
      v-html="marked(activeNode.content)"
    ></div>
    <div v-else-if="!activeNode.label.endsWith('.txt')">
      {{ activeNode?.content }}
    </div>
  </div>
  <div
    v-else
    class="absolute-full flex flex-center text-h6 text-zinc-300 dark:text-zinc-600"
  >
    <q-icon name="info" />
    <div class="q-ml-sm">Select a file</div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useNodeStore } from 'src/stores/node'
import { marked } from 'marked'
import 'github-markdown-css/github-markdown.css'

const { activeNode } = storeToRefs(useNodeStore())
const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = activeNode.value?.label.split('.')[0] || 'Text Book'
</script>
