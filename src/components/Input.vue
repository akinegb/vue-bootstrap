<template>
  <label class="input-row">
    <span>{{name}}:</span>
    <input :placeholder="name" v-on:click="say(name)"/>
  </label>
</template>
<script>
  export default {
    props: ['name'],
    methods: {
      say: message => {
        /* eslint-disable */
        console.warn(message)
      }
    }
  }
</script>
<style lang="scss">
  .input-row {
    display: block;
    padding: 4px 0 0;

    span {
      display: none;
      text-align: right;
      padding: 0 10px;
      min-width: 120px;
    }
    
    input {
      display: inline-block;
      padding: 12px;
      font-size: 1em;
      min-width: 320px;
    }
  }


</style>
