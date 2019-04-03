<template>
  <div class="app">
    <test-alert></test-alert>
  </div>
</template>

<script>
import TestAlert from './test/testAlert'

export default {
  name: 'App',
  components: {
    TestAlert
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
