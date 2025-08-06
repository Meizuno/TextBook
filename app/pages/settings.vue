<template>
  <div class="flex flex-col gap-4 py-2">
    <UCard variant="subtle">
      <div class="flex items-center justify-between p-2">
        <span class="font-bold">Storage</span>
        <USelect v-model="value" :items="items" :icon="icon" class="w-1/2" />
      </div>
    </UCard>

    <UCard variant="subtle">
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between p-2">
          <span class="text-md font-bold">Version</span>
          <span class="text-md font-bold">3.0</span>
        </div>
        <USeparator />
        <div class="flex items-center justify-between p-2">
          <span class="text-md font-bold">Licence</span>
          <ULink
            to="https://meizuno.github.io"
          >
            © Yurii Myronov, 2025
          </ULink>
        </div>
      </div>
    </UCard>

    <ModalGithub v-model:open="githubModal" @save="saveGitHub" @cancel="cancel" />
  </div>
</template>

<script setup lang="ts">
const items = ref([
  {
    label: "Local",
    value: "local",
    icon: "i-mdi-local",
  },
  {
    label: "GitHub",
    value: "github",
    icon: "i-mdi-github",
  },
]);

const valueFromStorage = localStorage.getItem("storage") || "local";
const value = ref(valueFromStorage);
const previousValue = ref(valueFromStorage);
const icon = computed(
  () => items.value.find((item) => item.value === value.value)?.icon
);

const githubModal = ref(false);

watch(value, (newValue, oldValue) => {
  previousValue.value = oldValue;
  if (newValue === "github") {
    githubModal.value = true;
  } else {
    localStorage.setItem("storage", value.value);
  }
});

const saveGitHub = (owner: string, repo: string, apiToken: string) => {
  localStorage.setItem("storage", value.value);
  localStorage.setItem("githubOwner", owner);
  localStorage.setItem("githubRepo", repo);
  localStorage.setItem("githubApiToken", apiToken);
  githubModal.value = false;
};

const cancel = () => {
  value.value = previousValue.value;
  githubModal.value = false;
};
</script>
