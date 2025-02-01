<template>
  <q-form @submit="onSubmit" class="q-gutter-md q-pa-lg">
    <name-input v-model="selectedNode.label" />
    <path-input v-model="selectedNode.path" />
    <content-input v-model="selectedNode.content" />

    <div class="flex justify-end">
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
import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { useNotify } from 'src/composables/useNotify'

import PathInput from 'src/components/form/PathInput.vue'
import NameInput from 'src/components/form/NameInput.vue'
import ContentInput from 'src/components/form/ContentInput.vue'

import { SessionStorage } from 'quasar'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const selectedNode = ref(
  JSON.parse(
    SessionStorage.getItem('selectedNode') ??
      '{ "label": "", "path": "", "content": "", "type": "" }',
  ),
)

const savedSelectedNode = { ...selectedNode.value }
const isCreated = selectedNode.value.type === 'file' ? false : true

const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = isCreated ? t('layout.createFile') : t('layout.editFile')

const { success, error } = useNotify()
const { navigate } = useNavigation()
const { createNode, editNode, isExists, areEqual } = useNode()

const onSubmit = async () => {
  if (areEqual(savedSelectedNode, selectedNode.value)) {
    await navigate('home')
    return
  }
  if (isCreated) {
    if (
      await isExists({
        label: selectedNode.value.label,
        path: selectedNode.value.path,
        type: 'file',
        content: selectedNode.value.content,
      })
    ) {
      error(t('notify.fileExists'))
    } else {
      await createNode({
        label: selectedNode.value.label,
        path: selectedNode.value.path,
        type: 'file',
        content: selectedNode.value.content,
      })
      success(t('notify.fileCreated'))
      await navigate('home')
    }
  } else {
    if (
      await isExists({
        label: selectedNode.value.label,
        path: selectedNode.value.path,
        type: 'file',
        content: selectedNode.value.content,
      })
    ) {
      error(t('notify.fileExists'))
    } else {
      await editNode(
        {
          id: savedSelectedNode.id as number,
          label: savedSelectedNode.label,
          path: savedSelectedNode.path,
          content: savedSelectedNode.content,
          type: 'file',
        },
        {
          label: selectedNode.value.label,
          path: selectedNode.value.path,
          content: selectedNode.value.content,
          type: 'file',
        },
      )
      success(t('notify.fileUpdated'))
      await navigate('home')
    }
  }
}

onBeforeUnmount(() => {
  SessionStorage.removeItem('selectedNode')
})
</script>
