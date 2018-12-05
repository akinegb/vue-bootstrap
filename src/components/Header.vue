<template>
  <header class="header">
    <div class="container">
      <div class="header-container">
        <div class="logo">
          <img alt="Fjord logo" src="../assets/Fjord-logo-white-large.png">
        </div>
        <ul class="header-navigation">
        <li
          v-for="(item, index) in Navigation"
          v-bind:key="index"
          v-bind:index="index">
          <router-link :to="item.href">{{ item.name }}</router-link>
        </li>
      </ul>
      </div>
    </div>
  </header>
</template>
<script>
  export default {
    name: "Header",
    props: ['item'],
    data: () => ({
      Text: "lhkuyjvgh",
      Navigation: [
        { name: "Home", href: "/" },
        { name: "Profile", href: "/profile" },
        { name: "Preferences", href: "/preferences" }
      ]
    })
  }
</script>
<style lang="scss">
  .header {
    position: relative;
    z-index: 999;
    padding: 30px 0 10px;
    flex-flow: row wrap;

    &-container {
      display: flex;
      flex-flow: row wrap;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      flex: 1 80%;
      text-align: right;

      li {
        display: inline-block;
        padding: 10px;
        text-transform: uppercase;
      }

      a {
        text-decoration: none;
        color: black;
      }
    }

    .logo {
      flex: 1 20%;
      text-align: left;

      img {
        max-width: 150px;
      }
    }
  }
</style>
