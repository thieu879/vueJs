<template>
    <div>
        <div :style="{ backgroundColor: backgroundColor }">123</div>
        <button @click="handleClick">change</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const backgroundColor = ref('blue');

const handleClick = () => {
    backgroundColor.value = 'red';
}
</script>

<style scoped>

</style>
