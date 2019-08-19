<template>
  <nav>
      <img class="avatar" src="../assets/avataaars-2.svg">
      <router-link
      class="links"
      :class="{ 'light-mode': isLightMode, 'dark-mode': isDarkMode, 'active': hover }"
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
      isLightMode: true,
      isDarkMode: false,
    };
  },
  methods: {
    toggleDark() {
      // const body = document.getElementById('body');
      // const currClass = body.className;
      const allLightElements = document.getElementsByClassName('links light-mode');
      const allDarkElements = document.getElementsByClassName('links dark-mode');
      console.log(this.curMode);
      switch (this.curMode) {
        case 'Light':
          console.log('the light');
          this.curMode = 'Dark';
          this.isLightMode = false;
          this.isDarkMode = true;
          document.getElementById('body').className = 'dark-mode';
          // allLightElements = document.getElementsByClassName('links light-mode');
          while (allLightElements.length > 0) {
            allLightElements[0].setAttribute('class', 'links dark-mode');
          }
          break;
        case 'Dark':
          console.log('being triggered');
          this.curMode = 'Light';
          this.isLightMode = true;
          this.isDarkMode = false;
          document.getElementById('body').className = 'light-mode';
          // allDarkElements = document.getElementsByClassName('links dark-mode');
          while (allDarkElements.length > 0) {
            allDarkElements[0].setAttribute('class', 'links light-mode');
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
  margin-right: 10%;
  display: inline-block;
  vertical-align: middle;
  margin-top: 1%;
}

.avatar {
  margin-right: 10%;
  display: inline-block;
  vertical-align: top;
  width: 40px;
  height: 40px;
}

nav {
  margin-bottom: 2%;
}

nav a {
  text-decoration: none;
}

.active {
  text-decoration: underline;
  /* Vuejs Color */
  text-decoration-color: #00ccff;
  color: #ffffff;
}

a {
  color: black;
}

a.links.dark-mode {
  color: #ffffff;
}

a.links.light-mode {
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

