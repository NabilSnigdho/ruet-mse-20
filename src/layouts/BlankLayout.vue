<template>
  <q-layout view="hHh Lpr fFf">
    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

    <!-- (Optional) The Footer -->
    <q-footer class="text-black bg-grey-4">
      <q-toolbar>
        <q-btn
          flat
          icon="fa-solid fa-arrow-left"
          label="Back"
          @click="closeProfile"
        />
        <q-btn
          class="q-ml-auto"
          flat
          icon-right="fa-solid fa-home"
          label="Home"
          to="/"
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { RouterView } from 'vue-router';

const router = useRouter();
const closeProfile = () => {
  router.back();
};
</script>
