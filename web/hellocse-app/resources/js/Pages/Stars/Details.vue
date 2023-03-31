<template>
    <div class="grid grid-cols-2 gap-4">
      <div>
        <img :src="`/storage/${star.image.replace('public/', '')}`" class="max-h-full w-full object-cover">
      </div>
      <div>
        <h3 class="text-3xl font-bold">{{ star.first_name }} {{ star.last_name }}</h3>
        <p class="text-gray-500 mb-4">{{ star.description }}</p>
        <div class="overflow-y-auto h-80">
          <p class="text-gray-500">{{ star.description }}</p>
        </div>
      </div>
    </div>
</template>
  
  
  <script>
  export default {
    props: {
      star: Object,
    },
  };
  </script>
  