<template>
  <div class="form-container">
    <h2 class="form-title">Thêm mới sản phẩm</h2>
    
    <form>
      <div class="form-group">
        <label for="productCode">Mã sản phẩm</label>
        <input
          type="text"
          id="productCode"
          v-model="product.code"
          class="form-input"
          placeholder="Nhập mã sản phẩm"
        />
      </div>

      <div class="form-group">
        <label for="productName">Tên sản phẩm</label>
        <input
          type="text"
          id="productName"
          v-model="product.name"
          class="form-input"
          placeholder="Nhập tên sản phẩm"
        />
      </div>

      <div class="form-group">
        <label for="price">Giá</label>
        <input
          type="text"
          id="price"
          v-model="product.price"
          class="form-input"
          placeholder="Nhập giá sản phẩm"
        />
      </div>

      <div class="form-group">
        <label for="quantity">Số lượng</label>
        <input
          type="number"
          id="quantity"
          v-model="product.quantity"
          class="form-input"
          placeholder="Nhập số lượng"
        />
      </div>

      <button
        type="button"
        class="form-button"
        @click="handleClick"
      >
        Thêm mới
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';


const product = reactive({
  code: '',
  name: '',
  price: '',
  quantity: 1
});

const handleClick = () => {
  console.log('Product data:', product);
};

</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #0056b3;
}
</style>
