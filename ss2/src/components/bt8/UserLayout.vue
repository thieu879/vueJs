<template>
  <div class="layout-container">
    <Header class="header" />
    
    <Navbar class="navbar" />
    
    <div class="content">
      <Menu class="menu" />
      
      <div class="cart-grid">
        <Cart v-for="i in 12" :key="i" />
      </div>
      
      <Article class="article" />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
import Menu from './Menu.vue'
import Navbar from './Navbar.vue'
import Cart from './Cart.vue'
import Article from './Article.vue'

export default {
  name: 'UserLayout',
  components: {
    Header,
    Menu,
    Navbar,
    Cart,
    Article
  }
}
</script>

<style scoped>
.layout-container {
  display: grid;
  grid-template-rows: auto auto 1fr;
  grid-template-columns: 1fr;
  height: 100vh;
}

.header {
  grid-row: 1;
  background-color: #d3d3d3;
  padding: 10px;
  text-align: center;
}

.navbar {
  grid-row: 2;
  background-color: #808080;
  padding: 10px;
  text-align: center;
}

.content {
  grid-row: 3;
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  gap: 10px;
  padding: 10px;
  height: 100%;
}

.menu {
  background-color: #008000;
  padding: 20px;
  text-align: center;
}

.cart-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  padding: 10px;
  background-color: #ffecec;
}

.cart {
  background-color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.article {
  background-color: #add8e6;
  padding: 20px;
  text-align: center;
}
</style>
