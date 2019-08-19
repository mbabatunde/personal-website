<template>
  <div class="blog">
      <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      msg: 'Coming soon! Stay tuned!',
    };
  },
};
</script>

<style scoped>
h1 {
    margin-top: 5%;
}
</style>
