<template>
  <div>
    <input v-model="keyword" type="text" placeholder="Nhập tên cần tìm" />
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' }
]

const keyword = ref('')

const filteredUsers = computed(() => {
  return users.filter(user => 
    user.name.toLowerCase().includes(keyword.value.toLowerCase())
  )
})


</script>

<style scoped>

</style>
