<template>
  <div class="p-4">
    <div class="flex justify-between mb-4">
      <div class="flex space-x-2">
        <input type="text" placeholder="Nhập từ khóa tìm kiếm" class="border p-2 rounded w-64" />
        <select class="border p-2 rounded">
          <option>Lọc bài viết</option>
        </select>
      </div>
      <button @click="openModal(false)" class="bg-blue-500 text-white px-4 py-2 rounded">
        Thêm mới bài viết
      </button>
    </div>

    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th class="border p-2 text-left">STT</th>
          <th class="border p-2 text-left">Tiêu đề</th>
          <th class="border p-2 text-left">Hình ảnh</th>
          <th class="border p-2 text-left">Ngày viết</th>
          <th class="border p-2 text-left">Trạng thái</th>
          <th class="border p-2 text-left">Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(post, index) in managerPost" :key="post.id">
          <td class="border p-2">{{ index + 1 }}</td>
          <td class="border p-2">{{ post.title }}</td>
          <td class="border p-2">
            <img :src="post.imageUrl" alt="Image" class="w-12 h-12 rounded-full" />
          </td>
          <td class="border p-2">{{ post.date }}</td>
          <td class="border p-2">
            <span :class="{
              'bg-green-100 text-green-600': post.status === true,
              'bg-red-100 text-red-600': post.status === false
            }" class="px-2 py-1 rounded">
              {{ post.status === true ? 'Đã xuất bản' : 'Chưa xuất bản' }}
            </span>
          </td>
          <td class="border p-2 flex space-x-2">
            <button @click="toggleStatus(post.id)" class="bg-yellow-500 text-white px-4 py-2 rounded">Chặn</button>
            <button @click="openModal(true, post)" class="bg-orange-500 text-white px-4 py-2 rounded">Sửa</button>
            <button @click="deletePost(post.id)" class="bg-red-500 text-white px-4 py-2 rounded">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg w-1/3">
        <h2 class="text-lg font-bold mb-4">{{ isEditing ? 'Chỉnh Sửa Bài Viết' : 'Thêm Mới Bài Viết' }}</h2>
        <div>
          <label for="postTitle">Tiêu đề</label>
          <input v-model="newPost.title" id="postTitle" type="text" class="border w-full px-2 py-1 mb-4" />
        </div>
        <div>
          <label for="postImg">Hình ảnh (URL)</label>
          <input v-model="newPost.imageUrl" id="postImg" type="text" class="border w-full px-2 py-1 mb-4" />
        </div>
        <div>
          <label for="postDate">Ngày viết</label>
          <input v-model="newPost.date" id="postDate" type="date" class="border w-full px-2 py-1 mb-4" />
        </div>
        <div class="flex justify-between">
          <button @click="isEditing ? editPostById(newPost.id) : createPost"
            class="bg-blue-600 text-white px-4 py-2 rounded">
            {{ isEditing ? 'Lưu thay đổi' : 'Thêm bài viết' }}
          </button>
          <button @click="closeModal" class="bg-gray-400 text-white px-4 py-2 rounded">Đóng</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const managerPost = ref([]);
const showModal = ref(false);
const isEditing = ref(false);
const newPost = ref({
  id: null,
  title: '',
  imageUrl: '',
  date: '',
});

const getAllPost = async () => {
  try {
    const res = await axios.get("http://localhost:3000/managerPost");
    managerPost.value = res.data;
  } catch (error) {
    console.error("Failed to fetch posts", error);
  }
};

const openModal = (editMode, post = null) => {
  showModal.value = true;
  isEditing.value = editMode;
  if (editMode && post) {
    newPost.value = { ...post };
  } else {
    newPost.value = { id: null, title: '', imageUrl: '', date: '' };
  }
};

const closeModal = () => {
  showModal.value = false;
};

const createPost = async () => {
  try {
    await axios.post("http://localhost:3000/managerPost", newPost.value);
    getAllPost();
    closeModal();
  } catch (error) {
    console.error("Failed to create post", error);
  }
};

const editPostById = async (id) => {
  try {
    await axios.put(`http://localhost:3000/managerPost/${id}`, newPost.value);
    getAllPost();
    closeModal();
  } catch (error) {
    console.error("Failed to update post", error);
  }
};

const deletePost = async (id) => {
  try {
    await axios.delete(`http://localhost:3000/managerPost/${id}`);
    getAllPost();
  } catch (error) {
    console.error("Failed to delete post", error);
  }
};

const toggleStatus = async (id) => {
  const post = managerPost.value.find((p) => p.id === id);
  try {
    await axios.put(`http://localhost:3000/managerPost/${id}`, { ...post, status: !post.status });
    getAllPost();
  } catch (error) {
    console.error("Failed to toggle status", error);
  }
};

onMounted(() => {
  getAllPost();
});
</script>

<style lang="scss" scoped>

</style>
