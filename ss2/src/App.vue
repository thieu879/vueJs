<script setup>
  import ColorBox from "./components/ColorBox.vue"
  import Cart from "./components/Cart.vue"
  import Calculation from "./components/Calculation.vue"
  import UserInfo from "./components/UserInfo.vue"
  import FormatName from "./components/FormatName.vue"
  import AdminIndex from "./components/AdminIndex.vue"
  import UserLayout from "./components/bt8/UserLayout.vue"
</script>

<template>
  <div>
    <h1>Bt1:</h1>
    <h1>Danh sách khoá học</h1>
    <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>React Js</li>
    </ol>
    <h1>Bt2:</h1>
    <ColorBox></ColorBox>
    <h1>Bt3:</h1>
    <Cart></Cart>
    <h1>Bt4:</h1>
    <Calculation></Calculation>
    <h1>Bt5:</h1>
    <UserInfo></UserInfo>
    <h1>Bt6:</h1>
    <FormatName></FormatName>
    <h1>Bt7:</h1>
    <AdminIndex></AdminIndex>
    <h1>Bt8:</h1>
    <UserLayout></UserLayout>
  </div>
</template>

<style>

</style>