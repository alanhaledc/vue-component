<template>
  <div class="app">
    <test-checkbox></test-checkbox>
  </div>
</template>

<script>
import TestCheckbox from './test/testCheckbox'

export default {
  name: 'App',
  components: {
    TestCheckbox,
  },
  provide() {
    return {
      app: this
    }
  }
}
</script>

<style>
</style>
