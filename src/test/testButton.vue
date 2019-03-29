<template>
  <div>
    <m-button size="large" @click.native="alert" :disabled="disabled">
      test button
    </m-button>
  </div>
</template>

<script>
import MButton from '../components/Button/Button'

export default {
  components: {
    MButton
  },
  data() {
    return {
      disabled: false
    }
  },
  methods: {
    alert() {
      alert('hello alert')
    }
  }
}
</script>

<style>
</style>
