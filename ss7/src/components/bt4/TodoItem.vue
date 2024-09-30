<template>
  <div>
    <h3>{{ todo.title }}</h3>
    <button @click="handleDelete">Delete</button>
  </div>
</template>

<script>
import { defineComponent, toRefs } from 'vue';

export default defineComponent({
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  setup(props, { emit }) {
    const { todo } = toRefs(props);

    const handleDelete = () => {
      emit('delete', todo.value.id);
    };

    return { handleDelete };
  }
});
</script>

<style scoped>
</style>
