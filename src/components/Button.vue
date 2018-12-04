<template>
  <button v-on:click="submit('submit')">{{name}}</button>
</template>
<script>
  export default {
    props: ["name"],
    methods: {
      submit: () => {
      }
    }
  }
</script>
<style lang="scss">
  button {
    border: 0 transparent solid;
    color: white;
    background: black;
    padding: 15px 35px;
    font-size: 1em;

    &.left {
      float: left;
    }

    &.margin {
      margin: 16px 0;
    }
  }
</style>
