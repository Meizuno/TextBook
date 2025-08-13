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
      <ModalLoad />
    </NuxtLayout>
  </UApp>
</template>
