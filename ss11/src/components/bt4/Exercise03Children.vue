<template>
    <div>
        <p>Age in Child: {{ age }}</p>
    </div>
</template>

<script setup>
import { onUpdated, watch, defineProps } from 'vue';

const props = defineProps({
    age: Number
});

onUpdated(() => {
    console.log('age được cập nhật thành:', props.age);
});

watch(() => props.age, (newAge, oldAge) => {
    console.log(`age thay đổi từ ${oldAge} thành ${newAge}`);
});
</script>

<style scoped>

</style>
