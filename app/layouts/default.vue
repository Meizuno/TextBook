<template>
  <UContainer
    class="h-full relative grid grid-rows-[auto_1fr] gap-2 overflow-x-hidden py-2"
  >
    <header
      class="min-h-0 flex flex-col items-center justify-center font-bold text-2xl md:mb-2"
    >
      <span class="hidden md:inline md:py-2">Text Book</span>
      <USeparator class="hidden md:inline" />
    </header>
    <main class="flex-1 relative flex flex-col overflow-auto px-4">
      <div class="flex-1 flex flex-col gap-2 pb-20">
        <slot />
      </div>
    </main>
    <div
      class="absolute w-full bottom-6 px-4 flex justify-between items-center"
    >
      <div class="relative w-10.5 h-10.5">
        <Transition name="back">
          <div v-if="$route.name !== 'index'">
            <UButton
              icon="i-iconamoon-arrow-left-2"
              size="xl"
              class="glass rounded-full p-2.5"
              :ui="{
                leadingIcon: 'size-5 text-default',
              }"
              to="/"
            />
          </div>
          <div v-else>
            <UButton
              icon="i-mage-reload"
              size="xl"
              class="glass rounded-full p-2.5"
              :ui="{
                leadingIcon: 'size-5 text-default',
              }"
              @click="refresh"
            />
          </div>
        </Transition>
      </div>
      <UNavigationMenu :items="items" />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const storage = localStorage.getItem("storage") || "local";
const { createTree } = useTree();
const { setLoading } = useAppState();

const refresh = async () => {
  setLoading(true);
  if (storage === "github") {
    const { saveAllItems } = useGitHub();
    await saveAllItems();
  }

  await createTree();
  setLoading(false);
};

const items = ref<NavigationMenuItem[]>([
  {
    icon: "i-fluent-text-bullet-list-tree-16-filled",
    to: "/",
  },
  {
    icon: "i-hugeicons-file-add",
    to: "/add",
  },
  {
    icon: "i-material-symbols-settings-rounded",
    to: "/settings",
  },
]);
</script>
