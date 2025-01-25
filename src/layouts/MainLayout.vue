<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="layout">
      <q-toolbar>
        <q-toolbar-title class="text-center">{{ pageTitle }}</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- Render if mobile -->
    <q-page-container v-if="$q.screen.lt.lg">
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component
            :is="Component"
            @touchstart="onTouchStart"
            @touchend="onTouchEnd"
          />
        </transition>
      </router-view>
    </q-page-container>

    <!-- Render if desktop -->
    <q-page-container v-else class="h-screen overflow-hidden">
      <desktop-page />
    </q-page-container>

    <!-- Render if mobile -->
    <q-footer elevated class="layout" v-if="$q.screen.lt.lg">
      <q-tabs
        no-caps
        v-model="activeTab"
        active-color="primary"
        indicator-color="transparent"
      >
        <q-tab name="home" icon="home" @click="navigate('home')" />
        <q-tab name="active" icon="visibility" @click="navigate('active')" />
        <q-tab
          name="folder"
          icon="create_new_folder"
          @click="navigate('folder')"
        />
        <q-tab name="file" icon="note_add" @click="navigate('file')" />
        <q-tab name="settings" icon="tune" @click="navigate('settings')" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useNavigation } from 'src/composables/useNavigation'
import { useAnimationStore } from 'src/stores/animation'
import { storeToRefs } from 'pinia'

import DesktopPage from 'src/pages/DesktopPage.vue'

const route = useRoute()
const activeTab = ref(route.name as string)

watch(
  () => route.name,
  (newValue) => {
    activeTab.value = newValue as string
  },
)

const { transitionName } = storeToRefs(useAnimationStore())
const { navigate, swipeRight, swipeLeft } = useNavigation()

const pageTitle = ref('Text Book')
provide('pageTitle', pageTitle)

const touchStartX = ref(0)

const onTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.changedTouches[0]?.screenX || 0
}

const onTouchEnd = async (event: TouchEvent) => {
  const touchEndX = event.changedTouches[0]?.screenX || 0
  const swipeThreshold = 100

  if (touchStartX.value - touchEndX > swipeThreshold) {
    await swipeLeft()
  } else if (touchEndX - touchStartX.value > swipeThreshold) {
    await swipeRight()
  }
}
</script>
