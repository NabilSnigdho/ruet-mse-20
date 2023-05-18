<template>
  <q-layout view="hHh lpr lFf">
    <q-header class="text-black bg-grey-4" elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="fa-solid fa-bars"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>RUET MSE-20 Family</q-toolbar-title>
        <q-btn flat round dense icon="fa-solid fa-search" to="/search" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-home" />
          </q-item-section>

          <q-item-section>
            <q-item-label> Home </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/about/dev">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-code" />
          </q-item-section>

          <q-item-section>
            <q-item-label> About Developer </q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/update-app">
          <q-item-section avatar>
            <q-icon name="fa-solid fa-sync-alt" />
          </q-item-section>

          <q-item-section>
            <q-item-label> Update App </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link of essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import EssentialLink from 'components/EssentialLink.vue';

const essentialLinks = [
  {
    title: 'RUET',
    caption: 'www.ruet.ac.bd',
    icon: 'fa-solid fa-book-open',
    link: 'https://www.ruet.ac.bd',
  },
  {
    title: 'MSE Department',
    caption: 'mse.ruet.ac.bd',
    icon: 'fa-solid fa-square',
    link: 'https://www.mse.ruet.ac.bd',
  },
];
const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
