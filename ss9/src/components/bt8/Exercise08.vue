<template>
  <div class="form-container">
    <h2 class="form-title">Thêm mới</h2>
    
    <form>
      <div class="form-group">
        <label for="name">Họ và tên:</label>
        <input
          type="text"
          id="name"
          v-model="person.name"
          class="form-input"
          placeholder="Nhập họ và tên"
        />
      </div>

      <div class="form-group">
        <label for="Email">Email:</label>
        <input
          type="email"
          id="Email"
          v-model="person.email"
          class="form-input"
          placeholder="Nhập Email"
        />
      </div>

      <div class="form-group">
        <label for="password">password:</label>
        <input
          type="password"
          id="password"
          v-model="person.password"
          class="form-input"
          placeholder="Nhập password"
        />
      </div>

      <div class="form-group">
        <label for="rePassword">rePassword</label>
        <input
          type="password"
          id="rePassword"
          v-model="person.rePassword"
          class="form-input"
          placeholder="Nhập rePassword"
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


const person = reactive({
  name: '',
  email: '',
  password: '',
  rePassword: ''
});

const handleClick = () => {
  console.log('Product data:', person);
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
