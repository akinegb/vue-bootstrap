<template>
  <label class="input-row">
    <span>{{name}}:</span>
    <input
      :class="inputStatus"
      :placeholder="!inputStatus ? name : '' "
      v-on:focus="setStatus"
      v-on:blur="setStatus"/>
  </label>
</template>
<script>
  export default {
    props: ['name'],
    methods: {
      setStatus: function (e) {
        this.inputStatus = e.type === "focus" ? "active" : ""
      }
    },
    data: () => {
      return { inputStatus: "" };
    },
  };
</script>
<style lang="scss">
  .input-row {
    display: block;
    padding: 0 0 8px;

    span {
      display: none;
      text-align: right;
      padding: 0 10px;
      min-width: 120px;
    }

    input {
      border: #d4d4d4 1px solid;
      display: inline-block;
      padding: 16px 12px;
      font-size: 1em;
      min-width: 280px;
    }
  }
</style>
