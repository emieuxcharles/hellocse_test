<template>
  <div class="max-w-3xl mx-auto py-8">
    <h1 class="text-2xl font-bold mb-4">Ajouter une star</h1>
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="submit">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="first_name">Prénom</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="first_name" type="text" v-model="form.first_name" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="last_name">Nom</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="last_name" type="text" v-model="form.last_name" required>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="image">Image</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="image" type="file" ref="image" @change="onImageChange">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="description">Description</label>
        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" v-model="form.description"></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Ajouter</button>
      </div>
    </form>
  </div>
</template>


<script>
  import { useForm } from '@inertiajs/inertia-vue3'
  
  export default {
    setup() {
      const form = useForm({
        first_name: '',
        last_name: '',
        image: null,
        description: '',
      })
  
      function onImageChange(event) {
        form.image = event.target.files[0]
      }
      function submit() {
        form.post(route('stars.store'), {
          onSuccess: () => {
            form.reset();
            this.$inertia.visit(route('stars.index'));
          },
        });
      }
      return { form, onImageChange, submit }
    },
  }
</script>  