<template>
    <div>
        <div class="max-w-lg mx-auto p-4 bg-white shadow rounded-lg">
            <h2 class="text-xl font-bold mb-4">List Product</h2>

            <div class="border-b pb-4 mb-4">
                <div class="flex items-start" v-for="product in store.state.listProduct.product" :key="product.id">
                    <img :src="product.img" alt="Product Image" class="w-20 h-20 object-cover rounded mr-4">
                    <div class="flex-grow">
                        <h3 class="font-bold">{{ product.name }}</h3>
                        <p class="text-sm text-gray-600">{{ product.describe }}</p>
                        <div class="mt-2">
                            <p class="font-bold">Total: <span>{{ product.total }}</span></p>
                        </div>
                    </div>
                    <div class="ml-4">
                        <input type="number" value="1" class="border border-gray-300 rounded w-12 text-center mb-2">
                        <p class="text-gray-600">Price: ${{ product.price }}</p>
                        <button class="bg-blue-500 text-white px-4 py-1 rounded mt-2" @click="addToCart(product)">Add to
                            cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
store.dispatch("getAllProduct");

const addToCart = (product) => {
    store.dispatch("addToCart", product);
};
</script>

<style scoped>

</style>
