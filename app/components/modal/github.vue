<template>
  <UModal v-model:open="open" :close="false" :dismissible="false">
    <template #body>
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormField label="GitHub Owner" name="owner" required>
          <UInput v-model="state.owner" />
        </UFormField>

        <UFormField label="GitHub Repository" name="repo" required>
          <UInput v-model="state.repo" />
        </UFormField>

        <UFormField label="GitHub Token" name="apiToken" required>
          <UInput
            v-model="state.apiToken"
            :type="showToken ? 'text' : 'password'"
            :ui="{ trailing: 'pe-1' }"
          >
            <template #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                :icon="showToken ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                :aria-label="showToken ? 'Hide token' : 'Show token'"
                :aria-pressed="showToken"
                aria-controls="token"
                @click="showToken = !showToken"
              />
            </template>
          </UInput>
        </UFormField>

        <div class="flex gap-2">
          <UButton label="Save" type="submit" />
          <UButton color="neutral" label="Cancel" @click="emit('cancel')" />
        </div>
      </UForm>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { FormError } from "@nuxt/ui";

interface State {
  owner: string;
  repo: string;
  apiToken: string;
}

const validate = (state: State): FormError[] => {
  const errors = [];
  if (!state.owner)
    errors.push({ name: "owner", message: "Owner is required" });
  if (!state.repo)
    errors.push({ name: "repo", message: "Repository is required" });
  if (!state.apiToken)
    errors.push({ name: "apiToken", message: "Token is required" });
  return errors;
};

const open = defineModel<boolean>("open", { default: false });
const emit = defineEmits(["save", "cancel"]);

const showToken = ref(false);
const state = reactive<State>({
  owner: localStorage.getItem("githubOwner") || "",
  repo: localStorage.getItem("githubRepo") || "",
  apiToken: localStorage.getItem("githubApiToken") || "",
});

const onSubmit = () => {
  emit("save", state.owner, state.repo, state.apiToken);
  open.value = false;
};
</script>
