<template>
  <nav>
      <img class="avatar" src="../assets/avataaars.svg">
      <router-link class="links" v-for="routes in links"
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
      <button class="light-mode" v-on:click=toggleDark>{{ curMode }} Mode</button>
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
    };
  },
  methods: {
    toggleDark() {
      // const body = document.getElementById('body');
      // const currClass = body.className;
      switch (this.curMode) {
        case 'Light':
          this.curMode = 'Dark';
          document.getElementById('body').className = 'dark-mode';
          break;
        case 'Dark':
          this.curMode = 'Light';
          document.getElementById('body').className = 'light-mode';
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
</style>

<style>
body.dark-mode {
  background-color: #111111;
  color: #EEEEEE;
  a {
    color: #111111;
  }
}

body.light-mode {
  background-color: #EEEEEE;
  color: #111111;
  a {
    color: #EEEEEE;
  }
}


</style>

