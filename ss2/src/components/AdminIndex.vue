<template>
  <div class="admin-container">
    <HeaderComponent />
    <div class="content">
      <MenuComponent />
      <MainComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from './Header.vue';
import MenuComponent from './Menu.vue';
import MainComponent from './Main.vue';
import FooterComponent from './Footer.vue';

export default {
  name: 'AdminIndex',
  components: {
    HeaderComponent,
    MenuComponent,
    MainComponent,
    FooterComponent
  }
};
</script>

<style scoped>
.admin-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

header, footer {
  background-color: #d3d3d3;
  padding: 1rem;
  text-align: center;
}

nav {
  background-color: #1E3A8A;
  color: white;
  padding: 1rem;
  width: 200px;
}

main {
  flex: 1;
  background-color: white;
  padding: 1rem;
}
</style>
