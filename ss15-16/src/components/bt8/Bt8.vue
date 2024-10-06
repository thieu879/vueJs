<template>
    <div>
        <router-link to="/bt8/account" class="nav-link" active-class="active-link">account</router-link>

        <router-link to="/bt8/product" class="nav-link" active-class="active-link">product</router-link>

        <router-link to="/bt8/dashboard" class="nav-link" active-class="active-link">dashboard</router-link>

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
