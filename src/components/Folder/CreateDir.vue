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
      :error="!uniqueName"
      :rules="[(val) => val && val.length > 0]"
    >
      <template v-slot:error>
        Folder '{{ name }}' already exists in '{{ path || 'root' }}'
      </template>
    </q-input>
    
    <q-select
      filled
      :disable="options.length === 0"
      label="Path"
      v-model="newPath"
      :options="options"
      :display-value="`${path ? path : ''}`"
      v-bind="{ hint: options.length === 0 ? 'Make sure if folder exists' : '' }"
    />

    <div class="row  justify-end">
      <q-btn label="Reset" type="reset" color="grey" class="q-ml-sm"/>
        <q-btn label="Submit" type="submit" color="primary" class="q-ml-sm"/>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useNodeStore } from 'src/stores/node';
import { useNotifyStore } from 'src/stores/notify';
import { useNavigation } from 'src/composables/useNavigation';

const name = ref('')
const path = ref('')
const newPath = ref('')
const uniqueName = ref(true)
const options = ref<string[]>([])
const { navigate } = useNavigation()


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

const { createNode, getFolders } = useNodeStore()
const { success, error } = useNotifyStore()

onMounted(() => {
  if (path.value) {
    path.value = '/' + path.value
    options.value = [ ".." ]
  }
  options.value = [...getFolders(path.value)]
})

watch(path, () => {
  options.value = [ "..", ...getFolders(path.value)]
})

const onSubmit = async () => {
  const pathWithSlash = path.value ? path.value + '/' : '/'
  const fullPath = pathWithSlash + name.value
  try {
    await createNode({
      label: name.value,
      path: fullPath,
      type: "directory",
      content: '',
      children: [],
      header: '',
      icon: ''
    })
    success('Folder created')
    uniqueName.value = true
    await navigate('home')
  } catch  {
    error('Folder already exists')
    uniqueName.value = false
  }
}

const onReset = () => {
  name.value = ''
  path.value = ''
}

</script>
