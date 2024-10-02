<template>
    <div>
        <p>Chiều rộng màn hình hiện tại: {{ windowWidth }}px</p>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const windowWidth = ref(window.innerWidth);

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

onMounted(() => {
    window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style scoped>
p {
    font-size: 18px;
    font-weight: bold;
}
</style>
