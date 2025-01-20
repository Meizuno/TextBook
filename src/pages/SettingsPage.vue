<template>
  <q-page class="q-px-md q-py-lg">
    <div class="q-mb-lg">
      <div class="px-2 text-grey-7">Advanced</div>
      <q-btn 
        class="w-full rounded-lg" 
        :disable="!network.connected" 
        :color="$q.dark.isActive ? 'grey-9' : 'grey-1'"
        :text-color="$q.dark.isActive ? 'grey-1' : 'grey-9'"
        padding="sm" 
        no-caps 
        @click="addStoreUrl"
      >
        <div class="row items-center w-full">
          <div class="flex-1 row justify-start items-center">
            <div>Store URL</div>
            <q-btn @click.stop="handleInnerClick" flat icon="help_outline" color="grey-7" round size="sm" />
          </div>

          <q-banner dense rounded class="flex-1 text-left p-1"
            :class="$q.dark.isActive ? 'bg-dark' : 'bg-grey-3'"
          >
            <div class="text-ellipsis overflow-x-hidden">
              {{ storeUrl }}
            </div>
          </q-banner>
        </div>
      </q-btn>
    </div>
    <div>
      <div class="px-2 text-grey-7">About</div>
      <div
        class="flex flex-col rounded-lg p-2 gap-2"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-1 shadow-3'"
      >
        <div class="flex justify-between px-1">
          <div>Version</div>
          <div>1.0</div>
        </div>
        <div class="h-0.5" :class="$q.dark.isActive ? 'bg-grey-7' : 'bg-grey-3'"></div>
        <div class="flex justify-between px-1">
          <div>License</div>
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
  </q-page>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar'
import { useSettingsStore } from 'src/stores/settings';
import { useNetworkStore } from 'src/stores/network';
import { useNotify } from 'src/composables/useNotify';
import { storeToRefs } from 'pinia';
import urlDocs from 'src/assets/url-docs.md?raw';
import { marked } from 'marked';
import 'github-markdown-css/github-markdown.css';

const q = useQuasar()
const { error } = useNotify()
const { storeUrl } = storeToRefs(useSettingsStore())
const { setStoreUrl } = useSettingsStore()
const { network } = storeToRefs(useNetworkStore())

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

const handleInnerClick = async () => {
  q.dialog({
    message: await marked(urlDocs),
    class: 'markdown-body',
    html: true,
  })
}

const addStoreUrl = () => {
  q.dialog({
    title: 'Store URL',
    message: 'Please enter the store URL to your server with files.',
    cancel: true,
    persistent: true,
    prompt: {
      model: '',
      type: 'text'
    },
  }).onOk(data => {
    if (!data) {
      setStoreUrl('')
    }
    else {
      if (!isValidUrl(data)) {
        error('Invalid URL!')
      }
      else {
        setStoreUrl(data)
      }
    }
  })
}
</script>
