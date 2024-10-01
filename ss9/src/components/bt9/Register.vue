<template>
  <div class="form-container">
    <h2 class="form-title">Đăng ký</h2>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Họ và tên:</label>
        <input
          type="text"
          id="name"
          v-model="person.name"
          class="form-input"
          placeholder="Nhập họ và tên"
          ref="nameInput"
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>

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
          placeholder="Nhập mật khẩu"
        />
        <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
      </div>

      <div class="form-group">
        <label for="phonenumber">Số điện thoại:</label>
        <input
          type="text"
          id="phonenumber"
          v-model="person.phonenumber"
          class="form-input"
          placeholder="Nhập số điện thoại"
        />
      </div>

      <button type="submit" class="form-button">Đăng ký</button>
    </form>

    <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const person = reactive({
  name: '',
  email: '',
  password: '',
  phonenumber: '',
});

const errors = reactive({
  name: '',
  email: '',
  password: '',
});

const successMessage = ref('');
const nameInput = ref(null);

const validateForm = () => {
  errors.name = person.name ? '' : 'Tên sinh viên không được để trống';
  errors.email = person.email ? '' : 'Email không được để trống';
  errors.password = person.password ? '' : 'Mật khẩu không được để trống';

  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const emailExists = existingUsers.some(user => user.email === person.email);
  if (emailExists) {
    errors.email = 'Email đã tồn tại';
  }

  return !errors.name && !errors.email && !errors.password;
};

const handleSubmit = () => {
  if (validateForm()) {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    existingUsers.push({ ...person });
    localStorage.setItem('users', JSON.stringify(existingUsers));

    person.name = '';
    person.email = '';
    person.password = '';
    person.phonenumber = '';

    successMessage.value = 'Đăng ký tài khoản thành công';
    nameInput.value.focus();
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
  text-align: center;
  margin-top: 10px;
}
</style>
