import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/MenuPage.vue'),
        name: 'home',
      },
      {
        path: 'active',
        component: () => import('pages/SelectedPage.vue'),
        name: 'active',
      },
      {
        path: 'folder',
        component: () => import('pages/FolderPage.vue'),
        name: 'folder',
      },
      {
        path: 'file',
        component: () => import('pages/FilePage.vue'),
        name: 'file',
      },
      {
        path: 'settings',
        component: () => import('pages/SettingsPage.vue'),
        name: 'settings',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
