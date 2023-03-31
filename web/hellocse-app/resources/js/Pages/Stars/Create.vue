<template>
    <div>
      <h1>Ajouter une star</h1>
      <form @submit.prevent="submit">
        <div>
          <label>Prénom</label>
          <input type="text" v-model="form.first_name" />
        </div>
        <div>
          <label>Nom</label>
          <input type="text" v-model="form.last_name" />
        </div>
        <div>
          <label>Image</label>
          <input type="file" ref="image" @change="onImageChange" />
        </div>
        <div>
          <label>Description</label>
          <textarea v-model="form.description"></textarea>
        </div>
        <button type="submit">Ajouter</button>
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
          onSuccess: () => form.reset(),
        })
      }
  
      return { form, onImageChange, submit }
    },
  }
</script>  