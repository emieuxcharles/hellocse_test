<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <img :src="`/storage/${star.image.replace('public/', '')}`" class="max-h-full w-full object-cover">
    </div>
    <div>
      <h3 class="text-3xl font-bold">{{ star.first_name }} {{ star.last_name }}</h3>
      <!-- <p class="text-gray-500 mb-4">{{ star.description }}</p> -->
      <div class="overflow-y-auto h-80">
        <p class="text-gray-500">{{ star.description }}</p>
      </div>
      <div class="flex mt-4">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4" @click="$inertia.visit(route('stars.edit', { star: star.id }))">
          Edit
        </button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="deleteStar">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      star: Object,
    },
    methods: {
      deleteStar() {
        this.$inertia.delete(route('stars.destroy', { star: this.star.id }));
        // if (confirm('Delete star ?')) {
        // }
      },
    },
  };
</script>