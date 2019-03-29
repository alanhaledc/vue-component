<template>
  <div class="test-c">
    <h3>test C component</h3>
    <button @click="handleClick">dispatch</button>
  </div>
</template>

<script>
import Emitter from '../assets/mixins/emitter'

export default {
  name: 'testC',
  mixins: [Emitter],
  created() {
    this.$on('on-message', this.showMessage) // 监听 testA 广播的事件
  },
  methods: {
    showMessage(text) {
      window.alert(text)
    },
    handleClick() {
      this.dispatch('testA', 'on-msg', 'hello dispatch') // 派发事件
    }
  }
}
</script>

<style>
</style>
