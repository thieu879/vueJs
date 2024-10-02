<template>
    <div>
        <p>Child Component is visible</p>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onUnmounted } from 'vue';

onBeforeUnmount(() => {
    console.log('beforeUnmount: Thành phần sắp được ngắt kết nối');
});

onUnmounted(() => {
    console.log('unmount: Thành phần đã được unmount');
});
</script>

<style scoped>

</style>
