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
  data: () => ({
    questions: [
      { id: 1, question: "What is the name of your software?" },
      { id: 2, question: "Where would you like to have it deployed?" },
      { id: 3, question: "Is the software licence already procured?" },
    ]
  })
}
</script>
