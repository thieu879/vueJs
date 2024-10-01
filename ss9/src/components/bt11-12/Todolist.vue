<template>
  <div>
    <input v-model="valueInput" type="text" placeholder="Nội dung công việc">
    <button @click="addJob">Thêm</button>
    <div>
      <h1>danh sách công việc</h1>
      <ol>
        <li v-for="job in jobs" :key="job.id">
          <input @change="handleChange(job.id)" type="checkbox">
          <span v-if="job.status" class="change">
            {{ job.name }}
          </span>
          <span v-else>
            <template v-if="job.isEditing">
              <input v-model="job.newName" placeholder="Sửa công việc">
              <button @click="saveEdit(job.id)">Lưu</button>
              <button @click="cancelEdit(job.id)">Hủy</button>
            </template>
            <template v-else>
              {{ job.name }}
              <button @click="startEdit(job.id)">Sửa</button>
              <button @click="deleteValue(job.id)">Xóa</button>
            </template>
          </span>
        </li>
      </ol>
    </div>
    <p v-if="completeJob === jobs.length">Hoàn thành công việc</p>
    <p v-else>số công việc hoàn thành: {{ completeJob }} / {{ jobs.length }}</p>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

const valueInput = ref("");
const jobs = reactive(JSON.parse(localStorage.getItem("jobs")) || []);

const addJob = () => {
  let job = {
    name: valueInput.value,
    newName: "",
    status: false,
    isEditing: false,
    id: Math.floor(Math.random() * 9999999999999999999999),
  };
  jobs.push(job);
  localStorage.setItem("jobs", JSON.stringify(jobs));
  valueInput.value = "";
};

const deleteValue = (id) => {
  const updatedJobs = jobs.filter((item) => item.id !== id);
  jobs.splice(0, jobs.length, ...updatedJobs);
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

const startEdit = (id) => {
  let job = jobs.find((item) => item.id === id);
  job.isEditing = true;
  job.newName = job.name;
};

const saveEdit = (id) => {
  let job = jobs.find((item) => item.id === id);
  job.name = job.newName;
  job.isEditing = false;
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

const cancelEdit = (id) => {
  let job = jobs.find((item) => item.id === id);
  job.isEditing = false;
};

const handleChange = (id) => {
  let index = jobs.findIndex((item) => item.id === id);
  jobs[index].status = !jobs[index].status;
  localStorage.setItem("jobs", JSON.stringify(jobs));
};

const completeJob = computed(() => {
  return jobs.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.status;
  }, 0);
});
</script>

<style scoped>
.change {
  text-decoration: line-through;
}
</style>
