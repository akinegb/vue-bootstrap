<template>
  <div id="app">
    <img class="logo" alt="Fjord logo" src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .logo {
    max-width: 150px;
  }
}
</style>
