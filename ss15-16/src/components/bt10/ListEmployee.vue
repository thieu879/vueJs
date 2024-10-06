<template>
    <div>
        <h1>List of Employees</h1>
        <ul>
            <li v-for="employee in employees" :key="employee.id">
                <p>{{ employee.name }} - {{ employee.position }}</p>
                <router-link :to="`/employees/${employee.id}`">View Details</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const employees = ref([
    { id: 1, name: 'Alice Johnson', position: 'Developer' },
    { id: 2, name: 'Bob Smith', position: 'Designer' },
    { id: 3, name: 'Charlie Brown', position: 'Product Manager' },
]);
</script>

<style scoped>

</style>
