<template>
  <form class="form">
    <Question
      v-bind="form">
      <Input
        v-if=" form.question.type == 'text' "
        v-bind="form.question"/>
      <Dropdown
        v-else-if=" form.question.type == 'select' "
        v-bind="form.question"/>
      <Textarea
        v-else-if=" form.question.type == 'textarea' "
        v-bind="form.question"/>
      <RadioButton
        v-else-if=" form.question.type == 'radio' "
        v-bind="form.question"/>
      <CheckBox
        v-else-if=" form.question.type == 'checkbox' "
        v-bind="form.question"/>
    </Question>
  </form>
</template>

<script>
import Dropdown from "./Dropdown";
import Textarea from "./Textarea";
import CheckBox from "./CheckBox";
import RadioButton from "./RadioButton";
import Input from "./Input";
import Question from "./Question";
export default {
  components: { Input, RadioButton, CheckBox, Textarea, Dropdown, Question },
  updated: function () {

    const { state: { form: { currentProgress: { step } }, cases } } = this.$store || {}
    const id = cases[0].id // temporary hard-code id
    this.nextRoute = `/assessment/${id}/basics/${step}`;
    this.$router.push(this.nextRoute)

  },
  watch: {
    $route () {
      this.$store.dispatch('updateStep', { step: this.$route.params.questionid })
    }
  },
  computed: {
    form ({$store}) {
      const { state: { form: { sections: { basics }, currentProgress: { step } } } } = $store || {}

      const nextStep = () => {
        $store.dispatch('nextStep')
      }

      const backStep = () => {
        $store.dispatch('backStep')
      }

      return {
        question: basics[step],
        questions: basics,
        nextStep,
        backStep,
        step
      }
    }
  }
}
</script>
