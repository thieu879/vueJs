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
            {{job.name}}
          </span>
          <span v-else>
            {{job.name}}
          </span>
          <button @click="deleteValue(job.id)">delete</button>
        </li>
      </ol>
    </div>
    <p>số công việc hoàn thành: {{completeJob}} / {{jobs.length}}</p>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';

  const valueInput = ref("")
  const jobs = reactive(JSON.parse(localStorage.getItem("jobs"))||[])
  const addJob = ()=>{
    let job = {
      name: valueInput.value,
      status: false,
      id: Math.floor(Math.random() * 9999999999999999999999)
    }
    jobs.push(job)
    localStorage.setItem("jobs", JSON.stringify(jobs))    
    valueInput.value = ""
  }
  const deleteValue = (id) => {
    const updatedJobs = jobs.filter((item) => item.id != id);
    jobs.splice(0, jobs.length, ...updatedJobs);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  };
  const handleChange = (id)=>{
    let index = jobs.findIndex((item) => item.id == id)
    jobs[index].status =!jobs[index].status;
    localStorage.setItem("jobs", JSON.stringify(jobs))   
  }
  const completeJob = computed(()=>{
    return jobs.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.status;
    }, 0)
  })
</script>

<style scoped>
  .change{
    text-decoration: line-through;
  }
</style>