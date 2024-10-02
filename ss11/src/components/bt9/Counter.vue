<template>
    <div>
        <p>Giá trị hiện tại của biến count: {{ count }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const count = ref(0);
let intervalId = null;

const startCounter = () => {
    intervalId = setInterval(() => {
        count.value++;
    }, 1000);
};

const stopCounter = () => {
    if (intervalId) {
        clearInterval(intervalId);
    }
};

onMounted(() => {
    startCounter();
});

onBeforeUnmount(() => {
    stopCounter();
});
</script>

<style scoped>
p {
    font-size: 24px;
    font-weight: bold;
    color: #333;
}
</style>
