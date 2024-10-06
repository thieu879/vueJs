<template>
  <div>
    <h1>Employee Detail</h1>
    <router-link :to="`${route.path}/profile`">Profile</router-link>
    <router-link :to="`${route.path}/projects`">Projects</router-link>
    <router-link :to="`${route.path}/contact`">Contact</router-link>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const employees = ref([
  { id: 1, name: 'Alice Johnson', position: 'Developer', profile: 'Profile information for Alice.', projects: ['Project A', 'Project B'], contact: 'alice@example.com' },
  { id: 2, name: 'Bob Smith', position: 'Designer', profile: 'Profile information for Bob.', projects: ['Project C'], contact: 'bob@example.com' },
  { id: 3, name: 'Charlie Brown', position: 'Product Manager', profile: 'Profile information for Charlie.', projects: ['Project D', 'Project E'], contact: 'charlie@example.com' },
]);

const employee = employees.value.find(emp => emp.id === parseInt(route.params.id));
</script>

<style scoped>

</style>
