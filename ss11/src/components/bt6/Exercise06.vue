<template>
    <div>
        <p>count: {{ count }}</p>
        <button @click="handleClick">Increment</button>
    </div>
</template>

<script setup>
import { ref, onUpdated } from 'vue';

const count = ref(0);

const handleClick = () => {
    count.value++;
};

onUpdated(() => {
    document.title = `${count.value}`;
});
</script>

<style scoped>
</style>
