<template>
  <q-form @submit="onSubmit" class="q-gutter-md q-pa-lg">
    <name-input v-model="selectedNode.label" />
    <path-input v-model="selectedNode.path" :label="selectedNode.label" />
    <content-input v-model="selectedNode.content" />
    <q-btn
      label="Submit"
      type="submit"
      color="primary"
      class="q-ml-sm float-right"
    />
  </q-form>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, onMounted, inject, type Ref } from 'vue'
import { useNodeStore } from 'src/stores/node'
import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { useNotify } from 'src/composables/useNotify'
import { storeToRefs } from 'pinia'

import PathInput from 'src/components/form/PathInput.vue'
import NameInput from 'src/components/form/NameInput.vue'
import ContentInput from 'src/components/form/ContentInput.vue'

const { selectedNode } = storeToRefs(useNodeStore())
const { unselectNode } = useNodeStore()
const savedSelectedNode = { ...selectedNode.value }
const isCreated = selectedNode.value.type === 'file' ? false : true
const options = ref<string[]>([])

const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = isCreated ? 'New File' : 'Edit File'

const { success } = useNotify()
const { navigate } = useNavigation()
const { createNode, editNode, getFolders } = useNode()

onMounted(() => {
  options.value = getFolders(selectedNode.value.path, selectedNode.value.label)
  if (selectedNode.value.path !== '/') {
    options.value = ['..', ...options.value]
  }
})

const onSubmit = async () => {
  if (isCreated) {
    await createNode(selectedNode.value)
    success('File created')
  } else {
    await editNode(savedSelectedNode, selectedNode.value)
    success('File updated')
  }
  await navigate('home')
}

onBeforeUnmount(() => {
  unselectNode()
})
</script>
