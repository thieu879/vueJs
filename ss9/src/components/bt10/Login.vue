<template>
  <div class="form-container">
    <h2 class="form-title">Đăng nhập</h2>

    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="person.email"
          class="form-input"
          placeholder="Nhập Email"
        />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="password">Mật khẩu:</label>
        <input
          type="password"
          id="password"
          v-model="person.password"
          class="form-input"
          placeholder="Nhập Mật khẩu"
        />
        <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
      </div>

      <button type="submit" class="form-button">Đăng nhập</button>
    </form>

    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const person = reactive({
  email: '',
  password: '',
});

const errors = reactive({
  email: '',
  password: '',
});

const successMessage = ref('');
const errorMessage = ref('');

const validateForm = () => {
  errors.email = person.email ? '' : 'Email không được để trống';
  errors.password = person.password ? '' : 'Mật khẩu không được để trống';
  return !errors.email && !errors.password;
};

const handleLogin = () => {
  if (validateForm()) {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === person.email && user.password === person.password);

    if (user) {
      successMessage.value = 'Đăng nhập thành công';
      errorMessage.value = '';
    } else {
      errorMessage.value = 'Đăng nhập thất bại. Vui lòng kiểm tra lại Email và Mật khẩu.';
      successMessage.value = '';
    }
  }
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

.error-message {
  color: red;
  font-size: 12px;
}

.success-message {
  color: green;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
}
</style>
