<template>
  <label
    class="input-row">
    <span>{{ label }}</span>
    <input
      :class="inputStatus"
      :type="type"
      :id="label"
      v-model="text"
      v-on:focus="setStatus"
      v-on:blur="setStatus"/>
  </label>
</template>
<script>
export default {
  name: "Input",
  props: ["label", "type", "value"],
  methods: {
    setStatus: function (e) {
      this.inputStatus = e.type === "focus" ? "active" : ""
    }
  },
  data: ({$options}) => {
    const { propsData: { value } } = $options || {}
    const text = value || ''
    return { text, inputStatus: "" };
  }
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
      padding: 0 0 10px;
      width: 100%;
      font-size: 1em;
    }

    input {
      background: transparent;
      border-color: #8f8f8f;
      border-width: 0 0 1px 0;
      border-style: solid;
      display: inline-block;
      padding: 24px 0 8px 0;
      font-size: 1em;
      width: 100%;

      &:focus {
        outline: 0 solid transparent;
      }
    }
  }
</style>
