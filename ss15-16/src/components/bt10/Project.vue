<template>
  <div>
    <h2>Projects</h2>
    <ul>
      <li v-for="project in employee?.projects" :key="project">{{ project }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const employees = ref([
  { id: 1, projects: ['Project A', 'Project B'] },
  { id: 2, projects: ['Project C'] },
  { id: 3, projects: ['Project D', 'Project E'] },
]);

const employee = employees.value.find(emp => emp.id === parseInt(route.params.id));
</script>

<style scoped>

</style>
