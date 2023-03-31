<template>
    <div>
      <h1>Modifier la star</h1>
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
        <button type="submit">Modifier</button>
      </form>
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
          preserveScroll: true,
        })
      }
  
      return { form, onImageChange, submit }
    },
  }
</script>
  