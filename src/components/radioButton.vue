<template>
  <div class="radio-group">
    <label>{{ label }}</label>
    <div
      class="radio-item"
      v-for="(item, index) in options"
      v-bind:index="index"
      v-bind:key="item.id">
      <input
        :type="type"
        :name="name"/>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "RadioButton",
  props: ["label", "type", "name", "options"]
}
</script>
<style>
  .radio-group {
    text-align: left;
  }
</style>
