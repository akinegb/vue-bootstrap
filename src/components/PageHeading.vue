<template>
  <div class="page-heading">
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
  export default {
    name: "PageHeading",
    props: ['title']
  }
</script>
<style lang="scss">
  .page-heading {
    display: block;
    text-align: left;
    font-size: 1.75em;
  }
</style>
