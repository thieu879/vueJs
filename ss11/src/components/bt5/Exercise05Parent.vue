<template>
    <div>
        <button @click="toggleChild">Toggle Child Component</button>
        <Exercise05Children v-if="showChild" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Exercise05Children from './Exercise05Children.vue';

const showChild = ref(false);

const toggleChild = () => {
    showChild.value = !showChild.value;
};
</script>

<style scoped>

</style>
