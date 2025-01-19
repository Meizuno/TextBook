<template>
  <q-page>
    <create-file
      v-if="action === 'create'"
    ></create-file>
    <update-file
      v-else-if="action === 'update'"
      :path="optionalPath"
    ></update-file>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CreateFile from 'src/components/File/CreateFile.vue';
import UpdateFile from 'src/components/File/UpdateFile.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const optionalPath = ref(route.params.path as string || '')
const action = ref('')

watch(() => route.params.action as string, (newValue) => {
  action.value = newValue
}, { immediate: true });

</script>