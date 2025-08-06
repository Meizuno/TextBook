<template>
  <UContainer class="h-full grid grid-rows-[auto_1fr] overflow-x-hidden gap-2">
    <header
      class="min-h-0 flex flex-col items-center justify-center font-bold text-2xl md:mb-2"
    >
      <span class="hidden md:inline md:py-2">Text Book</span>
      <USeparator class="hidden md:inline" />
    </header>
    <main class="flex-1 relative flex flex-col overflow-auto px-4">
      <slot />
    </main>
  </UContainer>
</template>
