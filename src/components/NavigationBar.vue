<template>
  <nav>
      <img class="avatar" src="../assets/avataaars.svg">
      <router-link
      class="links light-mode"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }"
      v-on:click=toggleDark
      v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      <button class="light-mode" v-on:click=toggleDark>Currently: {{ curMode }} Mode</button>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Mark Babatunde',
          page: '/',
        },
        {
          id: 1,
          text: 'About',
          page: '/about',
        },
        {
          id: 2,
          text: 'Blog',
          page: '/blog',
        },
        {
          id: 3,
          text: 'Resume',
          page: '/resume',
        },
      ],
      curMode: 'Light',
      hover: false,
    };
  },
  methods: {
    toggleDark() {
      // const body = document.getElementById('body');
      // const currClass = body.className;
      let allElements;
      switch (this.curMode) {
        case 'Light':
          this.curMode = 'Dark';
          document.getElementById('body').className = 'dark-mode';
          allElements = document.getElementsByClassName('links light-mode');
          for (let i = 0; i < allElements.length; i++) {
            allElements[i].setAttribute('class', 'links dark-mode');
          }
          break;
        case 'Dark':
          this.curMode = 'Light';
          document.getElementById('body').className = 'light-mode';
          allElements = document.getElementsByClassName('links dark-mode');
          for (let j = 0; j < allElements.length; j++) {
            allElements[j].setAttribute('class', 'links light-mode');
          }
          break;
        default:
          this.curMode = 'Light';
      }
    },
  },
};
</script>

<style scoped>
.links {
  margin-right: 10px;
  display: inline-block;
  vertical-align: top;
  margin-top: 2%;
}

.avatar {
  margin-right: 10px;
  display: inline-block;
  vertical-align: top;
  width: 7%;
  height: 7%;
}

nav {
  border-bottom: 3px solid #000000;
  margin-bottom: 2%;
}

nav a {
  text-decoration: none;
}

.active {
  text-decoration: underline;
  /* Vuejs Color */
  text-decoration-color: #42b883;
}

a {
  color: black;
}

a.dark-mode {
  color: #ffffff;
}

a.light-mode {
  color: #111111;
}
</style>

<style>
body.dark-mode {
  background-color: #111111;
  color: #ffffff;
}

a.dark-mode {
  color: #ffffff;
}

body.light-mode {
  background-color: #EEEEEE;
  color: #111111;
}

a.light-mode {
  color: #111111
}
</style>

