<template>
  <q-page padding>
    <q-form @submit="onSubmit">
      <q-input
        :model-value="query"
        @update:modelValue="(value: string) => query = value"
        type="search"
        placeholder="Search"
        filled
        autofocus
        ><template v-slot:append>
          <q-icon v-if="query === ''" name="fa-solid fa-search" />
          <q-icon
            v-else
            name="fa-solid fa-close"
            class="cursor-pointer"
            @click="query = ''"
          /> </template
      ></q-input>
    </q-form>
    <q-list bordered separator>
      <q-item
        v-for="suggestion of suggestions"
        :key="suggestion"
        clickable
        :to="{ name: 'searchResult', params: { query: suggestion } }"
      >
        <q-item-section>{{ suggestion }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { miniSearch } from 'components/search';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute();
const query = ref(
  typeof route.query['init_query'] == 'string' ? route.query['init_query'] : ''
);
const suggestions = computed(() => {
  return query.value === ''
    ? []
    : [
        ...miniSearch
          .autoSuggest(query.value)
          .reduce<Set<string>>((acc, { terms }) => {
            for (const term of terms) {
              acc.add(term);
            }
            return acc;
          }, new Set<string>()),
      ];
});
const router = useRouter();
const onSubmit = () => {
  router.push({ name: 'searchResult', params: { query: query.value } });
};
</script>
