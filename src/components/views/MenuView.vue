<template>
  <q-pull-to-refresh
    @refresh="refresh"
    :bg-color="q.dark.isActive ? 'dark' : 'white'"
    class="absolute-full md:relative"
  >
    <div class="q-pa-md">
      <q-input
        dense
        filled
        v-model="filter"
        :label="t('filter.search')"
        class="q-my-md"
      >
        <template v-slot:append>
          <q-icon v-if="filter === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="filter = ''"
          />
        </template>
      </q-input>
      <q-intersection
        v-if="!loadingTree"
        transition="jump-down"
        class="example-item"
        :transition-duration="700"
      >
        <q-tree
          v-bind="{ class: { 'text-center': tree.length === 0 } }"
          no-nodes-label="No files found"
          class="text-body1"
          :nodes="tree"
          node-key="id"
          :filter="filter"
          v-model:expanded="expandedTree.value"
        >
          <template v-slot:header-folder="prop">
            <div class="row no-wrap justify-between full-width">
              <div class="row no-wrap ellipsis line items-center full-width">
                <q-icon class="q-mr-sm text-blue-8" name="room_service" />
                <div class="full-width">{{ prop.node.label }}</div>
              </div>
              <q-btn
                flat
                dense
                color="primary"
                icon="edit"
                @click="editFolder(prop.node)"
              />
            </div>
          </template>
          <template v-slot:header-file="prop">
            <div class="row no-wrap justify-between gap-2 full-width">
              <div
                class="row no-wrap ellipsis items-center full-width"
                @click="chooseFile(prop.node)"
              >
                <q-icon
                  size="20px"
                  class="q-mr-xs text-blue-8"
                  name="restaurant_menu"
                />
                <div class="flex-1">{{ prop.node.label.split('.')[0] }}</div>
              </div>
              <q-btn
                flat
                dense
                color="primary"
                icon="edit"
                @click="editFile(prop.node)"
              />
            </div>
          </template>
        </q-tree>
      </q-intersection>
      <div v-else>
        <q-skeleton
          v-for="_ in tree.length"
          :key="_"
          height="30px"
          :type="'rect'"
          class="q-my-md q-mx-sm"
        />
      </div>
    </div>
  </q-pull-to-refresh>
</template>

<script setup lang="ts">
import { ref, computed, inject, type Ref } from 'vue'
import { useNodeStore } from 'src/stores/node'
import { useTreeStore } from 'src/stores/tree'
import { storeToRefs } from 'pinia'
import { useQuasar } from 'quasar'
import { useNavigation } from 'src/composables/useNavigation'
import { type TreeNode } from 'src/db'
import { SessionStorage } from 'quasar'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const q = useQuasar()
const { setActiveNode } = useNodeStore()
const { tree, loadingTree, expandedNodes } = storeToRefs(useTreeStore())
const { downloadTree, setExpanded } = useTreeStore()
const { navigate } = useNavigation()

const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = t('layout.main')

const filter = ref('')

const expandedTree = computed({
  get: () => expandedNodes,
  set: (value: string[]) => setExpanded(value),
})

const refresh = async (done: () => void) => {
  done()
  await downloadTree(1000)
}

const chooseFile = async (node: TreeNode) => {
  setActiveNode(node.id)
  await navigate('active')
}

const editFolder = async (node: TreeNode) => {
  SessionStorage.set('selectedNode', JSON.stringify({ ...node }))
  await navigate('folder')
}

const editFile = async (node: TreeNode) => {
  SessionStorage.set('selectedNode', JSON.stringify({ ...node }))
  await navigate('file')
}
</script>
