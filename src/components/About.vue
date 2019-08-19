<template>
  <div class="about">
      <h1>{{ msg }}</h1>
      <div class="image">
        <img src="../assets/avataaars-2.svg" alt="An actual picture will be here soon">
      </div>
      <div class="quote">
        <p id="mainQuote">“Start where you are. Use what you have. Do what you can.”</p>
        <p id="author">-- Arthur Ashe</p>
        <p>{{ pg_one }}</p>
        <p v-html="pg_two"></p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'About Me',
      pg_one: 'Hi! I\'m Mark and thanks for visiting my website! I\'m a senior at the University of Pittsburgh interested in frontend, backend, and mobile development. Development has always been seen as an art to me and incorporating various ideas and systems into a project can make it even more beautiful.',
      pg_two: 'This website is just one of my many creations and I hope you have the time to explore it and ask me questions. I couldn\'t have made this site without the help of <a href="https://vuejs.org/v2/guide/">Vue.js (incredible frontend framework)</a> and the various components created by various developers!',
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 5%;
}

.quote {
    margin-top: 7%;
    font-size: 1.125em;
    padding-left: 40%;
    padding-right: 10%;
    text-align: justify;
}

#mainQuote {
  font-style: italic;
  font-size: 1.2em;
  text-align: right;
}

#author {
  margin-top: -15px;
  text-align: right;
}

.image {
  float: left;
  padding-left: 3%;
}

img {
  width: 400px;
  height: 400px;
}
</style>
