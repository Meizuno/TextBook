<template>
  <q-form @submit="onSubmit" class="q-gutter-md q-pa-lg">
    <name-input v-model="selectedNode.label" />
    <path-input v-model="selectedNode.path" :label="selectedNode.label" />
    <div class="flex justify-end">
      <q-btn
        label="Submit"
        type="submit"
        color="primary"
        class="q-ml-sm"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { onBeforeUnmount, inject, type Ref } from 'vue'

import PathInput from 'src/components/form/PathInput.vue'
import NameInput from 'src/components/form/NameInput.vue'

import { useNodeStore } from 'src/stores/node'
import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { useNotify } from 'src/composables/useNotify'
import { storeToRefs } from 'pinia'

const { selectedNode } = storeToRefs(useNodeStore())
const { unselectNode } = useNodeStore()
const savedSelectedNode = { ...selectedNode.value }
const isCreated = selectedNode.value.type === 'directory' ? false : true

const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = isCreated ? 'New Folder' : 'Edit Folder'

const { success } = useNotify()
const { navigate } = useNavigation()
const { createNode, editNode } = useNode()

const onSubmit = async () => {
  if (isCreated) {
    await createNode({
      key: selectedNode.value.key,
      label: selectedNode.value.label,
      path: selectedNode.value.path,
      type: 'directory',
      content: '',
      children: [],
      header: '',
    })
    success('Folder created')
  } else {
    await editNode(savedSelectedNode, selectedNode.value)
    success('Folder updated')
  }
  await navigate('home')
}

onBeforeUnmount(() => {
  unselectNode()
})
</script>
