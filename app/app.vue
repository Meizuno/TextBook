<template>
  <UApp
    :toaster="{
      position: 'top-right',
      duration: 1500,
      progress: false,
    }"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
