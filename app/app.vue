<template>
  <UApp
    :toaster="{
      position: 'bottom-right',
      duration: 1500,
      progress: false,
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
