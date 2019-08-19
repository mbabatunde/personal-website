<template>
<main>
    <div class="home">
        <img src="../assets/avataaars.svg">
        <h1>Hello, I'm {{ name }}!</h1>
        <h3>Student. Developer. Artist.</h3>
        <button @click='start'>Throw Confetti!</button>
        <button @click='stop'>No More Confetti</button>
    </div>
  </main>
</template>

<script>
import Vue from 'vue';
import VueConfetti from 'vue-confetti';

Vue.use(VueConfetti);

export default {
  name: 'Home',
  data() {
    return {
      name: 'Mark Babatunde',
    };
  },
  methods: {
    start() {
      this.$confetti.start();
    },
    stop() {
      this.$confetti.stop();
    },
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
