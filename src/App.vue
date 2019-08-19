<template>
  <div id="app">
    <NavigationBar></NavigationBar>
    <router-view/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    NavigationBar,
    Home,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}
</style>
