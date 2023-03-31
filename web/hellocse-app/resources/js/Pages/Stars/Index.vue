<template>
    <AppLayout title="Dashboard">
      <template #header>
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Profile Browser
        </h2>
      </template>
      <div class="py-12 lg:flex lg:justify-center border">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 lg:flex lg:space-x-4">
          <div class="w-full lg:w-1/2 rounded-lg lg:rounded-l-lg overflow-hidden">
            <div
              v-for="star in stars"
              :key="star.id"
              @click="selectedStar = star"
              class="bg-gray-200 divide-gray-400 py-4 px-6 cursor-pointer border-b border-gray-400"
              :class="{ 'bg-white font-bold': star === selectedStar }"
            >
              <span :class="{ 'border-r border-transparent': star !== selectedStar }">
                {{ star.first_name }} {{ star.last_name }}
              </span>
            </div>
          </div>
          <div class="w-full lg:w-1/2" v-if="selectedStar">
            <Details :star="selectedStar" />
          </div>
        </div>
      </div>
    </AppLayout>
</template>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
import Details from './Details.vue';  
export default {
    created() {
        if (this.stars.length > 0) {
            this.selectedStar = this.stars[0];
        }
    },
    data() {
        return {
            selectedStar: null,
        };
    },
    props: {
        stars: Array,
    },
    components: {
        AppLayout,
        Details,
    },
};
</script>

<style lang="css" scoped>
.border-r {
    border-right-color: transparent;
}
</style>