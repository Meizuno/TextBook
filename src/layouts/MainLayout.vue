<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated class="layout">
      <q-toolbar>
        <q-toolbar-title class="text-center">Text Book</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>

    <q-footer elevated class="layout">
      <q-tabs no-caps v-model="activeTab" active-color="primary" indicator-color="transparent">
        <q-tab name="home" icon="home" @click="navigate('home')" />
        <q-tab name="active" icon="visibility" @click="navigate('active')" />
        <q-tab name="file" icon="note_add" @click="navigate('file', { action: 'create' })" />
        <q-tab name="folder" icon="create_new_folder" @click="navigate('folder', { action: 'create', path: '' })" />
        <q-tab name="settings" icon="tune" @click="navigate('settings')"/>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useNavigation } from 'src/composables/useNavigation';
import { useAnimationStore } from 'src/stores/animation';
import { storeToRefs } from 'pinia';

const route = useRoute();
const activeTab = ref(route.name as string);

watch(() => route.name, (newValue) => {
  activeTab.value = newValue as string;
});

const { transitionName } = storeToRefs(useAnimationStore());
const { navigate } = useNavigation();


</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-leave-active,
.slide-right-enter-active {
  transition: transform 0.2s ease-in-out;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}

.slide-left-leave-to,
.slide-right-enter-from {
  transform: translateX(-100%);
}
</style>
