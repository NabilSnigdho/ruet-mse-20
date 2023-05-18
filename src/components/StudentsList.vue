<template>
  <div id="grid-container" class="q-pa-sm">
    <router-link
      v-for="student of students"
      :key="student.id"
      :to="`/${student.id}`"
      class="grid-item text-black no-underline rounded-borders"
    >
      <avatar-placeholder v-if="student.noPhoto" className="block" />
      <img
        v-else
        :alt="'photo of ' + student.shortName"
        :src="`/photos/${student.id}.webp`"
        class="block full-width"
        loading="lazy"
      />
      <div class="text-center text-caption q-pa-xs">
        {{ student.id % 100 }} - {{ student.shortName }}
      </div>
    </router-link>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import AvatarPlaceholder from './AvatarPlaceholder.vue';
import { Student } from './models';

defineProps<{
  students: Student[];
}>();
</script>

<style lang="scss" scoped>
#grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  width: 100%;
  gap: 5px;
}
.grid-item {
  outline: 2px solid #b0bec5;
}
.grid-item > img {
  aspect-ratio: 1;
}
</style>
