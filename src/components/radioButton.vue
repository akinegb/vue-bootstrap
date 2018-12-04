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
    const selected = options ? options.filter(el => el.value).map(el => el.label)[0] : []
    return { selected };
  }
}
</script>
<style lang="scss">
  .radio-group {
    text-align: left;
    margin: 0 0 20px;

    label {
      padding: 0 0 15px;
      display: inline-block;
    }
  }
</style>
