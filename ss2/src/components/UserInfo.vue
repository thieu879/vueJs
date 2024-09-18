<template>
  <div>
    <ul>
      <li>Họ và tên: {{ user.name }}</li>
      <li>Giới Tính: {{ user.gender }}</li>
      <li>Ngày Sinh: {{ user.birthDate }}</li>
      <li>Email: {{ user.email }}</li>
      <li>Địa Chỉ: {{ user.address }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Nguyễn Văn A",
        gender: "Nam",
        birthDate: "01/01/1990",
        email: "nguyenvana@example.com",
        address: "123 Đường ABC, Quận 1, TP. Hồ Chí Minh"
      }
    };
  }
};
</script>

<style scoped>
</style>
