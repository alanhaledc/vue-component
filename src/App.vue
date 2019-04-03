<template>
  <div class="app">
    <test-display></test-display>
  </div>
</template>

<script>
import TestDisplay from './test/testDisplay'

export default {
  name: 'App',
  components: {
    TestDisplay
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
