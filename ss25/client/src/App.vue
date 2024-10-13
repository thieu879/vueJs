<template>
  <div class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h1 class="text-2xl font-bold text-center mb-6">Quản lý công việc</h1>

    <div class="flex items-center mb-4">
      <input v-model="newTodo" type="text" placeholder="Nhập tên công việc"
        class="flex-grow border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <button @click="addTodo"
        class="ml-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
        Thêm công việc
      </button>
    </div>

    <div class="flex justify-center space-x-4 mb-4">
      <button @click="filter = 'all'" :class="filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200'"
        class="px-4 py-2 rounded-md hover:bg-gray-300 transition">Tất cả</button>
      <button @click="filter = 'completed'" :class="filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-200'"
        class="px-4 py-2 rounded-md hover:bg-gray-300 transition">Hoàn thành</button>
      <button @click="filter = 'active'" :class="filter === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-200'"
        class="px-4 py-2 rounded-md hover:bg-gray-300 transition">Đang thực hiện</button>
    </div>

    <ul v-for="todo in filteredTodos" :key="todo.id" class="space-y-2 mb-6">
      <li class="flex items-center justify-between p-2 border rounded-md">
        <label class="flex items-center space-x-2">
          <input type="checkbox" v-model="todo.status" class="form-checkbox h-5 w-5 text-blue-600" />
          <span v-if="todo.status === false">{{ todo.name }}</span>
          <strike v-else>{{ todo.name }}</strike>
        </label>
        <div class="flex space-x-2">
          <button @click="editTodo(todo)" class="text-yellow-500 hover:text-yellow-600">
            <i class="fas fa-edit"></i>
          </button>
          <button @click="deleteTodo(todo.id)" class="text-red-500 hover:text-red-600">
            <i class="fas fa-trash-alt"></i>
          </button>
        </div>
      </li>
    </ul>

    <div class="flex justify-between">
      <button @click="deleteCompletedTodos"
        class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
        Xóa công việc hoàn thành
      </button>
      <button @click="deleteAllTodos" class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
        Xóa tất cả công việc
      </button>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg w-1/3">
        <h2 class="text-lg font-bold mb-4">Sửa công việc</h2>
        <div>
          <input v-model="selectedTodo.name" type="text" class="border w-full px-2 py-1 mb-4" />
        </div>
        <div class="flex justify-between">
          <button @click="saveTodoEdit" class="bg-blue-600 text-white px-4 py-2 rounded">
            Lưu thay đổi
          </button>
          <button @click="closeModal" class="bg-gray-400 text-white px-4 py-2 rounded">Đóng</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';

const todoList = ref([]);
const showModal = ref(false);
const newTodo = ref('');
const filter = ref('all');
const selectedTodo = ref(null);

const getAllTodo = async () => {
  const res = await axios.get("http://localhost:3000/todolist");
  todoList.value = res.data;
};

const addTodo = async () => {
  if (!newTodo.value.trim()) return;
  const newTask = { name: newTodo.value, status: false };
  const res = await axios.post("http://localhost:3000/todolist", newTask);
  todoList.value.push(res.data);
  newTodo.value = '';
};

const deleteTodo = async (id) => {
  await axios.delete(`http://localhost:3000/todolist/${id}`);
  todoList.value = todoList.value.filter((todo) => todo.id !== id);
};

const editTodo = (todo) => {
  selectedTodo.value = { ...todo };
  showModal.value = true;
};

const saveTodoEdit = async () => {
  if (selectedTodo.value) {
    const res = await axios.put(`http://localhost:3000/todolist/${selectedTodo.value.id}`, selectedTodo.value);
    const index = todoList.value.findIndex((todo) => todo.id === selectedTodo.value.id);
    if (index !== -1) {
      todoList.value[index] = res.data;
    }
    closeModal();
  }
};

const closeModal = () => {
  showModal.value = false;
  selectedTodo.value = null;
};

const deleteCompletedTodos = async () => {
  const completedTodos = todoList.value.filter((todo) => todo.status);
  for (const todo of completedTodos) {
    await axios.delete(`http://localhost:3000/todolist/${todo.id}`);
  }
  todoList.value = todoList.value.filter((todo) => !todo.status);
};

const deleteAllTodos = async () => {
  for (const todo of todoList.value) {
    await axios.delete(`http://localhost:3000/todolist/${todo.id}`);
  }
  todoList.value = [];
};

const filteredTodos = computed(() => {
  if (filter.value === 'completed') {
    return todoList.value.filter((todo) => todo.status);
  } else if (filter.value === 'active') {
    return todoList.value.filter((todo) => !todo.status);
  }
  return todoList.value;
});

onMounted(() => {
  getAllTodo();
});
</script>


<style scoped></style>
