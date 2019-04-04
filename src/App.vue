<template>
  <div class="app">
    <test-table></test-table>
  </div>
</template>

<script>
import TestTable from './test/testTableRender-3'

export default {
  name: 'App',
  components: {
    TestTable
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
