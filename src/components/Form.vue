<template>
  <form class="form">
    <Input
      v-for="(item, index) in questions"
      v-bind:key="item.id"
      v-bind:index="index"
      :name="item.question"/>
    <Button class="left margin" name="Next"/>
  </form>
</template>

<script>
import Input from './Input';
import Button from './Button';
export default {
  components: { Input, Button },
  computed: {
    questions: function() {
      const { $store: { state: { questions: questions }  }} = this || {}
      return questions
    }
  }
}
</script>
