<template>
  <div class="h-full p-4">
    <q-splitter v-model="splitter1" class="h-full shadow-3">
      <template v-slot:before>
        <div class="layout text-lg text-center py-2 shadow-3 m-2">
          {{ t('desktop.navigation') }}
        </div>
        <menu-view />
      </template>

      <template v-slot:after>
        <q-splitter v-model="splitter2" class="h-full">
          <template v-slot:before>
            <div class="layout text-lg text-center py-2 shadow-3 mb-2 m-2">
              {{ t('desktop.selectedFile') }}
            </div>
            <selected-view class="h-96" />
          </template>

          <template v-slot:after>
            <q-splitter v-model="splitter3" horizontal class="h-full">
              <template v-slot:before>
                <div
                  class="layout text-lg flex justify-between items-center p-2 shadow-3 m-2"
                >
                  <div>
                    {{
                      selectedNode.type === 'directory'
                        ? t('desktop.editFolder')
                        : t('desktop.createFolder')
                    }}
                  </div>
                  <q-btn
                    :disable="selectedNode === null"
                    flat
                    color="primary"
                    @click="unselectNode()"
                    :label="t('desktop.unselect')"
                  />
                </div>
                <folder-view />
              </template>

              <template v-slot:after>
                <q-splitter v-model="splitter4" horizontal>
                  <template v-slot:before>
                    <div>
                      <div
                        class="layout text-lg flex justify-between items-center p-2 shadow-3 m-2"
                      >
                        <div>
                          {{
                            selectedNode.type === 'file'
                              ? t('desktop.editFile')
                              : t('desktop.createFile')
                          }}
                        </div>
                        <q-btn
                          :disable="selectedNode === null"
                          flat
                          color="primary"
                          @click="unselectNode()"
                          :label="t('desktop.unselect')"
                        />
                      </div>
                      <file-view />
                    </div>
                  </template>

                  <template v-slot:after>
                    <div
                      class="layout text-lg text-center py-2 m-2 shadow-3 m-2"
                    >
                      {{ t('desktop.settings') }}
                    </div>
                    <settings-view />
                  </template>
                </q-splitter>
              </template>
            </q-splitter>
          </template>
        </q-splitter>
      </template>
    </q-splitter>
  </div>
</template>

<script setup lang="ts">
import MenuView from 'src/components/views/MenuView.vue'
import SelectedView from 'src/components/views/SelectedView.vue'
import FolderView from 'src/components/views/FolderView.vue'
import SettingsView from 'src/components/views/SettingsView.vue'
import FileView from 'src/components/views/FileView.vue'

import { useNodeStore } from 'src/stores/node'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { selectedNode } = storeToRefs(useNodeStore())
const { unselectNode } = useNodeStore()

const splitter1 = ref(30)
const splitter2 = ref(60)
const splitter3 = ref(33)
const splitter4 = ref(55)
</script>
