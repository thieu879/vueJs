<template>
    <div>
        <router-link exact-active-class="active" to="/user">User</router-link>
        <router-link active-class="active" to="/about">About</router-link>
        <router-link active-class="active" to="/setting">Setting</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
.active{
    background-color: red;
}
</style>