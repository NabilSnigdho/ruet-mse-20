<template>
  <q-page class="row items-center justify-evenly">
    <students-list :students="students" />
  </q-page>
</template>

<script lang="ts" setup>
import StudentsList from 'components/StudentsList.vue';
import students from '../assets/students.json';
</script>
