<template>
  <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md q-pa-lg"
    >
      <q-input
        filled
        clearable
        type="text"
        v-model="name"
        label="Name"
        :rules="[(val) => val && val.length > 0]"
      />

      <q-select
        filled
        :disable="options.length === 0"
        label="Path"
        v-model="newPath"
        :options="options"
        :display-value="`${path ? path : ''}`"
        v-bind="{ hint: options.length === 0 ? 'Make sure if folder exists' : '' }"
      />

      <q-input
        filled
        autogrow
        type="textarea"
        v-model="text"
        label="Text"
      />

      <div class="row justify-between">
        <q-btn
          color="secondary"
          round
          :disable="!text"
          size="12px"
          icon="remove_red_eye"
          @click="showPreview"
        />
        <div>
          <q-btn label="Reset" type="reset" color="grey" class="q-ml-sm"/>
          <q-btn label="Submit" type="submit" color="primary" class="q-ml-sm"/>
        </div>
      </div>
    </q-form>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useNodeStore } from 'src/stores/node';
import { useNotifyStore } from 'src/stores/notify';
import { useQuasar } from 'quasar'
import { useNavigation } from 'src/composables/useNavigation';
import { marked } from 'marked';
import 'github-markdown-css/github-markdown.css';
import { useRoute } from 'vue-router';

const route = useRoute();

const { editNode, getFolders } = useNodeStore()
const { success } = useNotifyStore()

const name = ref('')
const path = ref('')

const newPath = ref('')

const oldName = ref('')
const oldPath = ref('')

const text = ref('')
const savedText = ref('')
const options = ref<string[]>([])
const { navigate } = useNavigation()

const q = useQuasar()

watch(() => route.params.path as string, (newValue) => {
  name.value = newValue.split('/').pop()?.split('.')[0] || ''
  path.value = newValue.split('/').slice(0, -1).join('/')
  oldPath.value = path.value
  oldName.value = name.value
  text.value = ''
  if (path.value) options.value = [ ".." ] 
  options.value.push(...getFolders(path.value))
}, { immediate: true });

const addPath = (option: string) => {
  if (option === '..') {
    path.value = path.value.split('/').slice(0, -1).join('/')
  }
  else{
    path.value += '/' + option
  }
}

watch(newPath, (newValue) => {
  if (!newValue) return
  addPath(newValue)
  options.value = [ "..", ...getFolders(path.value)]
  newPath.value = ''
})


const onSubmit = async () => {
  const pathWithSlash = path.value ? path.value + '/' : ''
  const fullPath = pathWithSlash + name.value + '.md'
  await editNode(
    {
      label: oldName.value,
      path: oldPath.value + '/' + oldName.value,
      type: "file",
      content: text.value,
      children: [],
      header: '',
      icon: ''
    },
    {
      label: name.value,
      path: fullPath,
      type: "file",
      content: text.value,
      children: [],
      header: '',
      icon: ''
    }
  )
  success('File updated')
  await navigate('home')
}

const onReset = () => {
  name.value = oldName.value
  text.value = savedText.value
  path.value = oldPath.value
}

const showPreview = async () => {
  q.dialog({
    message: await marked(text.value),
    html: true,
    class: 'markdown-body',
  })
}

</script>
