<template>
    <div>
        <h1>List of Users</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                <p>{{ user.name }} - {{ user.email }} - {{user.address}}</p>
                <router-link :to="`/userDetail/${user.id}`">Xem chi tiết</router-link>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const users = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Street' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', address: '456 Avenue' },
]);


</script>

<style scoped>

</style>
