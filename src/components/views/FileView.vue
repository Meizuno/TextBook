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
import { ref, onBeforeUnmount, onMounted, inject, type Ref } from 'vue'
import { useNodeStore } from 'src/stores/node'
import { useNavigation } from 'src/composables/useNavigation'
import { useNode } from 'src/composables/useNode'
import { useNotify } from 'src/composables/useNotify'
import { storeToRefs } from 'pinia'

import PathInput from 'src/components/form/PathInput.vue'
import NameInput from 'src/components/form/NameInput.vue'
import ContentInput from 'src/components/form/ContentInput.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { selectedNode } = storeToRefs(useNodeStore())
const { unselectNode } = useNodeStore()
const savedSelectedNode = { ...selectedNode.value }
const isCreated = selectedNode.value.type === 'file' ? false : true
const options = ref<string[]>([])

const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = isCreated ? t('layout.createFile') : t('layout.editFile')

const { success } = useNotify()
const { navigate } = useNavigation()
const { createNode, editNode, getFolders } = useNode()

onMounted(async () => {
  options.value = await getFolders(selectedNode.value.path)
  if (selectedNode.value.path !== '/') {
    options.value = ['..', ...options.value]
  }
})

const onSubmit = async () => {
  if (isCreated) {
    await createNode({
      label: selectedNode.value.label,
      path: selectedNode.value.path,
      type: 'file',
      content: selectedNode.value.content,
    })
    success(t('notify.fileCreated'))
  } else {
    await editNode({
      label: savedSelectedNode.label,
      path: savedSelectedNode.path,
      content: savedSelectedNode.content,
      type: 'file',
    }, {
      label: selectedNode.value.label,
      path: selectedNode.value.path,
      content: selectedNode.value.content,
      type: 'file',
    })
    success(t('notify.fileUpdated'))
  }
  await navigate('home')
}

onBeforeUnmount(() => {
  unselectNode()
})
</script>
