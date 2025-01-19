<template>
  <q-page>
    <create-dir v-if="action === 'create'" >
    </create-dir>
    <update-dir
      v-else-if="action === 'update'"
      :name="name"
      :path="path"
    >
    </update-dir>
  </q-page>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import CreateDir from 'src/components/Folder/CreateDir.vue';
import UpdateDir from 'src/components/Folder/UpdateDir.vue';

const route = useRoute();

const path = ref('')
const action = ref('')
const name = ref('')

watch(() => route.params.action as string, (newValue) => {
  action.value = newValue
}, { immediate: true });

watch(() => route.params.path as string, (newValue) => {
  path.value = newValue
  name.value = path.value.split('/').pop()?.split('.')[0] || ''
}, { immediate: true });

</script>
