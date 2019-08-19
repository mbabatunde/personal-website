<template>
  <div class="home">
      <img src="../assets/avataaars.svg">
      <h1>Hello, I'm {{ name }}!</h1>
      <h3>Student. Developer. Artist.</h3>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      name: 'Mark Babatunde',
    };
  },
};
</script>

<style scoped>
.home {
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
}
</style>
