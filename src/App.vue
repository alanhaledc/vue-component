<template>
  <div class="app">
    <test-form></test-form>
  </div>
</template>

<script>
import TestForm from './test/testForm'

export default {
  name: 'App',
  components: {
    TestForm
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
