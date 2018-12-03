<template>
  <form v-on:click="checkState" class="form">
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
    questions: ({$store}) => {
      return $store.state.questions
    }
  },
  methods: {
    checkState: function() {
      // eslint-disable-next-line
      console.log(this.$store.state)
      return "test"
    }
  }
}
</script>
