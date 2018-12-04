<template>
  <form class="form">
    <div
      v-for="(item, index) in questions"
      v-bind:key="item.id"
      v-bind:index="index">
      <Input
        v-bind:type="item.type"
        v-bind:label="item.label"
        v-bind:field="item"/>
      <RadioButton
        v-bind:type="item.type"
        v-bind:label="item.label"
        v-bind:options="item.options"
        v-bind:name="item.name"
        v-bind:RadioButton="item"/>
    </div>
    <Button class="left margin" name="Next"/>
  </form>
</template>

<script>
import RadioButton from "./RadioButton";
import Input from "./Input";
import Button from "./Button";
export default {
  components: { Input, Button, RadioButton },
  computed: {
    questions: ({$store}) => {
      const { state: { questions } } = $store || {}
      return questions
    }
  }
}
</script>
