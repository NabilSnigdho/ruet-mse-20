import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      {
        path: '20130:id(0[1-9]|[1-5]\\d|60)',
        component: () => import('pages/StudentProfile.vue'),
        props: true,
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('pages/SearchStudents.vue'),
      },
      {
        path: '/search/results/:query',
        name: 'searchResult',
        component: () => import('pages/SearchResults.vue'),
        props: true,
      },
      {
        path: '/about/dev',
        component: () => import('pages/AboutDeveloper.vue'),
      },
      {
        path: '/update-app',
        component: () => import('pages/UpdateApp.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
