<template>
  <div class="home">
      <img src="../assets/avataaars.svg">
      <h1>Hello, I'm {{ name }}!</h1>
      <h3>Student. Developer. Artist.</h3>
      <button @click='start'>Throw Confetti!</button>
      <button @click='stop'>No More Confetti</button>
  </div>
</template>

<script>
import Vue from 'vue';
import VueConfetti from 'vue-confetti';

export default {
  name: 'Home',
  data() {
    return {
      name: 'Mark Babatunde',
    };
  },
  methods: {
    start() {
      this.$confetti.start({});
    },
    stop() {
      this.$confetti.stop({});
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

h1 {
  font-size: 3em;
}

h3 {
  font-size: 1.5em;
}
</style>
