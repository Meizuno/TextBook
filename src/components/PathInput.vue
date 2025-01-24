<template>
  <q-input filled type="text" v-model="path" label="Path" @click="dialog = true" readonly />
  <q-dialog v-model="dialog">
    <q-card
      :class="[
        $q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark',
        'w-80 shadow-lg rounded-md',
      ]"
    >
      <q-card-section
        :class="$q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-primary text-white'"
        class="flex justify-between"
      >
        <div class="text-h6">Path</div>
        <q-btn flat :color="$q.dark.isActive ? 'primary' : 'white'" label="OK" v-close-popup />
      </q-card-section>

      <q-card-section class="p-4">
        <q-item
          v-for="option in options"
          :key="option"
          clickable
          v-ripple
          :class="[$q.dark.isActive ? 'hover:bg-grey-7' : 'hover:bg-grey-2', 'rounded-md']"
          @click="addPath(option)"
        >
          <q-icon color="primary" name="folder" size="md" class="q-mr-sm" />
          <q-item-section>{{ option }}</q-item-section>
        </q-item>
      </q-card-section>

      <q-separator />
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

import { useNode } from 'src/composables/useNode'

const path = defineModel({ type: String, required: true })
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})

const options = ref<string[]>([])
const dialog = ref(false)

const { getFolders } = useNode()

watch(path, () => {
  options.value = getFolders(path.value, props.label)

  if (path.value !== '/') {
    options.value = ['..', ...options.value]
  }
})

onMounted(() => {
  options.value = getFolders(path.value, props.label)
  options.value = getFolders(path.value, props.label)
  if (path.value !== '/') {
    options.value = ['..', ...options.value]
  }
})

const addPath = (option: string) => {
  if (option === '..') {
    path.value = path.value.split('/').slice(0, -1).join('/') || '/'
  } else {
    path.value = path.value.replace(/\/?$/, '/') + option
  }
}
</script>
