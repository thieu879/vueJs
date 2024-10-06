<template>
    <div>
        <h1>User Detail</h1>
        <div v-if="user">
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
            <p><strong>Address:</strong> {{ user.address }}</p>
        </div>
        <div v-else>
            <p>User not found</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const users = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com', address: '123 Street' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', address: '456 Avenue' },
]);

const user = users.value.find(u => u.id === parseInt(route.params.id));
</script>
