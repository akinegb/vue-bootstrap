<template>
  <div class="question">
    <p>Question <span>{{step}}</span></p>
    <slot/>
    <Button
      :click="backStep"
      name="Back"/>
    <Button
      :click="nextStep"
      name="Next Step"/>
  </div>
</template>
<script>
import Button from "./Button"
export default {
  name: "Question",
  props: ["title", "QuestionNumber", "step", "nextStep", "backStep"],
  components: { Button },
}
</script>
<style lang="scss">
  .question {
    display: block;
    text-align: left;
    font-size: 1.25em;
  }
</style>
