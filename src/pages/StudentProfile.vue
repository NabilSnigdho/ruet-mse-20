<template>
  <q-page padding v-touch-swipe.mouse.horizontal="handleSwipe">
    <div class="row q-col-gutter-x-md">
      <div id="student-avatar" class="col-12 col-md-auto">
        <avatar-placeholder
          v-if="student.noPhoto"
          className="block q-mx-auto frame"
          width="300"
          height="300"
        />
        <img
          v-else
          :alt="student.fullName"
          :title="student.fullName"
          :src="`/photos/${student.id}.webp`"
          class="frame aspect-square block q-mx-auto"
        />
      </div>
      <div class="col-12 col-md">
        <h1 class="text-h4 text-center">
          {{ student.fullName }}
          <span v-if="student.nickNames"
            >({{ student.nickNames.join(', ') }})</span
          >
        </h1>
        <div v-if="student.fb_profile" class="q-ma-md text-center">
          <Suspense>
            <facebook-link :fb_profile="student.fb_profile" />
            <template #fallback> Loading... </template>
          </Suspense>
        </div>
        <q-separator />
        <q-list padding>
          <q-item>
            <q-item-section avatar>
              <q-icon name="fa-solid fa-id-badge" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Student ID</q-item-label>
              <q-item-label>{{ student.id }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator v-if="student.collegeName" spaced inset="item" />
          <q-item v-if="student.collegeName">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-building-columns" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>College</q-item-label>
              <q-item-label>{{ student.collegeName }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator v-if="student.homeDistrict" spaced inset="item" />
          <q-item v-if="student.homeDistrict">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-house-chimney" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Home District</q-item-label>
              <q-item-label>
                <router-link
                  :to="`/search/results/${student.homeDistrict}`"
                  class="text-black"
                  >{{ student.homeDistrict }}</router-link
                >
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-separator v-if="student.phone" spaced inset="item" />
          <q-item v-if="student.phone">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-phone" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Phone Number</q-item-label>
              <q-item-label v-if="Array.isArray(student.phone)"
                ><template v-for="(phone, index) in student.phone" :key="phone"
                  ><template v-if="index > 0">, </template
                  ><a
                    :href="`tel:${/\d{11}/.test(phone) ? '+88' : ''}${phone}`"
                    class="text-black"
                    >{{ phone }}</a
                  ></template
                >
              </q-item-label>
              <q-item-label v-else
                ><a
                  :href="`tel:${/\d{11}/.test(student.phone) ? '+88' : ''}${
                    student.phone
                  }`"
                  class="text-black"
                  >{{ student.phone }}</a
                ></q-item-label
              >
            </q-item-section>
          </q-item>
          <q-separator v-if="student.email" spaced inset="item" />
          <q-item v-if="student.email">
            <q-item-section avatar>
              <q-icon name="fa-solid fa-envelope" />
            </q-item-section>
            <q-item-section>
              <q-item-label caption>Email Address</q-item-label>
              <q-item-label>
                <a :href="`mailto:${student.email}`" class="text-black">{{
                  student.email
                }}</a></q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import AvatarPlaceholder from '../components/AvatarPlaceholder.vue';
import FacebookLink from '../components/FacebookLink.vue';
import students from '../assets/students.json';
import { Student } from 'components/models';
import { useRouter } from 'vue-router';

const props = defineProps<{
  id: string;
}>();
const index = computed(() => parseInt(props.id) - 1);
const student = computed<Student>(() => students[index.value]);
const router = useRouter();
const handleSwipe = ({ direction }: { direction: 'left' | 'right' }) => {
  router.replace({
    path:
      '/2013' +
      `${
        ((direction === 'left' ? index.value + 1 : index.value + 59) % 60) + 1
      }`.padStart(3, '0'),
  });
};
</script>

<style lang="scss" scoped>
.frame {
  border: 2px solid black;
}
dd {
  margin-inline-start: 26px;
}
@media (max-width: $breakpoint-sm-max) {
  #student-avatar {
    padding-top: map-get($space-lg, 'x');
  }
  .frame {
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
  }
}
</style>
