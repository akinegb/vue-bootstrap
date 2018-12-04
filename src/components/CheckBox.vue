<template>
  <div class="checkbox-group">
    <label>{{ label }}</label>
    <div
      class="checkbox-item"
      v-for="(item, index) in options"
      v-bind:index="index"
      v-bind:key="index">
      <input
        :type="type"
        v-model="checked"
        :value="item.label"
        :id="item.label.toLowerCase()"/>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "CheckBox",
  props: ["label", "type", "name", "options", "value"],
  data: ({$options}) => {
    const { propsData: { options } } = $options || {}
    const checked = options ? options.map(el => el.value ? el.label : null) : []
    return { checked };
  }
}
</script>
<style>
  .checkbox-group {
    text-align: left;
  }
</style>
