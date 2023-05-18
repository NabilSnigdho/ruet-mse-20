<template>
  <q-page padding class="row justify-center items-center">
    <q-btn
      href="https://drive.google.com/file/d/1W4Ywfh1POvxHZGL3zWb_WeWH2_0VJgC0/view?usp=sharing"
      @click="
        AppLauncher.openUrl({
          url: 'com.google.android.apps.docs.DRIVE_OPEN://https://drive.google.com/file/d/1W4Ywfh1POvxHZGL3zWb_WeWH2_0VJgC0/view?usp=sharing',
        })
      "
      label="Update App"
      icon="fa-solid fa-sync-alt"
      target="_blank"
    />
  </q-page>
</template>

<script lang="ts" setup>
import { AppLauncher } from '@capacitor/app-launcher';
</script>
