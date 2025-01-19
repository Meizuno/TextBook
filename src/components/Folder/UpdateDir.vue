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

    <div class="row justify-end">
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

const props = defineProps<{
  name: string
  path: string
}>()

const name = ref(props.name)
const savedName = props.name
const uniqueName = ref(true)
const path = ref(props.path.split('/').slice(0, -1).join('/'))
const savedPath = props.path.split('/').slice(0, -1).join('/')
const oldPath = path.value + '/' + name.value
const newPath = ref('')
const options = ref<string[]>([])

const addPath = (option: string) => {
  if (option === '..') {
    path.value = path.value.split('/').slice(0, -1).join('/')
  }
  else{
    path.value += '/' + option
  }
}

const { editNode, getFolders } = useNodeStore()
const { success } = useNotifyStore()
const { navigate } = useNavigation()

onMounted(() => {
  if (path.value) {
    path.value = '/' + path.value
    options.value = [ ".." ]
  }
  console.log(path.value)
  options.value.push(...getFolders(path.value))
})

watch(newPath, (newValue) => {
  if (!newValue) return
  addPath(newValue)
  options.value = [ "..", ...getFolders(path.value)]
  newPath.value = ''
})

const onSubmit = async () => {
  const pathWithSlash = path.value ? path.value + '/' : ''
  const fullPath = pathWithSlash + name.value
  try {
    await editNode({
      label: savedName,
      path: oldPath,
      type: "directory",
      content: '',
      children: [],
      header: '',
      icon: ''
    }, {
      label: name.value,
      path: fullPath,
      type: "directory",
      content: '',
      children: [],
      header: '',
      icon: ''
    })
    success('Folder updated')
    await navigate('home')
  } catch {
    uniqueName.value = false
  }
}

const onReset = () => {
  name.value = savedName
  path.value = savedPath
}

</script>
