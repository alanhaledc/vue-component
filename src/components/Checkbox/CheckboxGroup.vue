<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../assets/mixins/emitter'
import { findAllComponentDownward } from '../../assets/utils/assist'

export default {
  name: 'CheckboxGroup',
  mixins: [Emitter],
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentValue: this.value,
      childrens: []
    }
  },
  mounted() {
    this.updateModel(true)
  },
  watch: {
    value() {
      this.updateModel(true)
    }
  },
  methods: {
    updateModel(isUpdateChildren) {
      this.childrens = findAllComponentDownward(this, 'Checkbox') // 获取所有的子组件

      if (this.childrens) {
        const { value } = this // 必须提前缓存 value
        this.childrens.forEach(child => {
          child.model = value // 把值传递给子组件

          // 是否更新子组件
          if (isUpdateChildren) {
            // 当子组件的的 label 匹配到 value 时为 true
            child.currentValue = value.indexOf(child.label) > -1
            child.hasGroup = true
          }
        })
      }
    },

    // 更新值
    change(data) {
      this.currentValue = data
      this.$emit('input', data)
      this.$emit('on-change', data)
      this.dispatch('FormItem', 'on-form-change', data) // 派发事件给 FormItem 组件
    }
  }
}
</script>

<style>
</style>
