<template>
    <div>
        <router-link to="/bt7/home" class="nav-link" active-class="active-link">home</router-link>

        <router-link to="/bt7/product" class="nav-link" active-class="active-link">product</router-link>

        <router-link to="/bt7/detail" class="nav-link" active-class="active-link">detail</router-link>

        <router-view></router-view>
    </div>
</template>

<script setup>

</script>

<style scoped>
.nav-link {
    padding: 10px;
    color: black;
    text-decoration: none;
    margin-right: 10px;
}

.active-link {
    color: white;
    background-color: blue;
    border-radius: 5px;
}
</style>
