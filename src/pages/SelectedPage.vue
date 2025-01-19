<template>
  <q-page>
    <div v-if="activeNode" class="q-pa-md markdown-body" style="font-size: 18px;" v-html="marked(activeNode.content)"></div>
    <div v-else class="absolute-full flex flex-center text-h6 text-zinc-300 dark:text-zinc-600">
      <q-icon name="info" />
      <div class="q-ml-sm">Select a file</div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useNodeStore } from 'src/stores/node';
import { marked } from 'marked';
import 'github-markdown-css/github-markdown.css';

const { activeNode } = storeToRefs(useNodeStore());
</script>
