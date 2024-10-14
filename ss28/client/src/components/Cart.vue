<template>
    <div class="w-full lg:w-1/2 p-4">
        <h2 class="text-lg font-bold mb-4">Shopping cart</h2>
        <div v-for="item in store.state.cart.cart" :key="item.id" class="border p-4 rounded-lg mb-4 flex items-center">
            <img :src="item.image" alt="Cart Item Image" class="w-20 h-20 object-cover mr-4" />
            <div class="flex-1">
                <h3 class="text-base font-semibold">{{ item.name }}</h3>
                <p class="text-sm">Quantity: {{ item.quantity }}</p>
                <p class="text-sm font-bold">${{ item.price * item.quantity }}</p>
                <div class="mt-2 flex items-center space-x-4">
                    <input type="number" v-model="item.quantity" min="1" class="w-16 p-1 border rounded" />
                    <button @click="updateCart(item)" class="bg-blue-500 text-white px-3 py-1 rounded">Update</button>
                    <button @click="removeFromCart(item.id)" class="text-purple-600">Remove</button>
                </div>
            </div>
        </div>
        <div class="border-t pt-4 mt-4">
            <h3 class="text-base font-semibold">Subtotal: ${{ cartTotal }}</h3>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
store.dispatch("getCart");

const updateCart = (item) => {
    store.dispatch("updateCart", item);
};

const removeFromCart = (id) => {
    store.dispatch("removeFromCart", id);
};

const cartTotal = computed(() => {
    return store.state.cart.cart.reduce((total, item) => total + item.price * item.quantity, 0);
});
</script>

<style scoped>

</style>
