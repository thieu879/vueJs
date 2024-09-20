<template>
  <div>
    <h1>Danh sách sản phẩm</h1>
    
    <div v-for="product in products" :key="product.id">
      <p>{{ product.name }} - Số lượng: {{ product.quantity }}</p>
      <button @click="increaseQuantity(product.id)">
        Tăng số lượng
      </button>
    </div>

    <div>
      <h2>Tổng số lượng sản phẩm trong giỏ hàng: {{ totalQuantity }}</h2>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const products = ref([
  { id: 1, name: 'Sản phẩm A', quantity: 1 },
  { id: 2, name: 'Sản phẩm B', quantity: 2 },
  { id: 3, name: 'Sản phẩm C', quantity: 1 }
]);

const increaseQuantity = (id) => {
  const product = products.value.find(p => p.id === id);
  if (product) {
    product.quantity++;
  }
};

const totalQuantity = computed(() => {
  return products.value.reduce((total, product) => total + product.quantity, 0);
});
</script>

<style scoped>

</style>
