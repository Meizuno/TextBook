<template>
  <q-page>
    <q-form @submit="onSubmit" class="q-gutter-md q-pa-lg">
      <q-input
        filled
        clearable
        type="text"
        v-model="selectedNode.label"
        label="Name"
        :rules="[(val) => val && val.length > 0]"
      />

      <path-input v-model="selectedNode.path" :label="selectedNode.label" />

      <q-input
        filled
        autogrow
        type="textarea"
        v-model="selectedNode.content"
        label="Text"
        rows="3"
      />

      <div class="row justify-between">
        <q-btn
          color="secondary"
          :disable="!selectedNode?.content"
          round
          size="12px"
          icon="remove_red_eye"
          @click="showPreview"
        />
        <q-btn label="Submit" type="submit" color="primary" class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { useNodeStore } from 'src/stores/node'
import { useTreeStore } from 'src/stores/tree'
import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { useNotify } from 'src/composables/useNotify'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { marked } from 'marked'
import 'github-markdown-css/github-markdown.css'

const q = useQuasar()
const { selectedNode } = storeToRefs(useNodeStore())
const { unselectNode } = useNodeStore()
const savedSelectedNode = { ...selectedNode.value }
const isCreated = ref(selectedNode.value.label ? false : true)
const options = ref<string[]>([])

const { success } = useNotify()
const { setTree } = useTreeStore()
const { navigate } = useNavigation()
const { createNode, editNode, getFolders } = useNode()

onMounted(() => {
  options.value = getFolders(selectedNode.value.path, selectedNode.value.label)
  if (selectedNode.value.path !== '/') {
    options.value = ['..', ...options.value]
  }
})

const onSubmit = async () => {
  if (isCreated.value) {
    await createNode(selectedNode.value)
    success('File created')
  } else {
    await editNode(savedSelectedNode, selectedNode.value)
    success('File updated')
  }
  await setTree()
  await navigate('home')
}

const showPreview = async () => {
  q.dialog({
    message: await marked(selectedNode.value.content),
    html: true,
    class: 'markdown-body',
  })
}

onBeforeUnmount(() => {
  unselectNode()
})
</script>
