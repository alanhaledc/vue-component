<template>
  <input type="text" :value="value" @input="handleInput" @blur="handleBlur" />
</template>

<script>
import Emitter from '../../assets/mixins/emitter'

export default {
  name: 'Input',
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput(event) {
      const value = event.target.value
      this.currentValue = value
      this.$emit('input', value)
      this.dispatch('FormItem', 'on-from-change', value)
    },
    handleBlur() {
      this.dispatch('FormItem', 'on-from-blur', this.currentValue)
    }
  }
}
</script>

<style>
</style>
