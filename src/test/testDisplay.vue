<template>
  <div>
    <h3>动态渲染.vue 文件的组件 - Display</h3>
    <m-display :code="code"></m-display>
  </div>
</template>

<script>
import MDisplay from '../components/Display/Display'
import codeStr from '../assets/js/code'

export default {
  components: {
    MDisplay
  },
  data() {
    return {
      code: codeStr
    }
  }
}
</script>

<style>
</style>
