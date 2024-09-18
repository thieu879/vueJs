<script>
export default {
  name: 'FormatName',
  data() {
    return {
      user: {
        firstName: 'Nguyễn Văn',
        lastName: 'Nam',
      }
    }
  },
  methods: {
    formatName(user) {
      return `${user.firstName} ${user.lastName}`;
    }
  }
}
</script>

<template>
  <div>
    <div>Họ và tên: <strong>{{ formatName(user) }}</strong></div>
  </div>
</template>

<style scoped>
strong {
  font-weight: bold;
}
</style>
