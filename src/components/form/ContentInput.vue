<template>
  <q-input
    filled
    autogrow
    type="textarea"
    v-model="content"
    :label="t('form.content')"
    rows="3"
    hint=""
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const content = defineModel({ type: String, required: true })
</script>
