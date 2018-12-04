<template>
  <label
    class="input-row">
    <span>{{ label }}</span>
    <input
      :class="inputStatus"
      :type="type"
      v-on:focus="setStatus"
      v-on:blur="setStatus"/>
  </label>
</template>
<script>
export default {
  name: "Input",
  props: ["label", "type"],
  methods: {
    setStatus: function (e) {
      this.inputStatus = e.type === "focus" ? "active" : ""
    }
  },
  data: () => ({
    inputStatus: ""
  }),
};
</script>
<style lang="scss">
  .input-row {
    display: block;
    padding: 0 0 8px;
    margin: 0 0 20px;

    span {
      display: block;
      text-align: left;
      padding: 0 10px;
      width: calc(100% - 30px);
      font-size: 1em;
    }

    input {
      border-color: #d4d4d4;
      border-width: 0 0 1px 0;
      border-style: solid;
      display: inline-block;
      padding: 24px 12px 8px 0;
      font-size: 1em;
      width: calc(100% - 30px);

      &:focus {
        outline: 0 solid transparent;
      }
    }
  }
</style>
