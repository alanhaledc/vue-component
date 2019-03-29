<template>
  <div class="test-b">
    <h2>test B component</h2>
    <test-c />
  </div>
</template>

<script>
import TestC from './testC'

export default {
  name: 'testB',
  components: {
    TestC
  }
}
</script>

<style>
</style>
