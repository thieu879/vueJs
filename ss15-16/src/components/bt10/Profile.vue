<template>
  <div>
    <h2>Profile</h2>
    <p>{{ employee?.profile }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const employees = ref([
  { id: 1, profile: 'Profile information for Alice.' },
  { id: 2, profile: 'Profile information for Bob.' },
  { id: 3, profile: 'Profile information for Charlie.' },
]);

const employee = employees.value.find(emp => emp.id === parseInt(route.params.id));
</script>

<style scoped>

</style>
