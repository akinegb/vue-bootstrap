<template>
  <button v-on:click="submit('submit')">{{name}}</button>
</template>
<script>
  export default {
    props: ['name'],
    methods: {
      submit: () => {
        /* eslint-disable */
        console.warn('submitted form')
      }
    }
  }
</script>
<style lang="scss">
  button {
    border: 0 transparent solid;
    background: #dfdfdf;
    padding: 15px 35px;
    font-size: 1em;
  }
</style>
