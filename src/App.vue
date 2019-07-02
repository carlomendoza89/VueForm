<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/boba.jpg">
    <br>
    <router-link to="/form">form</router-link>
    <br>
    <router-link to="/orders">orders</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
