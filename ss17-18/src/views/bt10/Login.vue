<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin">
            <label for="username">Username:</label>
            <input type="text" v-model="username" id="username" />
            <label for="password">Password:</label>
            <input type="password" v-model="password" id="password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter();

const handleLogin = () => {
    const isAuthenticated = true;

    if (isAuthenticated) {
        const lastVisitedUrl = localStorage.getItem('lastVisitedUrl');

        if (lastVisitedUrl) {
            router.push(lastVisitedUrl);
        } else {
            router.push('/');
        }
    } else {
        alert('Login failed!');
    }
};
</script>

<style scoped>
</style>
