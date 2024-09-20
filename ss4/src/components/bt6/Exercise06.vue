<template>
  <div>
    <input type="number" v-model="inputValue" />
    <button @click="addToCart">Add to cart</button>
    <br />
    <p>Tổng tiền trong giỏ hàng: {{ totalPrice }}</p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputValue = ref(0);
const totalAmount = ref(0);

const totalPrice = computed(() => totalAmount.value);

const addToCart = () => {
  totalAmount.value += parseFloat(inputValue.value);
  inputValue.value = 0;
};
</script>

<style scoped>

</style>
