<template>
  <div class="test-a">
    <h1>test A component</h1>
    <button @click="handleClick">broadcast</button>
    <test-b />
  </div>
</template>

<script>
import Emitter from '../assets/mixins/emitter'
import TestB from './testB'

export default {
  name: 'testA',
  components: {
    TestB
  },
  mixins: [Emitter],
  mounted() {
    this.$on('on-msg', this.showMsg) // 监听 testC 派发的事件
  },
  methods: {
    handleClick() {
      this.broadcast('testC', 'on-message', 'hello broadcast') // 广播事件
    },
    showMsg(text) {
      window.alert(text)
    }
  }
}
</script>

<style>
</style>
