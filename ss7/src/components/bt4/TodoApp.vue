<template>
  <div>
    <div v-for="todo in todos" :key="todo.id">
      <TodoItem :todo="todo" @delete="handleDelete" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  components: {
    TodoItem
  },
  setup() {
    const todos = ref([
      { id: 1, title: 'Learn Vue.js' },
      { id: 2, title: 'Build a Todo App' },
    ]);

    const handleDelete = (todoId) => {
      todos.value = todos.value.filter(todo => todo.id !== todoId);
    };

    return { todos, handleDelete };
  }
});
</script>

<style scoped>
</style>
