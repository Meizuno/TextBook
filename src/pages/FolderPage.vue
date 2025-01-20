<template>
  <q-page>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-lg">
      <q-input
        filled
        clearable
        type="text"
        v-model="selectedNode.label"
        label="Name"
        :rules="[(val) => val && val.length > 0]"
      />

      <q-select
        filled
        :disable="options.length === 0"
        label="Path"
        v-model="selectedNode.path"
        :options="options"
        :display-value="`${selectedNode.path ? selectedNode.path : ''}`"
        v-bind="{ hint: options.length === 0 ? 'Make sure if folder exists' : '' }"
      />

      <div class="row justify-between">
        <q-btn label="Reset" type="reset" color="grey" class="q-ml-sm" />
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

const { selectedNode } = storeToRefs(useNodeStore())
const { setSelectedNode, unselectNode } = useNodeStore()
const savedSelectedNode = { ...selectedNode.value }
const isCreated = selectedNode.value.label ? false : true
const options = ref<string[]>([])

const { success } = useNotify()
const { setTree } = useTreeStore()
const { navigate } = useNavigation()
const { createNode, editNode, getFolders } = useNode()

onMounted(() => {
  options.value = getFolders(selectedNode.value)
})

const onSubmit = async () => {
  console.log(selectedNode.value)
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
    success('folder updated')
  }
  await setTree()
  await navigate('home')
}

const onReset = () => {
  setSelectedNode(savedSelectedNode)
}

onBeforeUnmount(() => {
  unselectNode()
})
</script>
