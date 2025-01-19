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
        rows="3"
      />

      <div class="row justify-between">
        <q-btn
          color="secondary"
          :disable="!text"
          round
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
import { ref, watch, onMounted } from 'vue';
import { useNodeStore } from 'src/stores/node';
import { useTreeStore } from 'src/stores/tree';
import { useNotifyStore } from 'src/stores/notify';
import { useQuasar } from 'quasar'
import { useNavigation } from 'src/composables/useNavigation';
import { marked } from 'marked';
import 'github-markdown-css/github-markdown.css';

const q = useQuasar()
const name = ref('')
const path = ref('')
const newPath = ref('')
const text = ref('')
const options = ref<string[]>([])

const addPath = (option: string) => {
  if (option === '..') {
    path.value = path.value.split('/').slice(0, -1).join('/')
  }
  else{
    path.value += '/' + option
  }
}

const { createNode, getFolders } = useNodeStore()
const { setTree } = useTreeStore()
const { success } = useNotifyStore()
const { navigate } = useNavigation()

onMounted(() => {
  options.value = getFolders(path.value)
})

watch(newPath, (newValue) => {
  if (!newValue) return
  addPath(newValue)
  options.value = [ "..", ...getFolders(path.value)]
  newPath.value = ''
})

const onSubmit = async () => {
  const pathWithSlash = path.value ? path.value + '/' : ''
  const fullPath = pathWithSlash + name.value + '.md'
  await createNode({
    label: name.value,
    path: fullPath,
    type: "file",
    content: text.value,
    children: [],
    header: '',
    icon: ''
  })
  await setTree()
  success('File created')
  await navigate('home')
}

const onReset = () => {
  name.value = ''
  text.value = ''
  path.value = ''
}

const showPreview = async () => {
  q.dialog({
    message: await marked(text.value),
    html: true,
    class: 'markdown-body',
  })
}

</script>
