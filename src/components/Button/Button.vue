<template>
  <button
    :class="'m-button-size-' + size"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, validList) {
  for (let item of validList) {
    if (item === value) {
      return true
    }
  }
  return false
}

export default {
  name: 'Button',
  props: {
    size: {
      type: String,
      validator(value) {
        return oneOf(value, ['small', 'large', 'default'])
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('on-click', event)
    }
  }
}
</script>

<style>
.m-button-size-small {
  font-size: 12px;
}
.m-button-size-large {
  font-size: 20px;
}
.m-button-size-default {
  font-size: 16px;
}
</style>
