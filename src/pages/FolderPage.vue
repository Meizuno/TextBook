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

      <div class="row justify-end">
        <q-btn label="Submit" type="submit" color="primary" class="q-ml-sm" />
      </div>
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { onBeforeUnmount } from 'vue'

import PathInput from 'src/components/PathInput.vue'

import { useNodeStore } from 'src/stores/node'
import { useTreeStore } from 'src/stores/tree'
import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { useNotify } from 'src/composables/useNotify'
import { storeToRefs } from 'pinia'

const { selectedNode } = storeToRefs(useNodeStore())
const { unselectNode } = useNodeStore()
const savedSelectedNode = { ...selectedNode.value }
const isCreated = selectedNode.value.label ? false : true

const { success } = useNotify()
const { setTree } = useTreeStore()
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
      icon: '',
    })
    success('Folder created')
  } else {
    await editNode(savedSelectedNode, selectedNode.value)
    success('Folder updated')
  }
  await setTree()
  await navigate('home')
}

onBeforeUnmount(() => {
  unselectNode()
})
</script>
