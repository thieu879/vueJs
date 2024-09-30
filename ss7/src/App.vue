<template>
  <div>
    <h1>Bt1:</h1>
    <ParentComponent></ParentComponent>
    <h1>bt2:</h1>
    <ProductParent></ProductParent>
    <h1>bt3:</h1>
    <CountParent></CountParent>
    <h1>bt4:</h1>
    <TodoApp></TodoApp>
    <h1>bt5:</h1>
    <OpenModal></OpenModal>
    <h1>bt6:</h1>
    <OpenCart></OpenCart>
    <h1>bt7:</h1>
    <MessageParent></MessageParent>
    <h1>bt8:</h1>
    <ListUser></ListUser>
    <h1>bt9:</h1>
    <ClickBaseButton></ClickBaseButton>
    <h1>bt10:</h1>
    <ParentBaseInput></ParentBaseInput>
  </div>
</template>

<script setup>
import ParentComponent from './components/bt1/ParentComponent.vue';
import ParentBaseInput from './components/bt10/ParentBaseInput.vue';
import ProductParent from './components/bt2/ProductParent.vue';
import CountParent from './components/bt3/CountParent.vue';
import TodoApp from './components/bt4/TodoApp.vue';
import OpenModal from './components/bt5/OpenModal.vue';
import OpenCart from './components/bt6/OpenCart.vue';
import MessageParent from './components/bt7/MessageParent.vue';
import ListUser from './components/bt8/ListUser.vue';
import ClickBaseButton from './components/bt9/ClickBaseButton.vue';
</script>

<style scoped>
/* Additional styles can be added here */
</style>
