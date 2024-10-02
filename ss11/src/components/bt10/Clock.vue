<template>
    <div>
        <p>Thời gian hiện tại: {{ time }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const time = ref("");

const updateTime = () => {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    time.value = `${hours} : ${minutes} : ${seconds}`;
};

let intervalId = null;

onMounted(() => {
    updateTime();
    intervalId = setInterval(updateTime, 1000);
});

onBeforeUnmount(() => {
    if (intervalId) {
        clearInterval(intervalId);
    }
});
</script>

<style scoped>
p {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin-top: 20px;
}
</style>
