<template>
  <q-page padding>
    <div id="fake-searchbar">
      <router-link
        :to="{ name: 'search', query: { init_query: query } }"
        class="fake-search-input"
        >{{ query }}</router-link
      >
      <router-link to="/search" class="fake-search-reset"
        ><q-icon name="fa-solid fa-close"
      /></router-link>
    </div>
    <!-- <h1 class="text-h5 q-my-sm">Search results for "{{ query }}"</h1> -->
    <q-list>
      <q-item
        v-for="result of results"
        :key="result.id"
        clickable
        :to="`/${result.id}`"
      >
        <q-item-section avatar>
          <q-avatar square>
            <avatar-placeholder v-if="result.noPhoto" />
            <img
              v-else
              :alt="'photo of ' + result.shortName"
              :src="`/photos/${result.id}.webp`"
            />
          </q-avatar>
        </q-item-section>
        <q-item-section
          ><q-item-label>{{ result.fullName }}</q-item-label
          ><q-item-label caption
            >matches:
            {{
              result.matchedFields
                .map((x) => decamelize(x, { separator: ' ' }))
                .join(', ')
            }}</q-item-label
          ></q-item-section
        >
      </q-item>
      <q-item v-if="!results.length"
        ><q-item-section avatar>
          <q-icon name="fa-regular fa-face-meh" />
        </q-item-section>
        <q-item-section>No result found.</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
import AvatarPlaceholder from 'components/AvatarPlaceholder.vue';
import { computed } from 'vue';
import decamelize from 'decamelize';
import students from 'assets/students.json';
import { searchStudents } from 'components/search';

const props = defineProps<{
  query: string;
}>();

const results = computed(() =>
  searchStudents(props.query).map((x) => {
    const student = students[x.id - 1];
    const matchedFields = [
      ...Object.values(x.match).reduce((fieldSet, fieldNames) => {
        for (const fieldName of fieldNames) {
          fieldSet.add(fieldName);
        }
        return fieldSet;
      }, new Set<string>()),
    ];
    return {
      id: student.id,
      noPhoto: student.noPhoto,
      fullName: student.fullName,
      shortName: student.shortName,
      matchedFields,
    };
  })
);
</script>

<style lang="scss" scoped>
#fake-searchbar {
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px 4px 0 0;
  height: 56px;
  padding: 0 12px;
  display: flex;
  align-items: stretch;
  .fake-search-input {
    color: rgba(0, 0, 0, 0.87);
    padding: 6px 0;
    flex: 1 0 auto;
  }
  .fake-search-reset {
    color: rgba(0, 0, 0, 0.54);
    font-size: 24px;
    padding-left: 12px;
  }
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
}
h1 {
  word-break: break-all;
}
</style>
