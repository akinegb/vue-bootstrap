<template>
  <form class="user-panel">
  </form>
</template>

<script>
export default {
  computed: {
    questions: ({$store}) => {
      const { state: { questions } } = $store || {}
      return questions
    }
  }
}
</script>
<style>
  form {
    display: block
  }
</style>
