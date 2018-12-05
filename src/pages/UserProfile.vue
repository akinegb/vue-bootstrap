<template>
  <BasePage title="User Profile">
    <UserPanel/>
  </BasePage>
</template>
<script>
import UserPanel from '../components/UserPanel'
import BasePage from './BasePage'

export default {
  name: 'Section',
  components: { UserPanel, BasePage }
}
</script>
