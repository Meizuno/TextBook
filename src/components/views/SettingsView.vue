<template>
  <div class="q-px-md q-py-lg">
    <div class="q-mb-lg">
      <div class="px-2 text-grey-7">{{ t('settings.advanced') }}</div>
      <div
        class="flex flex-col rounded-lg p-2 gap-2"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-1 shadow-3'"
      >
        <div class="row items-center w-full">
          <div class="flex-1 row justify-start items-center">
            <div>{{ t('settings.storeURL') }}</div>
            <q-btn
              @click.stop="handleInnerClick"
              flat
              icon="help_outline"
              color="grey-7"
              round
              size="sm"
            />
          </div>

          <q-banner
            dense
            rounded
            class="flex-1 text-left py-1 px-2"
            :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-4'"
            @click="addStoreUrl"
          >
            <div class="text-ellipsis overflow-x-hidden">
              {{ storeUrl }}
            </div>
          </q-banner>
        </div>
        <div
          class="h-0.5"
          :class="$q.dark.isActive ? 'bg-grey-7' : 'bg-grey-3'"
        ></div>
        <div class="flex gap-2">
          <q-btn
            padding="none"
            outline
            :color="$q.dark.isActive ? 'grey-5' : 'grey-8'"
            class="flex-1"
            @click="downloadTree"
          >
            {{ t('settings.download') }}
          </q-btn>
          <q-btn
            padding="none"
            outline
            :color="$q.dark.isActive ? 'grey-5' : 'grey-8'"
            class="flex-1"
            @click="uploadTree"
          >
            {{ t('settings.upload') }}
          </q-btn>
        </div>
      </div>
    </div>
    <div>
      <div class="px-2 text-grey-7">{{ t('settings.about') }}</div>
      <div
        class="flex flex-col rounded-lg p-2 gap-2"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-1 shadow-3'"
      >
        <div class="flex justify-between px-1">
          <div>{{ t('settings.version') }}</div>
          <div>2.2</div>
        </div>
        <div
          class="h-0.5"
          :class="$q.dark.isActive ? 'bg-grey-7' : 'bg-grey-3'"
        ></div>
        <div class="flex justify-between px-1">
          <div>{{ t('settings.license') }}</div>
          <a
            class="no-underline"
            :class="$q.dark.isActive ? 'text-grey-3' : 'text-grey-7'"
            href="https://meizuno.github.io"
          >
            © Yurii Myronov, 2025
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue'
import { useQuasar } from 'quasar'
import { useSettingsStore } from 'src/stores/settings'
import { useNotify } from 'src/composables/useNotify'
import { storeToRefs } from 'pinia'
import { useTreeStore } from 'src/stores/tree'
import urlDocs from 'src/assets/url-docs.md?raw'
import { marked } from 'marked'
import 'github-markdown-css/github-markdown.css'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const pageTitle = inject('pageTitle') as Ref<string>
pageTitle.value = t('layout.settings')

const q = useQuasar()
const { error } = useNotify()
const { storeUrl } = storeToRefs(useSettingsStore())
const { setStoreUrl } = useSettingsStore()
const { setTree, keepTree } = useTreeStore()

const isValidUrl = (url: string) => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

const handleInnerClick = async () => {
  q.dialog({
    message: await marked(urlDocs),
    class: 'markdown-body h-[70%] w-fit',
    html: true,
  })
}

const addStoreUrl = () => {
  q.dialog({
    title: t('dialog.storeURL'),
    message: t('dialog.storeURLMessage'),
    cancel: true,
    persistent: true,
    prompt: {
      model: storeUrl.value,
      type: 'text',
    },
  }).onOk((data) => {
    if (!data) {
      setStoreUrl('')
    } else {
      if (!isValidUrl(data)) {
        error(t('notify.invalidURL'))
      } else {
        setStoreUrl(data)
      }
    }
  })
}

const downloadTree = () => {
  q.dialog({
    title: t('dialog.download'),
    message: t('dialog.downloadMessage'),
    cancel: true,
    persistent: true,
  }).onOk(() => {
    setTree().catch(() => {
      console.error('Failed to download tree')
    })
  })
}

const uploadTree = () => {
  q.dialog({
    title: t('dialog.upload'),
    message: t('dialog.uploadMessage'),
    cancel: true,
    persistent: true,
  }).onOk(() => {
    keepTree().catch(() => {
      console.error('Failed to upload tree')
    })
  })
}
</script>
