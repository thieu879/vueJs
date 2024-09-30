<template>
    <div>
        <ProductChildren v-for="item in product" :key="item.id" :prop="item"></ProductChildren>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductChildren from './ProductChildren.vue';

const product = ref([
    {
        id: 1,
        name: "bàn",
        price: "12vnđ",
        quantity: 12
    }
]);
</script>

<style scoped>

</style>
