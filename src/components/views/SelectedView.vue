<template>
  <div v-if="activeNode" class="q-pa-md">
    <div
      class="markdown-body"
      v-if="activeNode.label.endsWith('.md')"
      style="font-size: 18px"
      v-html="marked(activeNode.content)"
    ></div>
    <div v-else>
      <pre class="whitespace-pre-wrap break-words font-sans text-xl">
        {{ activeNode?.content }}
      </pre>
    </div>
  </div>
  <div
    v-else
    class="absolute-full flex flex-center text-h6 text-zinc-300 dark:text-zinc-600"
  >
    <q-icon name="info" />
    <div class="q-ml-sm">{{ t('message.selectFile') }}</div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref, ref, onMounted } from 'vue'
import { useNodeStore } from 'src/stores/node'
import { marked } from 'marked'
import 'github-markdown-css/github-markdown.css'
import { useI18n } from 'vue-i18n'
import { type TreeNode } from 'src/db'

const { t } = useI18n()
const { getActiveNode } = useNodeStore()

const activeNode = ref<TreeNode | null>(null)
const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = activeNode.value?.label.split('.')[0] || t('layout.main')

onMounted(async () => {
  activeNode.value = await getActiveNode()
  pageTitle.value = activeNode.value?.label.split('.')[0] || t('layout.main')
})
</script>
