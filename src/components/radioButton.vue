<template>
  <div class="radio-group">
    <label>{{ label }}</label>
    <div
      class="radio-item"
      v-for="(item, index) in options"
      v-bind:index="index"
      v-bind:key="item.id">
      <input
        v-model="selected"
        :id="item.label.toLowerCase()"
        :value="item.label"
        :type="type"
        :name="name"/>
      <span>{{ item.label }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "RadioButton",
  props: ["label", "type", "name", "options"],
  data: ({$options}) => {
    const { propsData: { options } } = $options || {}
    const selected = options.map(el => el.value ? el.label : null)[0]
    // const selected = options ? options.map(el => el.value ? el.label : null)[0] : ''
    return { selected };
  }
}
</script>
<style>
  .radio-group {
    text-align: left;
  }
</style>
