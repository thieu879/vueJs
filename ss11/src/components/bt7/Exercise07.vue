<template>
    <div>
        <input @input="updateTitle" type="text" placeholder="Nhập tiêu đề mới..." />
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue';

const updateTitle = (event) => {
    const newTitle = event.target.value;
    document.title = newTitle || "Nhập tiêu đề mới...";
};

onMounted(() => {
    document.title = "Nhập tiêu đề mới...";
});

onBeforeUnmount(() => {
    document.title = "Trang mặc định";
});
</script>

<style scoped>
input {
    padding: 10px;
    font-size: 16px;
}
</style>
