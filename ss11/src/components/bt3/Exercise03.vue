<template>
    <div>
        <p>Current company: {{ acompany }}</p>
        <p>Age: {{ age }}</p>
        <button @click="handleClick">Random</button>
    </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';

const age = ref(1);
const companies = ["Rikkei Academy", "Rikkei Education", "Rikkei Fukuoka"];
const acompany = ref(companies[0]);

const handleClick = () => {
    age.value = Math.floor(Math.random() * 10) + 1;
};

onUpdated(() => {
    acompany.value = companies[age.value % companies.length];
});
</script>

<style scoped>
</style>
