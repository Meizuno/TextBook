<template>
  <div class="q-pa-md">
    <q-input
      dense
      filled
      v-model="filter"
      label="Search"
      class="q-my-md"
    >
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
      node-key="path"
      :filter="filter"
      :default-expand-all="false"
    >
      <template v-slot:header-folder="prop">
        <div class="row no-wrap justify-between full-width">
          <div class="row no-wrap ellipsis line items-center ">
            <q-icon class="q-mr-sm text-blue-8" :name="prop.node.icon" />
            <div>{{ prop.node.label.split('.')[0] }}</div>
          </div>
          <div class="row no-wrap">
            <q-btn
              flat
              dense
              color="primary"
              icon="edit"
              @click="editFolder(prop.node.path)"
            />
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
          <div
            class="row no-wrap ellipsis items-center"
            @click="chooseFile(prop.node)"
          >
            <q-icon size="20px" class="q-mr-xs text-blue-8" :name="prop.node.icon" />
            <div>{{ prop.node.label.split('.')[0] }}</div>
          </div>
          <div class="row no-wrap">
            <q-btn
              flat
              dense
              color="primary"
              icon="edit"
              @click="editFile(prop.node.path)"
            />
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
import { ref } from 'vue';
import { useNodeStore } from 'src/stores/node';
import { useTreeStore } from 'src/stores/tree';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar'
import { type TreeNode } from 'src/interface';

const q = useQuasar()
const router = useRouter();
const { setActiveNode, deleteNode } = useNodeStore()
// const { removeDir } = useFolderStore()
const { tree } = storeToRefs(useTreeStore())

const filter = ref('')

const chooseFile = async (node: TreeNode) => {
  setActiveNode(node)
  await router.push({ name: 'active' })
};

const editFolder = async (path: string) => {
  await router.push({ name: 'folder', params: { path: path, action: 'update' } })
};


const confirmDeleteNode = (node: TreeNode) => {
  q.dialog({
    title: 'Confirm',
    message: 'Are you sure you want to delete',
    cancel: true,
    persistent: true,
  }).onOk(() => {
    deleteNode(node).catch((error) => {
      console.error('Error while deleting node:', error);
    });
  });
};


const editFile = async (path: string) => {
  await router.push({ name: 'file', params: { path: path, action: 'update' } })
};

</script>
