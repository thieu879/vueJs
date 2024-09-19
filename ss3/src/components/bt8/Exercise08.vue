<template>
  <div>
    <a @click.stop.prevent="checkUrl" href="https://www.google.com">Link có "s"</a>
    <br>
    <a @click.stop.prevent="checkUrl" href="http://www.google.com">Link không có "s"</a>
  </div>
</template>

<script setup>
const checkUrl = (e) => {
  const href = e.target.href;
  if (href.startsWith("https")) {
    window.location.href = href;
  } else {
    alert("Link lỗi");
  }
}
</script>

<style>

</style>
