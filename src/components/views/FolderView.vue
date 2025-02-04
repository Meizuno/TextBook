<template>
  <q-form @submit="onSubmit" class="q-gutter-md q-pa-lg">
    <name-input v-model="selectedNode.label" />
    <path-input v-model="selectedNode.path" />

    <div class="flex justify-end">
      <q-btn
        v-if="!isCreated"
        :label="t('button.delete')"
        color="negative"
        class="q-ml-sm"
        @click="askToDelete"
      />
      <q-btn
        :label="t('button.submit')"
        type="submit"
        color="primary"
        class="q-ml-sm"
      />
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref, onBeforeUnmount, inject, type Ref } from 'vue'

import PathInput from 'src/components/form/PathInput.vue'
import NameInput from 'src/components/form/NameInput.vue'

import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { useNotify } from 'src/composables/useNotify'
import { LocalStorage, SessionStorage } from 'quasar'

import { useI18n } from 'vue-i18n'
import { useQuasar } from 'quasar'


const q = useQuasar()
const { t } = useI18n()
const selectedNode = ref(
  JSON.parse(
    SessionStorage.getItem('selectedNode') ??
      '{ "label": "", "path": "", "content": "", "type": "" }',
  ),
)

const savedSelectedNode = { ...selectedNode.value }
const isCreated = selectedNode.value.type === 'directory' ? false : true

const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = isCreated ? t('layout.createFolder') : t('layout.editFolder')

const { success } = useNotify()
const { navigate } = useNavigation()
const { createNode, editNode, deleteNode } = useNode()

const onSubmit = async () => {
  if (isCreated) {
    const result = await createNode(
      selectedNode.value.label.trim(),
      selectedNode.value.path,
      'directory',
    )

    if (result) {
      success(t('notify.folderCreated'))
      await navigate('home')
    }
  } else {
    const result = await editNode(
      savedSelectedNode.id as number,
      selectedNode.value.label.trim(),
      selectedNode.value.path,
      'directory',
      selectedNode.value.content,
    )

    if (result) {
      success(t('notify.folderUpdated'))
      await navigate('home')
    }
  }
}

const askToDelete = () => {
  q.dialog({
    title: t('dialog.deleteFolder'),
    message: t('dialog.deleteFolderMessage'),
    cancel: true,
    persistent: true,
  }).onOk(() => {
    deleteNode(
      savedSelectedNode.id as number,
      savedSelectedNode.label,
      savedSelectedNode.path,
      savedSelectedNode.type,
      savedSelectedNode.content,
    ).then(async () => {
      if (LocalStorage.getItem('activeNode') === savedSelectedNode.id) {
        LocalStorage.setItem('activeNode', 0)
      }
      success(t('notify.fileDelete'))
      await navigate('home')
    }).catch(() => {
      console.error('Error deleting file')
    })
  })
}

onBeforeUnmount(() => {
  SessionStorage.removeItem('selectedNode')
})
</script>
