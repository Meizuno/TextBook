<template>
  <div class="q-pa-md">
    <q-input dense filled v-model="filter" label="Search" class="q-my-md">
      <template v-slot:append>
        <q-icon v-if="filter === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="filter = ''" />
      </template>
    </q-input>

    <q-tree
      v-bind="{ class: { 'text-center': tree.length === 0 } }"
      no-nodes-label="No files found"
      class="text-body1"
      :nodes="tree"
      node-key="key"
      :filter="filter"
    >
      <template v-slot:header-folder="prop">
        <div class="row no-wrap justify-between full-width">
          <div class="row no-wrap ellipsis line items-center full-width">
            <q-icon class="q-mr-sm text-blue-8" :name="prop.node.icon" />
            <div class="full-width">{{ prop.node.label.split('.')[0] }}</div>
          </div>
          <div class="row no-wrap">
            <q-btn flat dense color="primary" icon="edit" @click="editFolder(prop.node)" />
            <q-btn
              flat
              dense
              color="negative"
              icon="delete"
              @click="confirmDeleteNode(prop.node)"
            />
          </div>
        </div>
      </template>
      <template v-slot:header-file="prop">
        <div class="row no-wrap justify-between gap-2 full-width">
          <div class="row no-wrap ellipsis items-center full-width" @click="chooseFile(prop.node)">
            <q-icon size="20px" class="q-mr-xs text-blue-8" :name="prop.node.icon" />
            <div class="flex-1">{{ prop.node.label.split('.')[0] }}</div>
          </div>
          <div class="row no-wrap">
            <q-btn flat dense color="primary" icon="edit" @click="editFile(prop.node)" />
            <q-btn
              flat
              dense
              color="negative"
              icon="delete"
              @click="confirmDeleteNode(prop.node)"
            />
          </div>
        </div>
      </template>
    </q-tree>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNodeStore } from 'src/stores/node'
import { useTreeStore } from 'src/stores/tree'
import { useNotify } from 'src/composables/useNotify'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { type TreeNode } from 'src/interface'

const q = useQuasar()
const { setActiveNode, setSelectedNode } = useNodeStore()
const { deleteNode } = useNode()
const { tree } = storeToRefs(useTreeStore())
const { error } = useNotify()
const { navigate } = useNavigation()

const filter = ref('')

const chooseFile = async (node: TreeNode) => {
  setActiveNode(node)
  await navigate('active')
}

const editFolder = async (node: TreeNode) => {
  setSelectedNode(node)
  await navigate('folder')
}

const confirmDeleteNode = (node: TreeNode) => {
  q.dialog({
    title: 'Confirm',
    message: 'Are you sure you want to delete',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    deleteNode(node).catch(() => {
      error('Failed to delete')
    })
  })
}

const editFile = async (node: TreeNode) => {
  setSelectedNode(node)
  await navigate('file')
}
</script>
