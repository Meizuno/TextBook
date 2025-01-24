<template>
  <q-input
    filled
    type="text"
    v-model="path"
    label="Path"
    @click="dialog = true"
    readonly
    hint=""
  />
  <q-dialog v-model="dialog">
    <q-card
      :class="[
        $q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark',
        'w-80 shadow-lg rounded-md',
      ]"
    >
      <q-card-section
        :class="
          $q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-primary text-white'
        "
        class="flex justify-between"
      >
        <div class="text-h6">Path</div>
        <div>
          <q-btn
            v-if="path !== '/'"
            flat
            :color="$q.dark.isActive ? 'primary' : 'white'"
            label="Back"
            @click="back"
          />
          <q-btn
            flat
            :color="$q.dark.isActive ? 'primary' : 'white'"
            label="OK"
            v-close-popup
          />
        </div>
      </q-card-section>

      <q-card-section class="p-4">
        <div v-if="options.length === 0" class="text-center text-grey-7">
          No folders
        </div>
        <q-item
          v-else
          v-for="option in options"
          :key="option"
          clickable
          v-ripple
          :class="[
            $q.dark.isActive ? 'hover:bg-grey-7' : 'hover:bg-grey-2',
            'rounded-md',
          ]"
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
import { ref, watch } from 'vue'

import { useNode } from 'src/composables/useNode'

const path = defineModel({ type: String, required: true })
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})

const { getFolders } = useNode()
const options = ref<string[]>(getFolders(path.value, props.label))
const dialog = ref(false)

watch(path, () => {
  options.value = getFolders(path.value, props.label)
})

const back = () => {
  path.value = path.value.split('/').slice(0, -1).join('/') || '/'
}

const addPath = (option: string) => {
  path.value = path.value.replace(/\/?$/, '/') + option
}
</script>
