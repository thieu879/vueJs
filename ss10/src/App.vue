<template>
  <div>
    <div class="w-[80%] m-auto mt-4 h-[100vh]">
      <main class="main">
        <header class="d-flex justify-content-between mb-3">
          <h3>Nhân viên</h3>
          <button class="btn btn-primary" @click="showAddForm">Thêm mới nhân viên</button>
        </header>
        <div class="d-flex align-items-center justify-content-end gap-2 mb-3">
          <input style="width: 350px" type="text" class="form-control" placeholder="Tìm kiếm theo email"
            v-model="searchQuery" />
          <i class="fa-solid fa-arrows-rotate" title="Refresh" @click="refreshData"></i>
        </div>
        <table class="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Họ và tên</th>
              <th>Ngày sinh</th>
              <th>Email</th>
              <th>Địa chỉ</th>
              <th>Trạng thái</th>
              <th colspan="3">Chức năng</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(employee, index) in filteredEmployees" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.dob }}</td>
              <td>{{ employee.email }}</td>
              <td>{{ employee.address }}</td>
              <td>
                <div style="display: flex; align-items: center; gap: 8px">
                  <div :class="['status', employee.active ? 'status-active' : 'status-stop']"></div>
                  <span>{{ employee.active ? 'Đang hoạt động' : 'Ngừng hoạt động' }}</span>
                </div>
              </td>
              <td>
                <span class="button button-block" @click="toggleBlock(employee)"> {{ employee.active ? 'Chặn' : 'Bỏ chặn' }}</span>
              </td>
              <td>
                <span class="button button-edit" @click="showEditForm(employee)">Sửa</span>
              </td>
              <td><span class="button button-delete" @click="confirmDelete(employee)">Xóa</span></td>
            </tr>
          </tbody>
        </table>
        <footer class="d-flex justify-content-end align-items-center gap-3">
          <select class="form-select" v-model="recordsPerPage" @change="updateRecordsPerPage">
            <option value="10">Hiển thị 10 bản ghi trên trang</option>
            <option value="20">Hiển thị 20 bản ghi trên trang</option>
            <option value="50">Hiển thị 50 bản ghi trên trang</option>
            <option value="100">Hiển thị 100 bản ghi trên trang</option>
          </select>
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" @click.prevent="prevPage">Previous</a>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page">
              <a class="page-link" @click.prevent="goToPage(page)">{{ page }}</a>
            </li>
            <li class="page-item">
              <a class="page-link" @click.prevent="nextPage">Next</a>
            </li>
          </ul>
        </footer>
      </main>
    </div>

    <!-- Form thêm mới nhân viên -->
    <div class="overlay" v-if="isAddFormVisible">
      <form class="form" @submit.prevent="addEmployee">
        <div class="d-flex justify-content-between align-items-center">
          <h4>{{ isEditing ? 'Chỉnh sửa nhân viên' : 'Thêm mới nhân viên' }}</h4>

          <i class="fa-solid fa-xmark" @click="closeForm"></i>
        </div>
        <div>
          <label class="form-label" for="userName">Họ và tên</label>
          <input id="userName" v-model="newEmployee.name" type="text" class="form-control" required />
          <div class="form-text error" v-if="nameError">Họ và tên không được để trống.</div>
        </div>
        <div>
          <label class="form-label" for="dateOfBirth">Ngày sinh</label>
          <input id="dateOfBirth" v-model="newEmployee.dob" type="date" class="form-control" />
        </div>
        <div>
          <label class="form-label" for="email">Email</label>
          <input id="email" v-model="newEmployee.email" type="email" class="form-control" required />
          <div class="form-text error" v-if="emailError">Email không được để trống.</div>
        </div>
        <div>
          <label class="form-label" for="address">Địa chỉ</label>
          <textarea v-model="newEmployee.address" class="form-control" id="address" rows="3"></textarea>
        </div>
        <div>
          <button type="submit" class="w-100 btn btn-primary">Thêm mới</button>
        </div>
      </form>
    </div>

    <!-- Modal xác nhận chặn tài khoản -->
    <div class="overlay" v-if="isBlockModalVisible">
      <div class="modal-custom">
        <div class="modal-title">
          <h4>Cảnh báo</h4>
          <i class="fa-solid fa-xmark" @click="closeBlockModal"></i>
        </div>
        <div class="modal-body-custom">
          <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
        </div>
        <div class="modal-footer-custom">
          <button class="btn btn-light" @click="closeBlockModal">Hủy</button>
          <button class="btn btn-danger" @click="confirmBlock">Xác nhận</button>
        </div>
      </div>
    </div>

    <!-- Modal xác nhận xóa tài khoản -->
    <div class="overlay" v-if="isDeleteModalVisible">
      <div class="modal-custom">
        <div class="modal-title">
          <h4>Cảnh báo</h4>
          <i class="fa-solid fa-xmark" @click="closeDeleteModal"></i>
        </div>
        <div class="modal-body-custom">
          <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
        </div>
        <div class="modal-footer-custom">
          <button class="btn btn-light" @click="closeDeleteModal">Hủy</button>
          <button class="btn btn-danger" @click="confirmDelete">Xác nhận</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
import './assets/main.css'
import { ref, computed, onMounted } from 'vue';

const isAddFormVisible = ref(false);
const isBlockModalVisible = ref(false);
const isDeleteModalVisible = ref(false);
const searchQuery = ref('');
const newEmployee = ref({ name: '', dob: '', email: '', address: '' });
const employees = ref([]);
const recordsPerPage = ref(10);
const currentPage = ref(1);

const loadEmployeesFromLocalStorage = () => {
  const storedEmployees = JSON.parse(localStorage.getItem('users')) || [];
  employees.value = storedEmployees;
};

const saveEmployeesToLocalStorage = () => {
  localStorage.setItem('users', JSON.stringify(employees.value));
};

onMounted(() => {
  loadEmployeesFromLocalStorage();
});

const showAddForm = () => {
  isAddFormVisible.value = true;
};

const closeForm = () => {
  isAddFormVisible.value = false;
  resetForm();
};

const addEmployee = () => {
  if (!validateForm()) return;

  if (isEditing.value) {
    Object.assign(employeeToEdit.value, newEmployee.value);
    isEditing.value = false;
  } else {
    employees.value.push({ ...newEmployee.value, active: true });
  }

  saveEmployeesToLocalStorage();
  closeForm();
};

const toggleBlock = (employee) => {
  const action = employee.active ? 'chặn' : 'bỏ chặn';
  Swal.fire({
    title: `Bạn có chắc chắn muốn ${action} tài khoản này?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: `Xác nhận ${action}`,
    cancelButtonText: 'Hủy',
  }).then((result) => {
    if (result.isConfirmed) {
      employee.active = !employee.active;
      saveEmployeesToLocalStorage();
      Swal.fire('Thành công', `Tài khoản đã được ${action}`, 'success');
    }
  });
};

const confirmDelete = (employee) => {
  Swal.fire({
    title: 'Bạn có chắc chắn muốn xóa tài khoản này?',
    text: "Hành động này không thể hoàn tác!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Xác nhận xóa',
    cancelButtonText: 'Hủy',
  }).then((result) => {
    if (result.isConfirmed) {
      employees.value = employees.value.filter(e => e.email !== employee.email);
      saveEmployeesToLocalStorage();
      Swal.fire('Đã xóa!', 'Tài khoản đã được xóa.', 'success');
    }
  });
};

const resetForm = () => {
  newEmployee.value = { name: '', dob: '', email: '', address: '' };
};

const refreshData = () => {
  searchQuery.value = "";
};

const filteredEmployees = computed(() => {
  return employees.value.filter(employee => employee.email.includes(searchQuery.value));
});

const totalPages = computed(() => {
  return Math.ceil(filteredEmployees.value.length / recordsPerPage.value);
});

const goToPage = (page) => {
  currentPage.value = page;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const updateRecordsPerPage = () => {
  currentPage.value = 1;
};

const nameError = ref(false);
const emailError = ref(false);
const showEditForm = (employee) => {
  isAddFormVisible.value = true;
  newEmployee.value = { ...employee };
  isEditing.value = true;
  employeeToEdit.value = employee;
};
const validateForm = () => {
  if (!newEmployee.value.name.trim()) {
    nameError.value = true;
    return false;
  } else {
    nameError.value = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!newEmployee.value.email.trim()) {
    emailError.value = true;
    return false;
  } else if (!emailPattern.test(newEmployee.value.email)) {
    emailError.value = true;
    return false;
  } else {
    emailError.value = false;
  }

  const currentDate = new Date();
  const dobDate = new Date(newEmployee.value.dob);
  if (dobDate > currentDate) {
    Swal.fire('Lỗi', 'Ngày sinh không được lớn hơn ngày hiện tại!', 'error');
    return false;
  }

  return true;
};
const employeeToEdit = ref(null);
const isEditing = ref(false);
</script>

<style scoped>

</style>
