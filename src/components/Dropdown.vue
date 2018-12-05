<template>
  <div class="dropdown-group">
    <label>{{ label }}</label>
    <select
      class="radio-item"
      v-model="selected">
      <option
        v-for="(item, index) in options"
        v-bind:index="index"
        v-bind:key="item.id"
        :value="item.label"
        :name="name">
          {{ item.label }}
        </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "Dropdown",
  props: ["label", "type", "name", "options"],
  data: ({$options}) => {
    const { propsData: { options } } = $options || {}
    const selected = options ? options.filter(el => el.value).map(el => el.label)[0] : []
    return { selected };
  }
}
</script>
<style lang="scss">
  .dropdown-group {
    text-align: left;
    margin: 0 0 20px;

    select {
      width: 100%;
      display: inline-block;
      padding: 12px;
      font-size: 1em;
      height: 30px;
    }

    label {
      padding: 0 0 15px;
      display: inline-block;
    }
  }
</style>
