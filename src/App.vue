<template>
  <div class="app">
    <test-tree></test-tree>
  </div>
</template>

<script>
import TestTree from './test/testTree'

export default {
  name: 'App',
  components: {
    TestTree
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
