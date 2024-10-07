<template>
    <div>
        <input v-model="keySearch" type="text">
        <button @click="handleClick">Tìm kiếm</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const keySearch = ref("")
const handleClick = () => {
    router.push({ query: { q: keySearch.value } })
}

</script>

<style scoped>

</style>