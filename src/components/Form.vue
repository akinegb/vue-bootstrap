<template>
  <form class="form">
    <div
      v-for="(item, index) in questions"
      v-bind:key="index"
      v-bind:index="index">
      <Input
        v-if=" item.type == 'text' "
        v-bind="item"/>
      <Dropdown
        v-else-if=" item.type == 'select' "
        v-bind="item"/>
      <Textarea
        v-else-if=" item.type == 'textarea' "
        v-bind="item"/>
      <RadioButton
        v-else-if=" item.type == 'radio' "
        v-bind="item"/>
      <CheckBox
        v-else-if=" item.type == 'checkbox' "
        v-bind="item"/>
    </div>
    <Button class="left margin" name="Next"/>
  </form>
</template>

<script>
import Dropdown from "./Dropdown";
import Textarea from "./Textarea";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";
import Input from "./Input";
import Button from "./Button";
export default {
  components: { Input, Button, RadioButton, CheckBox, Textarea, Dropdown },
  computed: {
    questions: ({$store}) => {
      const { state: { questions } } = $store || {}
      return questions
    }
  }
}
</script>
