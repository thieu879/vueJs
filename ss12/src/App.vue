<template>
  <div>
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-xl font-bold">Quản lý mượn trả sách</h1>

        <select v-model="selectedFilter" @change="filterBooks" class="py-2 px-4 rounded border border-gray-300">
          <option value="">Tất cả</option>
          <option value="Đã trả">Đã trả</option>
          <option value="Chưa trả">Chưa trả</option>
        </select>

        <button @click="showAddForm" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Thêm thông tin
        </button>
      </div>

      <table class="min-w-full bg-white border">
        <thead>
          <tr>
            <th class="py-2 border">STT</th>
            <th class="py-2 border">Tên sách</th>
            <th class="py-2 border">Sinh viên mượn</th>
            <th class="py-2 border">Ngày mượn</th>
            <th class="py-2 border">Ngày trả</th>
            <th class="py-2 border">Trạng thái</th>
            <th class="py-2 border">Chức năng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, index) in filteredBooks" :key="index">
            <td class="py-2 text-center border">{{ index + 1 }}</td>
            <td class="py-2 border text-center">{{ book.title }}</td>
            <td class="py-2 border text-center">{{ book.borrower }}</td>
            <td class="py-2 border text-center">{{ book.borrowDate }}</td>
            <td class="py-2 border text-center">{{ book.returnDate }}</td>
            <td class="py-2 border text-center">
              <select v-model="book.status" class="py-1 px-2 rounded-full border border-gray-300"
                @change="saveBooksToLocalStorage">
                <option value="Đã trả">Đã trả</option>
                <option value="Chưa trả">Chưa trả</option>
              </select>
            </td>
            <td class="py-2 border text-center">
              <button @click="editBook(index)"
                class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded mr-2">
                Sửa
              </button>
              <button @click="confirmDeleteBook(index)"
                class="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Form thêm mới sách -->
    <div class="overlay" v-if="isAddFormVisible">
      <form class="form" @submit.prevent="addBook">
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h4 class="text-lg font-bold">{{ isEditing ? 'Chỉnh sửa thông tin sách' : 'Thêm mới sách' }}</h4>
          <i class="fa-solid fa-xmark cursor-pointer" @click="closeForm"></i>
        </div>

        <div class="mb-4">
          <label class="form-label block text-sm font-medium mb-1" for="bookTitle">Tên sách:</label>
          <input id="bookTitle" v-model="newBook.title" type="text" class="form-control border rounded p-2 w-full"
            required />
        </div>
        <div class="mb-4">
          <label class="form-label block text-sm font-medium mb-1" for="borrowerName">Tên người mượn:</label>
          <input id="borrowerName" v-model="newBook.borrower" type="text" class="form-control border rounded p-2 w-full"
            required />
        </div>
        <div class="mb-4">
          <label class="form-label block text-sm font-medium mb-1" for="borrowDate">Ngày mượn:</label>
          <input id="borrowDate" v-model="newBook.borrowDate" type="date" class="form-control border rounded p-2 w-full"
            required />
        </div>
        <div class="mb-4">
          <label class="form-label block text-sm font-medium mb-1" for="returnDate">Ngày trả:</label>
          <input id="returnDate" v-model="newBook.returnDate" type="date" class="form-control border rounded p-2 w-full"
            required />
        </div>

        <div v-if="errorMessage" class="error text-red-500 mb-4">{{ errorMessage }}</div>

        <div>
          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded">Thêm
            mới</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

const isAddFormVisible = ref(false);
const isEditing = ref(false);
const books = ref([]);
const filteredBooks = ref([]);
const newBook = ref({
  title: '',
  borrower: '',
  borrowDate: '',
  returnDate: '',
  status: 'Chưa trả',
});
const editingIndex = ref(null);
const selectedFilter = ref('');
const errorMessage = ref('');

onMounted(() => {
  const savedBooks = localStorage.getItem('books');
  if (savedBooks) {
    books.value = JSON.parse(savedBooks);
  }
  filterBooks();
});

const showAddForm = () => {
  isAddFormVisible.value = true;
};

const closeForm = () => {
  isAddFormVisible.value = false;
  resetForm();
};

const addBook = () => {
  if (!validateForm()) return;

  if (isEditing.value) {
    books.value.splice(editingIndex.value, 1, { ...newBook.value });
    isEditing.value = false;
  } else {
    books.value.push({ ...newBook.value });
  }

  saveBooksToLocalStorage();
  closeForm();
  resetForm();
};

const editBook = (index) => {
  isEditing.value = true;
  newBook.value = { ...books.value[index] };
  editingIndex.value = index;
  isAddFormVisible.value = true;
};

const confirmDeleteBook = (index) => {
  Swal.fire({
    title: 'Bạn có chắc chắn?',
    text: "Bạn sẽ không thể khôi phục sách này!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Có, xóa nó!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteBook(index);
      Swal.fire(
        'Đã xóa!',
        'Sách đã được xóa.',
        'success'
      );
    }
  });
};

const deleteBook = (index) => {
  books.value.splice(index, 1);
  saveBooksToLocalStorage();
  filterBooks();
};

const resetForm = () => {
  newBook.value = {
    title: '',
    borrower: '',
    borrowDate: '',
    returnDate: '',
    status: 'Chưa trả',
  };
};

const saveBooksToLocalStorage = () => {
  localStorage.setItem('books', JSON.stringify(books.value));
  filterBooks();
};

const filterBooks = () => {
  if (selectedFilter.value) {
    filteredBooks.value = books.value.filter(book => book.status === selectedFilter.value);
  } else {
    filteredBooks.value = books.value;
  }
};

const validateForm = () => {
  if (!newBook.value.title || !newBook.value.borrower || !newBook.value.borrowDate || !newBook.value.returnDate) {
    errorMessage.value = 'Vui lòng điền đầy đủ thông tin!';
    return false;
  }
  errorMessage.value = '';
  return true;
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.error {
  color: red;
}
</style>
