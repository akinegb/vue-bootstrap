<template>
  <form class="form">
    <div
      v-for="(item, index) in questions"
      v-bind:key="index"
      v-bind:index="index">
      <div v-if=" item.type == 'text' ">
        <Input
          v-bind:type="item.type"
          v-bind:label="item.label"
          v-bind:value="item.value"
          v-bind:field="item"/>
      </div>
      <div v-if=" item.type == 'select' ">
        <Dropdown
          v-bind:type="item.type"
          v-bind:label="item.label"
          v-bind:options="item.options"
          v-bind:name="item.name"
          v-bind:field="item"/>
      </div>
      <div v-if=" item.type == 'textarea' ">
        <Textarea
          v-bind:type="item.type"
          v-bind:label="item.label"
          v-bind:value="item.value"
          v-bind:field="item"/>
      </div>
      <div v-if=" item.type == 'radio' ">
        <RadioButton
          v-bind:type="item.type"
          v-bind:label="item.label"
          v-bind:options="item.options"
          v-bind:name="item.name"
          v-bind:RadioButton="item"/>
      </div>
      <div v-if=" item.type == 'checkbox' ">
        <CheckBox
          v-bind:type="item.type"
          v-bind:label="item.label"
          v-bind:options="item.options"
          v-bind:name="item.name"
          v-bind:CheckBox="item"/>
      </div>
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
