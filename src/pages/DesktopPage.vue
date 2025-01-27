<template>
  <div class="max-w-[1440px] h-full mx-auto p-8 overflow-hidden box-border">
    <div class="flex shadow-3 h-full overflow-hidden box-border w-full">
      <div class="flex-1 overflow-auto">
        <div class="layout text-lg text-center py-2 m-2 shadow-3">
          Navigation
        </div>
        <menu-view class="h-96" />
      </div>
      <div class="w-0.5 h-full dark:bg-gray-800 bg-gray-300 rounded"></div>
      <div class="flex-1 overflow-auto">
        <div class="layout text-lg text-center py-2 m-2 shadow-3 mb-2">
          Selected file
        </div>
        <selected-view class="h-96" />
      </div>
      <div class="w-0.5 h-full dark:bg-gray-800 bg-gray-300 rounded"></div>
      <div class="flex-1 overflow-auto w-full h-full">
        <div class="flex flex-col no-wrap">
          <div class="h-1/3 overflow-auto">
            <div
              class="layout text-lg flex justify-between items-center p-2 m-2 shadow-3 mb-2"
            >
              <div>
                {{
                  selectedNode.type === 'directory'
                    ? 'Edit folder'
                    : 'Create folder'
                }}
              </div>
              <q-btn
                :disable="selectedNode === null"
                flat
                color="primary"
                @click="unselectNode()"
                label="Unselect"
              />
            </div>
            <folder-view />
          </div>
          <div class="w-full h-0.5 dark:bg-gray-800 bg-gray-300 rounded"></div>
          <div class="h-1/3 overflow-auto">
            <div
              class="layout text-lg flex justify-between items-center p-2 m-2 shadow-3 mb-2"
            >
              <div>
                {{ selectedNode.type === 'file' ? 'Edit file' : 'Create file' }}
              </div>
              <q-btn
                :disable="selectedNode === null"
                flat
                color="primary"
                @click="unselectNode()"
                label="Unselect"
              />
            </div>
            <file-view />
          </div>
          <div class="w-full h-0.5 dark:bg-gray-800 bg-gray-300 rounded"></div>
          <div class="h-1/3 overflow-auto">
            <div class="layout text-lg text-center py-2 m-2 shadow-3 mb-2">
              Settings
            </div>
            <settings-view />
          </div>
        </div>
      </div>
    </div>
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

const { selectedNode } = storeToRefs(useNodeStore())
const { unselectNode } = useNodeStore()
</script>
