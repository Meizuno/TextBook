<template>
  <q-input
    filled
    clearable
    type="text"
    v-model="label"
    :label="t('form.name')"
    :rules="[(val) => val && val.length > 0]"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const label = defineModel({ type: String, required: true })
</script>
