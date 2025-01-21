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

      <q-input filled type="text" v-model="selectedNode.path" label="Path" @click="dialog = true" />
      <q-dialog v-model="dialog">
        <q-card
          :class="[
            $q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark',
            'w-80 shadow-lg rounded-md',
          ]"
        >
          <q-card-section
            :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-primary text-white'"
            class="flex justify-between"
          >
            <div class="text-h6">Path</div>
            <q-btn flat color='primary' label="OK" v-close-popup />
          </q-card-section>

          <!-- Список -->
          <q-card-section class="p-4">
            <q-item
              v-for="option in options"
              :key="option"
              clickable
              v-ripple
              :class="[$q.dark.isActive ? 'hover:bg-grey-7' : 'hover:bg-grey-2', 'rounded-md']"
              @click="addPath(option)"
            >
              <q-icon color="primary" name="folder" size="md" class="q-mr-sm" />
              <q-item-section>{{ option }}</q-item-section>
            </q-item>
          </q-card-section>

          <q-separator />
        </q-card>
      </q-dialog>

      <div class="row justify-end">
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
const { unselectNode } = useNodeStore()
const savedSelectedNode = { ...selectedNode.value }
const isCreated = selectedNode.value.label ? false : true
const options = ref<string[]>([])
const dialog = ref(false)

const { success } = useNotify()
const { setTree } = useTreeStore()
const { navigate } = useNavigation()
const { createNode, editNode, getFolders } = useNode()

onMounted(() => {
  options.value = getFolders(selectedNode.value.path, selectedNode.value.label)
  options.value = getFolders(selectedNode.value.path, selectedNode.value.label)
  if (selectedNode.value.path !== '/') {
    options.value = ['..', ...options.value]
  }
})

const addPath = (path: string) => {
  if (path === '..') {
    selectedNode.value.path = selectedNode.value.path.split('/').slice(0, -1).join('/') || '/'
  } else {
    selectedNode.value.path = selectedNode.value.path.replace(/\/?$/, '/') + path
  }

  options.value = getFolders(selectedNode.value.path, selectedNode.value.label)

  if (selectedNode.value.path !== '/') {
    options.value = ['..', ...options.value]
  }
}

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
    success('folder updated')
  }
  await setTree()
  await navigate('home')
}

onBeforeUnmount(() => {
  unselectNode()
})
</script>
