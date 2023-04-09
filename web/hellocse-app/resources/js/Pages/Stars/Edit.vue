<template>
  <div class="flex justify-center py-4">
    <div class="max-w-xl">
      <h1 class="text-3xl font-bold mb-4">Modifier la star</h1>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="first_name">Prénom</label>
          <input class="border rounded-lg py-2 px-3 w-full" type="text" id="first_name" name="first_name" v-model="form.first_name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="last_name">Nom</label>
          <input class="border rounded-lg py-2 px-3 w-full" type="text" id="last_name" name="last_name" v-model="form.last_name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="image">Image</label>
          <input class="border rounded-lg py-2 px-3 w-full" type="file" id="image" name="image" ref="image" @change="onImageChange">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="description">Description</label>
          <textarea class="border rounded-lg py-2 px-3 w-full" id="description" name="description" v-model="form.description"></textarea>
        </div>
        <div class="flex justify-end">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { useForm } from '@inertiajs/inertia-vue3'

  export default {
    props: {
      star: Object,
    },
    setup(props) {
      const form = useForm({
        first_name: props.star.first_name,
        last_name: props.star.last_name,
        image: null,
        description: props.star.description,
      })

      function onImageChange(event) {
        form.image = event.target.files[0]
      }

      function submit() {
        form.put(route('stars.update', props.star.id), {
          onSuccess: () => {
            return visit(route('stars.index'));
          },
          preserveScroll: true,
        })
      }

      return { form, onImageChange, submit }
    },
  }
</script>