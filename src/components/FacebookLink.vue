<template>
  <q-btn
    v-if="canLaunchApp"
    icon="fa-brands fa-facebook"
    label="fb profile"
    @click="
      AppLauncher.openUrl({
        url: `fb://facewebmodal/f?href=${fb_profile}`,
      })
    "
    target="_blank"
    push
    rounded
    color="white"
    text-color="primary"
  />
  <q-btn
    v-else
    icon="fa-brands fa-facebook"
    label="fb profile"
    :href="fb_profile"
    target="_blank"
    push
    rounded
    color="white"
    text-color="primary"
  />
</template>

<script lang="ts" setup>
import { AppLauncher } from '@capacitor/app-launcher';
import { Platform } from 'quasar';

defineProps<{
  fb_profile: string;
}>();
const canLaunchApp =
  // (
  //   await AppLauncher.canOpenUrl({
  //     url: 'fb',
  //   })
  // ).value &&
  Platform.is.android;
</script>
