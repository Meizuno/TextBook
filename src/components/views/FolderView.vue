<template>
  <q-form @submit="onSubmit" class="q-gutter-md q-pa-lg">
    <name-input v-model="selectedNode.label" />
    <path-input v-model="selectedNode.path" />
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

import PathInput from 'src/components/form/PathInput.vue'
import NameInput from 'src/components/form/NameInput.vue'

import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { useNotify } from 'src/composables/useNotify'
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
const isCreated = selectedNode.value.type === 'directory' ? false : true

const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = isCreated ? t('layout.createFolder') : t('layout.editFolder')

const { success } = useNotify()
const { navigate } = useNavigation()
const { createNode, editNode } = useNode()

const onSubmit = async () => {
  if (isCreated) {
    const result = await createNode(
      selectedNode.value.label,
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
      selectedNode.value.label,
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

onBeforeUnmount(() => {
  SessionStorage.removeItem('selectedNode')
})
</script>
