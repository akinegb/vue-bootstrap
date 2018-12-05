<template>
  <footer class='footer'>
    <div class="container">
      <div class="footer-container">
        <div class="logo">
          <img class="logo" alt="Fjord logo" src="../assets/Fjord-logo-white-large.png">
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    name: "Header"
  }
</script>
<style lang="scss">
  .footer {
    background: #e8e8e8;

    &-container {
      display: flex;
      flex-flow: row wrap;
    }

    .logo {
      flex: 1 20%;

      img {
        max-width: 150px;
      }
    }
  }
</style>
