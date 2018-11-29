<template>
  <form class="form">
    <Input name="Name"/>
    <Input name="Phone"/>
    <Input name="Email"/>
    <Button name="Test button"/>
  </form>
</template>

<script>
import Input from './Input';
import Button from './Button';
export default {
  components: { Input, Button }
}
</script>
