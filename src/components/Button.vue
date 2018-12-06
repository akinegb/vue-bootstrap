<template>
  <button v-on:click="onClick">{{name}}</button>
</template>
<script>
  export default {
    props: ["name", "click"],
    methods: {
      onClick (e) {
        const { $options: { propsData: { click }} } = this || {}
        e.preventDefault()
        click()
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

    &:focus {
      outline: 0 transparent solid;
      transition: all 500ms;
      background: lighten(black, 10%)
    }

    &.left {
      float: left;
    }

    &.margin {
      margin: 16px 0;
    }
  }
</style>
