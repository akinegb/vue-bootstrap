<template>
  <label
    class="textarea">
    <span>{{ label }}</span>
    <textarea
      :class="inputStatus"
      :id="label"
      v-model="textarea"
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
    const textarea = value || ''
    return { textarea, inputStatus: "" };
  }
};
</script>
<style lang="scss">
  .textarea {
    display: block;
    padding: 0 0 8px;
    margin: 0 0 20px;

    label {
      padding: 0 0 20px;
    }

    span {
      display: block;
      text-align: left;
      padding: 0 0 10px 0;
      width: calc(100% - 30px);
      font-size: 1em;
    }

    textarea {
      background: #f6f6f6;
      border-color: #d4d4d4;
      border-width: 0 0 1px 0;
      border-style: solid;
      display: inline-block;
      padding: 12px;
      font-size: 1em;
      width: calc(100% - 30px);
      height: 100px;
      resize: none;

      &:focus {
        outline: 0 solid transparent;
      }
    }
  }
</style>
