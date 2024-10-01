<template>
    <div>
        <p>sở thích: {{value}}</p>
        <div>
            <input v-model="value" value="Đá bóng" type="checkbox">
            <label for="">Đá bóng</label>
        </div>
        <div>
            <input v-model="value" value="Bóng chuyền" type="checkbox">
            <label for="">Bóng chuyền</label>
        </div>
        <div>
            <input v-model="value" value="code" type="checkbox">
            <label for="">code</label>
        </div>
        <div>
            <input v-model="value" value="Bơi Lội" type="checkbox">
            <label for="">Bơi Lội</label>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const value = ref([])
</script>

<style scoped>

</style>