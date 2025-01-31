<template>
  <q-input
    filled
    type="text"
    v-model="path"
    :label="t('form.path')"
    @click="openDialog"
    readonly
    hint=""
  />
  <q-dialog v-model="dialog">
  <q-card
    :class="[
      $q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark',
      'w-80 shadow-lg rounded-md h-[300px] flex flex-col',
    ]"
  >
    <q-card-section
      :class="
        $q.dark.isActive ? 'bg-grey-9 text-white' : 'bg-primary text-white'
      "
      class="flex justify-between"
    >
      <div class="text-h6">{{ t('form.path') }}</div>
        <div>
          <q-btn
            v-if="path !== '/'"
            flat
            :color="$q.dark.isActive ? 'primary' : 'white'"
            :label="t('button.back')"
            @click="back"
          />
          <q-btn
            flat
            :color="$q.dark.isActive ? 'primary' : 'white'"
            :label="t('button.ok')"
            v-close-popup
          />
        </div>
      </q-card-section>

      <q-card-section class="p-4 flex-1 overflow-auto">
        <div v-if="options.length === 0" class="h-full flex flex-center text-grey-7">
          {{ t('message.moveHere') }}
        </div>
        <q-intersection
          v-else
          :transition="transitionSide"
          :transition-duration="700"
          :key="options.length"
        >
          <q-item
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
        </q-intersection>
      </q-card-section>
    <q-separator />
  </q-card>
</q-dialog>

</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

import { useNode } from 'src/composables/useNode'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const path = defineModel({ type: String, required: true })

const { getFolders } = useNode()
const options = ref<string[]>([])
const dialog = ref(false)
const transitionSide = ref('slide-left')

watch(path, async () => {
  options.value = await getFolders(path.value)
})

const back = () => {
  transitionSide.value = 'slide-right'
  path.value = path.value.split('/').slice(0, -1).join('/') || ''
}

const addPath = (option: string) => {
  transitionSide.value = 'slide-left'
  path.value = path.value.replace(/\/?$/, '/') + option
}

const openDialog = async () => {
  options.value = await getFolders(path.value)
  dialog.value = true
}
</script>
